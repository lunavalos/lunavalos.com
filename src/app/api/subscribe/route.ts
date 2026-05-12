import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, recaptchaToken } = await req.json();

    if (!email || !recaptchaToken) {
      return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 });
    }

    // 1. Verificar reCAPTCHA v3
    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || (recaptchaData.score !== undefined && recaptchaData.score < 0.5)) {
      console.error('reCAPTCHA failed for newsletter:', recaptchaData);
      return NextResponse.json({ error: 'Fallo la verificación de seguridad' }, { status: 400 });
    }

    // 2. Enviar a Resend
    // Nota: Necesitaremos RESEND_API_KEY y RESEND_AUDIENCE_ID en las variables de entorno
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendAudienceId = process.env.RESEND_AUDIENCE_ID;

    if (!resendApiKey || !resendAudienceId) {
        console.error('Resend configuration missing');
        return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 });
    }

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

    if (!resendRes.ok) {
      console.error('Resend API error:', resendData);
      return NextResponse.json({ error: 'Error al procesar la suscripción' }, { status: resendRes.status });
    }

    return NextResponse.json({ success: true, message: 'Suscripción exitosa' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
