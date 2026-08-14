'use client';

import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
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
  const locale = useLocale();
  const isEn = locale === 'en';

  const sections = isEn ? [
    { id: 'descripcion', title: '1. Service Description' },
    { id: 'responsabilidades-lunavalos', title: '2. LunAvalos Responsibilities' },
    { id: 'responsabilidades-cliente', title: '3. Client Responsibilities' },
    { id: 'propiedad-intelectual', title: '4. Intellectual Property' },
    { id: 'limitacion-responsabilidad', title: '5. Limitation of Liability' },
    { id: 'terminacion', title: '6. Termination' },
    { id: 'jurisdiccion', title: '7. Jurisdiction' },
    { id: 'contacto', title: '8. Contact Information' },
  ] : [
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
        title={isEn ? "Terms and Conditions" : "Términos y Condiciones"}
        subtitle={isEn ? "Service conditions and collaboration framework with our clients." : "Condiciones de servicio y marco de colaboración con nuestros clientes."}
        badge={isEn ? "Legal & Terms" : "Legal & Condiciones"}
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
                  {isEn ? "Terms and Conditions of Service" : "Términos y Condiciones de Servicio"}
                </p>
                <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand uppercase tracking-tight mt-2 mb-4">
                  LunAvalos Digital House, S.A.S.
                </h2>
                <div className="inline-block px-3 py-1 bg-white border border-brand/10 rounded-full text-xs text-brand/70 font-semibold shadow-sm">
                  {isEn ? "Last updated: August 2026" : "Última actualización: Agosto 2026"}
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
                    {isEn ? "1. Service Description" : "1. Descripción del Servicio"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    <strong>LunAvalos Digital House, S.A.S.</strong> (&quot;LunAvalos&quot;) {isEn ? "is a digital marketing agency that provides social media content management, programming, and publishing services, as well as messaging solutions in name of its clients." : "es una agencia de marketing digital que presta servicios de gestión, programación y publicación de contenido en redes sociales y soluciones de mensajería en nombre de sus clientes."}
                  </p>
                  <p className="mt-4 text-brand/80">
                    {isEn 
                      ? "The client hires LunAvalos to manage their social media accounts and digital messaging platforms (including WhatsApp) in accordance with a previously agreed strategy." 
                      : "El cliente contrata a LunAvalos para administrar sus cuentas de redes sociales y plataformas de mensajería digital (incluyendo WhatsApp) de acuerdo a una estrategia acordada previamente."}
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
                    {isEn ? "2. LunAvalos Responsibilities" : "2. Responsabilidades de LunAvalos"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-6">
                  <p className="text-brand/80">
                    {isEn ? "LunAvalos formally commits to:" : "LunAvalos se compromete formalmente a:"}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {(isEn ? [
                    'Publish content approved by the client in the agreed timeframe.',
                    'Maintain absolute confidentiality and encryption at rest of the provided credentials and access tokens (including WhatsApp tokens).',
                    'Use access to platforms, networks, and messaging APIs solely for the purposes defined in the hired service.',
                    'Securely revoke and unbind all access privileges at the termination of the contract (including WhatsApp application subscriptions).'
                  ] : [
                    'Publicar el contenido aprobado por el cliente en los tiempos acordados.',
                    'Mantener la absoluta confidencialidad y el cifrado en reposo de las credenciales y tokens de acceso otorgados (incluyendo tokens de WhatsApp).',
                    'Utilizar los accesos a plataformas, redes y APIs de mensajería únicamente para los fines previstos en el servicio contratado.',
                    'Revocar y desvincular de forma segura todos los accesos al término de la relación contractual (incluyendo la desvinculación de suscripciones de aplicaciones en WhatsApp).'
                  ]).map((text, i) => (
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
                    {isEn ? "3. Client Responsibilities" : "3. Responsabilidades del Cliente"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-6">
                  <p className="text-brand/80">
                    {isEn ? "The client assumes the responsibility and commitment to:" : "El cliente asume la responsabilidad y compromiso de:"}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {(isEn ? [
                    'Provide true and accurate content that does not infringe on third-party intellectual property rights.',
                    'Guarantee ownership of their WhatsApp Business Account (WABA) and associated phone numbers.',
                    'Expressly authorize LunAvalos to access their WABA via Meta\'s Embedded Signup flow.',
                    'Independently complete the Business Verification processes required by Meta.',
                    'Strictly comply with WhatsApp Commercial and Business Policies set by Meta.',
                    'Timely notify LunAvalos of any changes to credentials or access rights.',
                    'Obtain the consent (opt-in) of their end-customers before starting WhatsApp conversations, and retain evidence of it.',
                    'Acknowledge that they are the controller of the personal data of their end-customers, and that LunAvalos acts as a processor on their behalf.',
                    'Guarantee that they are the owner or authorized administrator of the pages, accounts, and channels they link (Facebook, Instagram, LinkedIn, TikTok, and YouTube), and have the authority to grant access to LunAvalos.',
                    'Guarantee that they own the usage rights of the content they approve for publishing, including images, video, and music, and answer for any third-party claims arising from such content.',
                    'Comply with the terms of service and content policies of each platform where they request to publish.'
                  ] : [
                    'Proporcionar contenido e información veraz y que no infrinja derechos de propiedad intelectual de terceros.',
                    'Garantizar la propiedad de su cuenta de WhatsApp Business (WABA) y sus números telefónicos asociados.',
                    'Autorizar expresamente a LunAvalos para acceder a su WABA a través del flujo de Embedded Signup de Meta.',
                    'Completar de forma independiente los procesos de verificación de negocio (Business Verification) exigidos por Meta.',
                    'Cumplir cabalmente con los términos de uso, políticas de comercio y políticas de negocios de WhatsApp de Meta.',
                    'Notificar a LunAvalos cualquier cambio en sus credenciales o accesos de manera oportuna.',
                    'Obtener el consentimiento (opt-in) de sus clientes finales antes de iniciar conversaciones por WhatsApp, y conservar evidencia del mismo.',
                    'Reconocer que es el responsable del tratamiento de los datos personales de sus clientes finales, y que LunAvalos actúa como encargado por cuenta suya.',
                    'Garantizar que es titular o administrador autorizado de las páginas, cuentas y canales que vincula (Facebook, Instagram, LinkedIn, TikTok y YouTube), y contar con la facultad de otorgar acceso a LunAvalos.',
                    'Garantizar que posee los derechos de uso del contenido que aprueba para publicación, incluyendo imágenes, video y música, y responder por cualquier reclamación de terceros derivada de dicho contenido.',
                    'Cumplir con los términos de servicio y las políticas de contenido de cada plataforma en la que solicita publicar.'
                  ]).map((text, i) => (
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
                    {isEn ? "4. Intellectual Property" : "4. Propiedad Intelectual"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    {isEn 
                      ? "Content created by LunAvalos for the client (including text, graphics, and content strategies) is the exclusive property of the client once full payment for the corresponding service has been cleared."
                      : "El contenido creado por LunAvalos para el cliente (incluyendo textos, diseños gráficos y estrategias de contenido) es propiedad exclusiva del cliente una vez liquidado el pago total del servicio correspondiente."}
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
                    {isEn ? "5. Limitation of Liability" : "5. Limitación de Responsabilidad"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-6">
                  <p className="text-brand/80">
                    {isEn 
                      ? "LunAvalos makes its best professional efforts to guarantee service continuity and success, however, it shall not be liable for:"
                      : "LunAvalos realiza sus mejores esfuerzos profesionales para garantizar la continuidad y el éxito del servicio, sin embargo, no será responsable por:"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(isEn ? [
                    { title: 'Algorithm Changes', desc: 'Changes in policies, algorithms, or configurations of social media platforms and messaging APIs.' },
                    { title: 'Account Restrictions', desc: 'Suspension, blocking, or restriction of accounts and WABAs executed directly by Meta or other platforms.' },
                    { title: 'Specific Results', desc: 'Specific results and metrics of organic reach, interactions, message delivery, or conversion rates.' },
                    { title: 'Access Revocation', desc: 'Disconnection of tokens and API keys by the client from their Business Manager or silently by the platforms.' },
                    { title: 'Third-Party Failures', desc: 'Service interruptions caused by general infrastructure failures, downtime of Meta/WhatsApp servers, or hosting providers.' },
                    { title: 'Message Delivery', desc: 'WhatsApp message delivery depends on Meta\'s rules, including the 24-hour window and prior template approval. LunAvalos is not responsible for undelivered messages.' }
                  ] : [
                    { title: 'Cambios de Algoritmo', desc: 'Cambios en las políticas, algoritmos o configuraciones de las plataformas de redes sociales y APIs de mensajería.' },
                    { title: 'Restricciones de Cuenta', desc: 'Suspensión, bloqueo o restricción de cuentas y WABAs ejecutadas directamente por Meta u otras plataformas.' },
                    { title: 'Resultados Específicos', desc: 'Resultados y métricas específicas de alcance orgánico, interacciones, entrega de mensajes o tasa de conversiones.' },
                    { title: 'Revocación de Acceso', desc: 'Desconexión de tokens y API keys efectuada por el cliente desde su Business Manager o de forma silenciosa por las plataformas.' },
                    { title: 'Fallas de Terceros', desc: 'Interrupciones en el servicio causadas por fallas generales de infraestructura, caídas de servidores de Meta/WhatsApp o proveedores de hosting.' },
                    { title: 'Entrega de Mensajes', desc: 'La entrega de los mensajes de WhatsApp depende de las reglas de la plataforma de Meta, incluida la ventana de 24 horas para mensajes de texto libre y la aprobación previa de plantillas para mensajes fuera de dicha ventana. LunAvalos no será responsable por mensajes no entregados por causas atribuibles a estas reglas, a la calificación de calidad del número del cliente o a límites de mensajería impuestos por Meta.' }
                  ]).map((item, i) => (
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
                    {isEn ? "6. Termination" : "6. Terminación"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    {isEn 
                      ? <>Either party may terminate the contract at any time by giving a minimum of <span className="text-brand font-bold">15 days prior written notice</span>.</>
                      : <>Cualquiera de las partes puede dar por terminada la relación contractual en cualquier momento notificando con un periodo mínimo de <span className="text-brand font-bold">15 días de aviso previo</span> por escrito.</>}
                  </p>
                  <p className="mt-4 text-brand/80">
                    {isEn 
                      ? "Upon effective termination, LunAvalos commits to revoke all associated digital accesses and deliver confirmation of secure unbinding to the client."
                      : "Al momento de la terminación efectiva, LunAvalos se compromete a revocar todos los accesos digitales asociados y a entregar al cliente la confirmación de la entrega y desvinculación segura."}
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
                    {isEn ? "7. Jurisdiction" : "7. Jurisdicción"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    {isEn 
                      ? "These Terms and Conditions are governed by the laws applicable in Saltillo, Coahuila, Mexico. For any conflict, the parties submit to the jurisdiction of the competent courts of Saltillo, Coahuila, waiving any other jurisdiction."
                      : "Los presentes Términos y Condiciones se rigen por las leyes aplicables en Saltillo, Coahuila, México. Para cualquier conflicto, las partes se someten a la jurisdicción de los tribunales competentes de Saltillo, Coahuila, renunciando a cualquier otro fuero."}
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
                    {isEn ? "8. Contact Information" : "8. Información de Contacto"}
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    {isEn 
                      ? "For any clarification, questions, or issues related to these Terms and Conditions, you can communicate directly with us:"
                      : "Para cualquier aclaración, duda o asunto relacionado con los presentes Términos y Condiciones, puede comunicarse directamente con nosotros:"}
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-light/10 text-brand-light flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-sm space-y-3">
                        <div>
                          <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">{isEn ? "Registered Office (legal address)" : "Domicilio fiscal"}</div>
                          <div className="text-brand font-bold">LunAvalos Digital House, S.A.S.</div>
                          <div className="text-brand/70 text-xs mt-1">{isEn ? "Calle Gallo 118, Col. Las Maravillas, Saltillo, Coahuila, C.P. 25019, Mexico" : "Calle Gallo 118, Col. Las Maravillas, Saltillo, Coahuila, C.P. 25019, México"}</div>
                        </div>
                        <div className="pt-2 border-t border-brand/5">
                          <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">{isEn ? "Business Office" : "Oficinas comerciales"}</div>
                          <div className="text-brand/70 text-xs mt-1">{isEn ? "Av. La Salle #437, Col. La Salle, Saltillo, Coahuila, C.P. 25286, Mexico" : "Av. La Salle #437, Col. La Salle, Saltillo, Coahuila, C.P. 25286, México"}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 flex items-start gap-4 justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="text-sm">
                          <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">{isEn ? "Electronic Contact" : "Contacto Electrónico"}</div>
                          <div className="text-brand font-bold">{isEn ? "Advice and Support" : "Asesoría y Soporte"}</div>
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
