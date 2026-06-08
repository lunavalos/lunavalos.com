'use client';

import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Mail, 
  UserCheck, 
  ShieldCheck, 
  Scale, 
  Info, 
  AlertTriangle, 
  LogOut, 
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function TermsPage() {
  const sections = [
    { id: 'descripcion', title: '1. Descripción del Servicio' },
    { id: 'responsabilidades-lunavalos', title: '2. Responsabilidades de LunAvalos' },
    { id: 'responsabilidades-cliente', title: '3. Responsabilidades del Cliente' },
    { id: 'propiedad-intelectual', title: '4. Propiedad Intelectual' },
    { id: 'limitacion-responsabilidad', title: '5. Limitación de Responsabilidad' },
    { id: 'terminacion', title: '6. Terminación' },
    { id: 'jurisdiccion', title: '7. Jurisdicción' },
    { id: 'contacto', title: '8. Contacto' },
  ];

  return (
    <main className="relative min-h-screen bg-[#f8f9fc]">
      <Navbar />

      <PageHero
        title="Términos y Condiciones"
        subtitle="Condiciones de servicio y marco de colaboración con nuestros clientes."
        badge="Legal & Condiciones"
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
                  Términos y Condiciones de Servicio
                </p>
                <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand uppercase tracking-tight mt-2 mb-4">
                  LunAvalos Digital House, S.A.S.
                </h2>
                <div className="inline-block px-3 py-1 bg-white border border-brand/10 rounded-full text-xs text-brand/70 font-semibold shadow-sm">
                  Última actualización: Junio 2026
                </div>
              </motion.div>

              {/* 1. Descripción del Servicio */}
              <motion.div
                id="descripcion"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    1. Descripción del Servicio
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    <strong>LunAvalos Digital House, S.A.S.</strong> (&quot;LunAvalos&quot;) es una agencia de marketing digital que presta servicios de gestión, programación y publicación de contenido en redes sociales en nombre de sus clientes.
                  </p>
                  <p className="mt-4 text-brand/80">
                    El cliente contrata a LunAvalos para administrar sus cuentas de redes sociales (Facebook, Instagram, LinkedIn, TikTok, YouTube) y publicar contenido de acuerdo a una estrategia acordada previamente.
                  </p>
                </div>
              </motion.div>

              {/* 2. Responsabilidades de LunAvalos */}
              <motion.div
                id="responsabilidades-lunavalos"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    2. Responsabilidades de LunAvalos
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-6">
                  <p className="text-brand/80">
                    LunAvalos se compromete formalmente a:
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    'Publicar el contenido aprobado por el cliente en los tiempos acordados.',
                    'Mantener la absoluta confidencialidad de las credenciales y tokens de acceso otorgados.',
                    'Utilizar los accesos a plataformas y redes únicamente para los fines previstos en el servicio contratado.',
                    'Revocar y desvincular de forma segura todos los accesos al término de la relación contractual.'
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-[#f8f9fc] transition-colors border border-transparent hover:border-brand/5">
                      <div className="w-6 h-6 rounded-full bg-brand-soft text-brand-light flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <p className="text-brand/70 text-sm leading-relaxed m-0">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3. Responsabilidades del Cliente */}
              <motion.div
                id="responsabilidades-cliente"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    3. Responsabilidades del Cliente
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-6">
                  <p className="text-brand/80">
                    El cliente asume la responsabilidad y compromiso de:
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    'Proporcionar contenido e información veraz y que no infrinja derechos de propiedad intelectual de terceros.',
                    'Autorizar expresamente a LunAvalos para acceder y publicar en sus cuentas de redes sociales.',
                    'Notificar a LunAvalos cualquier cambio en sus credenciales o accesos de manera oportuna.',
                    'Cumplir cabalmente con los términos de uso y políticas vigentes de cada plataforma de redes sociales vinculada.'
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-[#f8f9fc] transition-colors border border-transparent hover:border-brand/5">
                      <div className="w-6 h-6 rounded-full bg-orange-50 text-secondary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ➔
                      </div>
                      <p className="text-brand/70 text-sm leading-relaxed m-0">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 4. Propiedad Intelectual */}
              <motion.div
                id="propiedad-intelectual"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    4. Propiedad Intelectual
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    El contenido creado por LunAvalos para el cliente (incluyendo textos, diseños gráficos y estrategias de contenido) es propiedad exclusiva del cliente una vez liquidado el pago total del servicio correspondiente.
                  </p>
                </div>
              </motion.div>

              {/* 5. Limitación de Responsabilidad */}
              <motion.div
                id="limitacion-responsabilidad"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    5. Limitación de Responsabilidad
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-6">
                  <p className="text-brand/80">
                    LunAvalos realiza sus mejores esfuerzos profesionales para garantizar la continuidad y el éxito del servicio, sin embargo, no será responsable por:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Cambios de Algoritmo', desc: 'Cambios en las políticas, algoritmos o configuraciones de las plataformas de redes sociales.' },
                    { title: 'Restricciones de Cuenta', desc: 'Suspensión, bloqueo o restricción de cuentas ejecutadas directamente por las plataformas.' },
                    { title: 'Resultados Específicos', desc: 'Resultados y métricas específicas de alcance orgánico, interacciones o tasa de conversiones.' },
                    { title: 'Fallas de Terceros', desc: 'Interrupciones en el servicio causadas por fallas generales de infraestructura o caídas de terceros.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#f8f9fc] border border-brand/5 p-5 rounded-2xl hover:border-brand/10 transition-colors">
                      <h4 className="text-brand font-bold text-sm m-0 mb-1">{item.title}</h4>
                      <p className="text-brand/60 text-xs m-0 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 6. Terminación */}
              <motion.div
                id="terminacion"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <LogOut className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    6. Terminación
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Cualquiera de las partes puede dar por terminada la relación contractual en cualquier momento notificando con un periodo mínimo de <span className="text-brand font-bold">15 días de aviso previo</span> por escrito.
                  </p>
                  <p className="mt-4 text-brand/80">
                    Al momento de la terminación efectiva, LunAvalos se compromete a revocar todos los accesos digitales asociados y a entregar al cliente la confirmación de la entrega y desvinculación segura.
                  </p>
                </div>
              </motion.div>

              {/* 7. Jurisdicción */}
              <motion.div
                id="jurisdiccion"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    7. Jurisdicción
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Este acuerdo se rige en su totalidad por las leyes aplicables y vigentes en los Estados Unidos Mexicanos.
                  </p>
                  <p className="mt-4 text-brand/80">
                    Cualquier controversia o disputa derivada de la interpretación o ejecución del presente acuerdo será sometida exclusivamente ante los tribunales competentes de la ciudad de{' '}
                    <strong className="text-brand font-semibold">Saltillo, Coahuila, México</strong>, renunciando expresamente a cualquier otro fuero que pudiera corresponderles por sus domicilios presentes o futuros.
                  </p>
                </div>
              </motion.div>

              {/* 8. Contacto */}
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
                    8. Información de Contacto
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Para cualquier aclaración, duda o asunto relacionado con los presentes Términos y Condiciones, puede comunicarse directamente con nosotros:
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-light/10 text-brand-light flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Dirección Corporativa</div>
                        <div className="text-brand font-bold">LunAvalos Digital House, S.A.S.</div>
                        <div className="text-brand/70 text-xs mt-1">Calle Gallo 118, Col. Las Maravillas, Saltillo, Coahuila, C.P. 25019, México</div>
                      </div>
                    </div>
                    
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4 justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="text-sm">
                          <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Contacto Electrónico</div>
                          <div className="text-brand font-bold">Asesoría y Soporte</div>
                          <a href="mailto:contacto@lunavalos.com" className="text-secondary font-bold hover:underline block mt-1 text-xs">
                            contacto@lunavalos.com
                          </a>
                        </div>
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
