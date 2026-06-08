'use client';

import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
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
  const sections = [
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
        title="Eliminación de Datos"
        subtitle="Solicitud de revocación de accesos y eliminación segura de tu información."
        badge="Legal & Privacidad"
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
                  Contenido
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
                  Última actualización:<br />
                  <span className="text-brand font-bold text-xs">Junio 2026</span>
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
                  Solicitud de Eliminación de Datos
                </p>
                <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand uppercase tracking-tight mt-2 mb-4">
                  LunAvalos Digital House, S.A.S.
                </h2>
                <div className="inline-block px-3 py-1 bg-white border border-brand/10 rounded-full text-xs text-brand/70 font-semibold shadow-sm">
                  Proceso Garantizado de Privacidad
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
                    1. Cómo Solicitar la Eliminación de tus Datos
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Si deseas que eliminemos de forma definitiva tu información personal e integraciones de nuestros sistemas, por favor envía un correo electrónico a:
                  </p>
                  
                  {/* Email block card */}
                  <div className="my-6 p-6 bg-brand/5 border border-brand/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-brand/40 uppercase font-bold tracking-wider mb-1">Enviar correo a</div>
                      <a href="mailto:contacto@lunavalos.com" className="text-brand font-extrabold text-lg md:text-xl hover:text-secondary transition-colors underline block">
                        contacto@lunavalos.com
                      </a>
                      <div className="text-xs text-brand/60 mt-1 font-medium">
                        Asunto: <span className="text-brand font-bold">&quot;Solicitud de eliminación de datos&quot;</span>
                      </div>
                    </div>
                    <a
                      href="mailto:contacto@lunavalos.com?subject=Solicitud de eliminacion de datos"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand hover:opacity-90 text-white rounded-xl text-sm font-bold shadow-sm transition-opacity whitespace-nowrap self-start sm:self-center"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Redactar Correo</span>
                    </a>
                  </div>

                  <p className="mt-6 text-brand/80 font-bold">
                    Asegúrate de incluir en tu mensaje los siguientes datos:
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 mt-4">
                    {[
                      { title: 'Nombre Completo', desc: 'Nombre del titular de la cuenta' },
                      { title: 'Correo Asociado', desc: 'Email registrado en nuestros sistemas' },
                      { title: 'Plataformas a Revocar', desc: 'Facebook, Instagram, LinkedIn, TikTok, YouTube' }
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
                    2. Qué Datos Eliminamos
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-6">
                  <p className="text-brand/80">
                    Al recibir y validar tu solicitud, procederemos a borrar permanentemente la siguiente información:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Tokens de Acceso', desc: 'Credenciales y tokens de autorización vinculados a tus cuentas de redes sociales.' },
                    { title: 'Información de Perfil', desc: 'Todos los datos de perfil, configuración y credenciales almacenadas.' },
                    { title: 'Historial de Actividad', desc: 'Historial de contenido programado, guardado o publicado en tu nombre.' },
                    { title: 'Datos Personales Relacionados', desc: 'Cualquier otro dato personal o sensible que esté asociado a tu cuenta.' }
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
                    3. Tiempo de Respuesta
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Procesaremos tu solicitud en un plazo máximo de <span className="text-brand font-bold">30 días hábiles</span> a partir del día hábil siguiente a su recepción.
                  </p>
                  <p className="mt-4 text-brand/80">
                    Una vez completada la eliminación definitiva y segura de toda tu información, te notificaremos enviando una confirmación por escrito a tu correo electrónico.
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
                    4. Revocación de Accesos en las Plataformas
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-8">
                  <p className="text-brand/80">
                    Adicionalmente a nuestra desvinculación interna, te recomendamos por motivos de seguridad revocar directamente los permisos concedidos a nuestra aplicación desde la configuración de cada plataforma:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { 
                      platform: 'Meta (Facebook / Instagram)', 
                      steps: 'Configuración → Seguridad → Apps y sitios web',
                      url: 'https://www.facebook.com/settings?tab=applications'
                    },
                    { 
                      platform: 'LinkedIn', 
                      steps: 'Configuración → Privacidad → Permisos de datos',
                      url: 'https://www.linkedin.com/psettings/permitted-services'
                    },
                    { 
                      platform: 'TikTok', 
                      steps: 'Perfil → Configuración → Aplicaciones autorizadas',
                      url: 'https://www.tiktok.com/'
                    },
                    { 
                      platform: 'YouTube / Google', 
                      steps: 'Seguridad → Aplicaciones de terceros',
                      url: 'https://myaccount.google.com/permissions'
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#f8f9fc] border border-brand/5 p-6 rounded-2xl flex flex-col justify-between hover:border-brand/10 transition-colors">
                      <div>
                        <h4 className="text-brand font-bold text-sm m-0 mb-2">{item.platform}</h4>
                        <div className="flex items-start gap-2 text-brand/60 text-xs leading-relaxed mb-4">
                          <ListTodo className="w-4 h-4 text-brand/30 shrink-0 mt-0.5" />
                          <span>Ruta: {item.steps}</span>
                        </div>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline self-start mt-2"
                      >
                        <span>Ir a Configuración</span>
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
                    5. Contacto del Responsable
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Si tienes dudas sobre este procedimiento, puedes comunicarte directamente con nuestro departamento legal:
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-light/10 text-brand-light flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Ubicación</div>
                        <div className="text-brand font-bold">LunAvalos Digital House, S.A.S.</div>
                        <div className="text-brand/70 text-xs mt-1">Saltillo, Coahuila, México</div>
                      </div>
                    </div>
                    
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Correo Electrónico</div>
                        <div className="text-brand font-bold">Soporte de Privacidad</div>
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
