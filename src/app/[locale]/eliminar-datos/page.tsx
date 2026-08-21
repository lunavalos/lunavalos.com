'use client';

import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { 
  Building, 
  MapPin, 
  Mail, 
  Trash2, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Send,
  Lock,
  ListTodo
} from 'lucide-react';

export default function DeleteDataPage() {
  const locale = useLocale();
  const isEn = locale === 'en';

  const sections = isEn ? [
    { id: 'como-solicitar', title: '1. How to Request Deletion' },
    { id: 'que-eliminamos', title: '2. What Data We Delete' },
    { id: 'tiempo-respuesta', title: '3. Response Time' },
    { id: 'revocacion-plataformas', title: '4. Revoking on Platforms' },
    { id: 'contacto', title: '5. Contact' },
  ] : [
    { id: 'como-solicitar', title: '1. Cómo Solicitar la Eliminación' },
    { id: 'que-eliminamos', title: '2. Qué Datos Eliminamos' },
    { id: 'tiempo-respuesta', title: '3. Tiempo de Respuesta' },
    { id: 'revocacion-plataformas', title: '4. Revocación en Plataformas' },
    { id: 'contacto', title: '5. Contacto' },
  ];

  return (
    <main className="relative min-h-screen bg-[#f8f9fc]">
      <Navbar />

      <PageHero
        title={isEn ? "Data Deletion" : "Eliminación de Datos"}
        subtitle={isEn ? "Request for access revocation and secure deletion of your information." : "Solicitud de revocación de accesos y eliminación segura de tu información."}
        badge={isEn ? "Legal & Privacy" : "Legal & Privacidad"}
        dividerColor="bg-[#f8f9fc]"
      />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Navigation - Sticky on Large Screens */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 bg-white border border-brand/5 p-6 rounded-2xl shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-brand/40 mb-4">
                  {isEn ? "Contents" : "Contenido"}
                </div>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center gap-2 py-2.5 px-3 rounded-lg text-sm text-brand/70 hover:text-brand hover:bg-brand/5 transition-all font-medium"
                    >
                      <ChevronRight className="w-4 h-4 text-brand/30 group-hover:text-brand/70 group-hover:translate-x-0.5 transition-all shrink-0" />
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-brand/5 text-[11px] text-brand/50 font-medium leading-relaxed">
                  {isEn ? "Last updated:" : "Última actualización:"}<br />
                  <span className="text-brand font-bold text-xs">{isEn ? "August 2026" : "Agosto 2026"}</span>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-9 flex flex-col gap-12">
              
              {/* Header Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-brand/5 via-brand/2 to-brand/5 p-8 md:p-10 rounded-3xl border border-brand/5 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
                <p className="m-0 text-brand font-bold uppercase tracking-widest text-xs md:text-sm">
                  {isEn ? "Data Deletion Request" : "Solicitud de Eliminación de Datos"}
                </p>
                <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand uppercase tracking-tight mt-2 mb-4">
                  LunAvalos Digital House, S.A.S.
                </h2>
                <div className="inline-block px-3 py-1 bg-white border border-brand/10 rounded-full text-xs text-brand/70 font-semibold shadow-sm">
                  {isEn ? "Guaranteed Privacy Process" : "Proceso Garantizado de Privacidad"}
                </div>
              </motion.div>

              {/* 1. Cómo Solicitar la Eliminación */}
              <motion.div
                id="como-solicitar"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Send className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    {isEn ? "1. How to Request Data Deletion" : "1. Cómo Solicitar la Eliminación de tus Datos"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    {isEn 
                      ? "If you wish for us to permanently delete your personal information and integrations from our systems, please send an email to:" 
                      : "Si deseas que eliminemos de forma definitiva tu información personal e integraciones de nuestros sistemas, por favor envía un correo electrónico a:"}
                  </p>
                  
                  {/* Email block card */}
                  <div className="my-6 p-6 bg-brand/5 border border-brand/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-brand/40 uppercase font-bold tracking-wider mb-1">
                        {isEn ? "Send email to" : "Enviar correo a"}
                      </div>
                      <a href="mailto:contacto@lunavalos.com" className="text-brand font-extrabold text-lg md:text-xl hover:text-secondary transition-colors underline block">
                        contacto@lunavalos.com
                      </a>
                      <div className="text-xs text-brand/60 mt-1 font-medium">
                        {isEn ? "Subject:" : "Asunto:"} <span className="text-brand font-bold">"{isEn ? "Data deletion request" : "Solicitud de eliminación de datos"}"</span>
                      </div>
                    </div>
                    <a
                      href={isEn ? "mailto:contacto@lunavalos.com?subject=Data deletion request" : "mailto:contacto@lunavalos.com?subject=Solicitud de eliminacion de datos"}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand hover:opacity-90 text-white rounded-xl text-sm font-bold shadow-sm transition-opacity whitespace-nowrap self-start sm:self-center"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{isEn ? "Compose Email" : "Redactar Correo"}</span>
                    </a>
                  </div>

                  <p className="mt-6 text-brand/80 font-bold">
                    {isEn ? "Make sure to include the following details in your message:" : "Asegúrate de incluir en tu mensaje los siguientes datos:"}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 mt-4">
                    {[
                      { 
                        title: isEn ? 'Full Name' : 'Nombre Completo', 
                        desc: isEn ? "Account holder's name" : 'Nombre del titular de la cuenta' 
                      },
                      { 
                        title: isEn ? 'Associated Email' : 'Correo Asociado', 
                        desc: isEn ? 'Email registered in our systems' : 'Email registrado en nuestros sistemas' 
                      },
                      { 
                        title: isEn ? 'Platforms to Revoke' : 'Plataformas a Revocar', 
                        desc: 'Facebook, Instagram, LinkedIn, TikTok, YouTube, WhatsApp' 
                      }
                    ].map((item, i) => (
                      <li key={i} className="bg-[#f8f9fc] border border-brand/5 p-4 rounded-xl flex flex-col">
                        <span className="text-brand font-bold text-sm mb-1">{item.title}</span>
                        <span className="text-brand/50 text-xs">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* 2. Qué Datos Eliminamos */}
              <motion.div
                id="que-eliminamos"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Trash2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    {isEn ? "2. What Data We Delete" : "2. Qué Datos Eliminamos"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-6">
                  <p className="text-brand/80">
                    {isEn 
                      ? "Upon receiving and validating your request, we will proceed to permanently delete the following information:" 
                      : "Al recibir y validar tu solicitud, procederemos a borrar permanentemente la siguiente información:"}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      title: isEn ? 'Access Tokens' : 'Tokens de Acceso', 
                      desc: isEn 
                        ? 'Credentials and authorization tokens linked to your social media and messaging accounts (including WhatsApp).' 
                        : 'Credenciales y tokens de autorización vinculados a tus cuentas de redes sociales y mensajería (incluyendo WhatsApp).' 
                    },
                    { 
                      title: isEn ? 'Profile Information' : 'Información de Perfil', 
                      desc: isEn 
                        ? 'All profile data, configuration, and stored credentials.' 
                        : 'Todos los datos de perfil, configuración y credenciales almacenadas.' 
                    },
                    { 
                      title: isEn ? 'Activity History' : 'Historial de Actividad', 
                      desc: isEn 
                        ? 'History of scheduled, saved, or published content in your name.' 
                        : 'Historial de contenido programado, guardado o publicado en tu nombre.' 
                    },
                    { 
                      title: isEn ? 'Related Personal Data' : 'Datos Personales Relacionados', 
                      desc: isEn 
                        ? 'Any other personal or sensitive data associated with your account.' 
                        : 'Cualquier otro dato personal o sensible que esté asociado a tu cuenta.' 
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-5 rounded-2xl bg-[#f8f9fc] border border-transparent hover:border-brand/5 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✕
                      </div>
                      <div>
                        <h4 className="text-brand font-bold text-sm m-0 mb-1">{item.title}</h4>
                        <p className="text-brand/60 text-xs m-0 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3. Tiempo de Respuesta */}
              <motion.div
                id="tiempo-respuesta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    {isEn ? "3. Response Time" : "3. Tiempo de Respuesta"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    {isEn 
                      ? <>We will process your request within a maximum period of <span className="text-brand font-bold">30 business days</span> starting from the next business day after its receipt.</>
                      : <>Procesaremos tu solicitud en un plazo máximo de <span className="text-brand font-bold">30 días hábiles</span> a partir del día hábil siguiente a su recepción.</>}
                  </p>
                  <p className="mt-4 text-brand/80">
                    {isEn 
                      ? "Once the permanent and secure deletion of all your information is completed, we will notify you by sending a written confirmation to your email."
                      : "Una vez completada la eliminación definitiva y segura de toda tu información, te notificaremos enviando una confirmación por escrito a tu correo electrónico."}
                  </p>
                </div>
              </motion.div>

              {/* 4. Revocación en Plataformas */}
              <motion.div
                id="revocacion-plataformas"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    {isEn ? "4. Access Revocation on Platforms" : "4. Revocación de Accesos en las Plataformas"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-8">
                  <p className="text-brand/80">
                    {isEn 
                      ? "In addition to our internal disconnection, we recommend for security reasons that you directly revoke the permissions granted to our application from the settings of each platform:"
                      : "Adicionalmente a nuestra desvinculación interna, te recomendamos por motivos de seguridad revocar directamente los permisos concedidos a nuestra aplicación desde la configuración de cada plataforma:"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      platform: 'Meta (Facebook / Instagram / WhatsApp)', 
                      steps: isEn ? 'Settings → Security → Apps and websites' : 'Configuración → Seguridad → Apps y sitios web',
                      url: 'https://www.facebook.com/settings?tab=applications'
                    },
                    { 
                      platform: 'LinkedIn', 
                      steps: isEn ? 'Settings → Privacy → Data permissions' : 'Configuración → Privacidad → Permisos de datos',
                      url: 'https://www.linkedin.com/psettings/permitted-services'
                    },
                    { 
                      platform: 'TikTok', 
                      steps: isEn ? 'Profile → Settings → Authorized apps' : 'Perfil → Configuración → Aplicaciones autorizadas',
                      url: 'https://www.tiktok.com/'
                    },
                    { 
                      platform: 'YouTube / Google', 
                      steps: isEn ? 'Security → Third-party apps' : 'Seguridad → Aplicaciones de terceros',
                      url: 'https://myaccount.google.com/permissions'
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#f8f9fc] border border-brand/5 p-6 rounded-2xl flex flex-col justify-between hover:border-brand/10 transition-colors">
                      <div>
                        <h4 className="text-brand font-bold text-sm m-0 mb-2">{item.platform}</h4>
                        <div className="flex items-start gap-2 text-brand/60 text-xs leading-relaxed mb-4">
                          <ListTodo className="w-4 h-4 text-brand/30 shrink-0 mt-0.5" />
                          <span>{isEn ? "Path" : "Ruta"}: {item.steps}</span>
                        </div>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline self-start mt-2"
                      >
                        <span>{isEn ? "Go to Settings" : "Ir a Configuración"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 5. Contacto */}
              <motion.div
                id="contacto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    {isEn ? "5. Data Controller Contact" : "5. Contacto del Responsable"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    {isEn 
                      ? "If you have questions about this procedure, you can communicate directly with our legal department:"
                      : "Si tienes dudas sobre este procedimiento, puedes comunicarte directamente con nuestro departamento legal:"}
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-light/10 text-brand-light flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">{isEn ? "Location" : "Ubicación"}</div>
                        <div className="text-brand font-bold">LunAvalos Digital House, S.A.S.</div>
                        <div className="text-brand/70 text-xs mt-1">{isEn ? "Saltillo, Coahuila, Mexico" : "Saltillo, Coahuila, México"}</div>
                      </div>
                    </div>
                    
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">{isEn ? "Email Address" : "Correo Electrónico"}</div>
                        <div className="text-brand font-bold">{isEn ? "Privacy Support" : "Soporte de Privacidad"}</div>
                        <a href="mailto:contacto@lunavalos.com" className="text-secondary font-bold hover:underline block mt-1 text-xs">
                          contacto@lunavalos.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
