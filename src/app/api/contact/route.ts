import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, company, email, phone, services, message } = data;

    // Configuración del transporte SMTP para Google Workspace
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación de Google
      },
    });

    const mailOptions = {
      from: `"Sitio Web LunAvalos" <${process.env.EMAIL_USER}>`,
      to: 'contacto@lunavalos.com', // Correo destino
      replyTo: email,
      subject: 'Nuevo mensaje desde Lunavalos.com',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #193074;">
          <h2 style="border-bottom: 2px solid #f99f1f; padding-bottom: 10px;">Nuevo Lead de Contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Empresa:</strong> ${company || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Servicios Interesados:</strong> ${services.join(', ') || 'Ninguno seleccionado'}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f4f7ff; border-radius: 8px;">
            <strong>Mensaje:</strong><br/>
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <p style="font-size: 10px; color: #999; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de LunAvalos.com
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ error: 'Fallo al enviar el mensaje' }, { status: 500 });
  }
}
