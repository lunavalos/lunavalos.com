import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('>>> [API SUBSCRIBE] Iniciando procesamiento de petición');
  
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      console.error('>>> [API SUBSCRIBE] Cuerpo de petición inválido o vacío');
      return NextResponse.json({ error: 'Cuerpo de petición inválido' }, { status: 400 });
    }

    const { email, recaptchaToken } = body;
    console.log(`>>> [API SUBSCRIBE] Datos recibidos: email=${email}, hasToken=${!!recaptchaToken}`);

    if (!email || !recaptchaToken) {
      return NextResponse.json({ error: 'Faltan datos obligatorios (email o token)' }, { status: 400 });
    }

    // 1. Verificar reCAPTCHA v3
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const maskedSecret = secretKey ? `${secretKey.substring(0, 4)}...${secretKey.substring(secretKey.length - 4)}` : 'MISSING';
    console.log(`>>> [API SUBSCRIBE] Verificando reCAPTCHA. SecretKey: ${maskedSecret}`);
    
    const params = new URLSearchParams();
    params.append('secret', secretKey || '');
    params.append('response', recaptchaToken);

    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const recaptchaData = await recaptchaRes.json() as { 
      success: boolean; 
      score?: number; 
      'error-codes'?: string[];
    };
    console.log('>>> [API SUBSCRIBE] Resultado reCAPTCHA:', recaptchaData);

    if (!recaptchaData.success || (recaptchaData.score !== undefined && recaptchaData.score < 0.5)) {
      console.warn('>>> [API SUBSCRIBE] Validación de seguridad fallida');
      return NextResponse.json({ error: 'ERROR_API_V3_NUEVA' }, { status: 400 });
    }

    // 2. Enviar a Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendAudienceId = process.env.RESEND_AUDIENCE_ID;

    if (!resendApiKey || !resendAudienceId) {
        console.error('>>> [API SUBSCRIBE] Error: Faltan variables de entorno RESEND_API_KEY o RESEND_AUDIENCE_ID');
        return NextResponse.json({ error: 'Error de configuración interna' }, { status: 500 });
    }

    console.log(`>>> [API SUBSCRIBE] Registrando en Resend Audience: ${resendAudienceId}`);

    const resendRes = await fetch(`https://api.resend.com/audiences/${resendAudienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        unsubscribed: false,
      }),
    });

    const resendData = await resendRes.json();
    console.log('>>> [API SUBSCRIBE] Respuesta de Resend:', resendData);

    if (!resendRes.ok) {
      if (resendData.message && resendData.message.includes('already exists')) {
        return NextResponse.json({ success: true, message: 'Ya estabas suscrito' }, { status: 200 });
      }
      return NextResponse.json({ error: 'No se pudo procesar la suscripción' }, { status: resendRes.status });
    }

    console.log('>>> [API SUBSCRIBE] ¡Suscripción completada con éxito!');
    return NextResponse.json({ success: true, message: 'Suscripción exitosa' }, { status: 200 });

  } catch (error: any) {
    console.error('>>> [API SUBSCRIBE] ERROR CRÍTICO:', error);
    return NextResponse.json({ error: `Error Interno: ${error.message}` }, { status: 500 });
  }
}
