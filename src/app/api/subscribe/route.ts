import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('>>> [API SUBSCRIBE] Iniciando procesamiento de petición');
  
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      console.error('>>> [API SUBSCRIBE] Cuerpo de petición inválido o vacío');
      return NextResponse.json({ error: 'Cuerpo de petición inválido' }, { status: 400 });
    }

    const { email, turnstileToken } = body;
    
    console.log(`>>> [API SUBSCRIBE] email: ${email}, hasToken: ${!!turnstileToken}`);

    if (!email || !turnstileToken) {
      return NextResponse.json({ 
        error: 'Faltan datos obligatorios',
        debug: { hasEmail: !!email, hasToken: !!turnstileToken }
      }, { status: 400 });
    }

    // 1. Verificar Turnstile (Cloudflare)
    const secretKey = process.env.TURNSTILE_SECRET_KEY || '0x4AAAAAADOJRIH-JU0BOqpREGRen2WtevU';
    
    const params = new URLSearchParams();
    params.append('secret', secretKey);
    params.append('response', turnstileToken);

    const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: params,
    });

    const turnstileData = await turnstileRes.json();
    console.log('>>> [API SUBSCRIBE] Turnstile Response:', turnstileData);

    if (!turnstileData.success) {
      return NextResponse.json({ 
        error: 'Error de validación de seguridad (Turnstile)',
        details: turnstileData.error_codes || turnstileData
      }, { status: 400 });
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
