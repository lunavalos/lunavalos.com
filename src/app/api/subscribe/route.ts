import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, recaptchaToken } = await req.json();

    if (!email || !recaptchaToken) {
      return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 });
    }

    // 1. Verificar reCAPTCHA v3
    console.log('Verificando reCAPTCHA token...');
    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaRes.json();
    console.log('Resultado reCAPTCHA:', recaptchaData);

    if (!recaptchaData.success || (recaptchaData.score !== undefined && recaptchaData.score < 0.5)) {
      return NextResponse.json({ error: 'Fallo la verificación de seguridad' }, { status: 400 });
    }

    // 2. Enviar a Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendAudienceId = process.env.RESEND_AUDIENCE_ID;

    if (!resendApiKey || !resendAudienceId) {
        console.error('Configuración de Resend faltante en env vars');
        return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 });
    }

    console.log(`Enviando ${email} a Resend Audience: ${resendAudienceId}`);

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
    console.log('Respuesta de Resend:', resendData);

    if (!resendRes.ok) {
      // Si el error es que ya existe, lo tratamos como éxito para el usuario
      if (resendData.message && resendData.message.includes('already exists')) {
        return NextResponse.json({ success: true, message: 'Ya estabas suscrito' }, { status: 200 });
      }
      return NextResponse.json({ error: 'Error en la API de Resend' }, { status: resendRes.status });
    }

    return NextResponse.json({ success: true, message: 'Suscripción exitosa' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
