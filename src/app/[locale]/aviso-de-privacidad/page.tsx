'use client';

import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Mail, 
  User, 
  Share2, 
  ShieldAlert, 
  CheckCircle2, 
  Info, 
  Calendar, 
  Key, 
  ExternalLink,
  ChevronRight,
  RefreshCw,
  FileText
} from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    { id: 'responsable', title: '1. Responsable del Tratamiento' },
    { id: 'datos', title: '2. Datos Personales Recopilados' },
    { id: 'finalidades', title: '3. Finalidad del Tratamiento' },
    { id: 'transferencia', title: '4. Transferencia de Datos y APIs' },
    { id: 'retencion', title: '5. Retención y Conservación' },
    { id: 'arco', title: '6. Derechos ARCO y Revocación' },
    { id: 'cambios', title: '7. Cambios al Aviso' },
  ];

  return (
    <main className="relative min-h-screen bg-[#f8f9fc]">
      <Navbar />

      <PageHero
        title="Aviso de Privacidad"
        subtitle="Cumplimiento legal y transparencia en el manejo de tu información."
        badge="Legal & Transparencia"
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
                  Aviso de Privacidad Integral
                </p>
                <h2 className="text-xl md:text-2xl font-display font-extrabold text-brand uppercase tracking-tight mt-2 mb-4">
                  LunAvalos Digital House, S.A.S.
                </h2>
                <div className="inline-block px-3 py-1 bg-white border border-brand/10 rounded-full text-xs text-brand/70 font-semibold shadow-sm">
                  Última actualización: Junio 2026
                </div>
              </motion.div>

              {/* 1. Responsable */}
              <motion.div
                id="responsable"
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
                    1. Responsable del Tratamiento de Datos
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    <strong>LunAvalos Digital House, S.A.S.</strong>, con domicilio en{' '}
                    <span className="text-brand font-medium">
                      Calle Gallo 118, Col. Las Maravillas, Saltillo, Coahuila, C.P. 25019, México
                    </span>
                    , es el responsable del uso y protección de sus datos personales.
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    <div className="flex-1 bg-brand/5 border border-brand/5 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-light/10 text-brand-light flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Domicilio Oficial</div>
                        <div className="text-brand font-bold">Saltillo, Coahuila, México</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-brand/5 border border-brand/5 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="text-sm">
                        <div className="text-brand/40 uppercase font-bold tracking-wider text-[10px]">Contacto Electrónico</div>
                        <a href="mailto:contacto@lunavalos.com" className="text-brand font-bold hover:text-secondary transition-colors underline">
                          contacto@lunavalos.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. Datos recopilados */}
              <motion.div
                id="datos"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    2. Datos Personales que Recopilamos
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-8">
                  <p className="text-brand/80">
                    Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, clasificamos los datos que recabamos en:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Category A */}
                  <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 relative overflow-hidden group hover:border-brand/10 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h3 className="text-md font-bold text-brand m-0">A. Datos de Identificación y Contacto</h3>
                    </div>
                    <p className="text-brand/70 text-sm leading-relaxed m-0 pl-11">
                      Nombre completo, dirección, teléfonos (hogar, oficina y móviles) y correo electrónico.
                    </p>
                  </div>

                  {/* Category B */}
                  <div className="bg-[#f8f9fc] border border-brand/5 rounded-2xl p-6 relative overflow-hidden group hover:border-brand/10 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-md font-bold text-brand m-0">B. Datos de Integración Digital y Redes Sociales</h3>
                    </div>
                    <ul className="space-y-2 text-brand/70 text-sm leading-relaxed m-0 pl-11 list-disc list-outside">
                      <li>Información de acceso y credenciales de plataformas (tokens de autorización de Facebook, Instagram, LinkedIn, TikTok y YouTube).</li>
                      <li>Información de perfiles, páginas, canales y cuentas administradas.</li>
                      <li>Historial de contenido publicado en nombre de nuestros clientes.</li>
                    </ul>
                  </div>

                  {/* Category C */}
                  <div className="bg-orange-50/20 border border-secondary/10 rounded-2xl p-6 relative overflow-hidden group hover:border-secondary/20 transition-colors">
                    <div className="absolute top-4 right-4 px-2 py-0.5 bg-secondary/10 border border-secondary/20 rounded text-[9px] text-secondary font-bold uppercase tracking-wider">
                      Tratamiento Estricto
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <h3 className="text-md font-bold text-brand m-0">C. Datos Financieros y Patrimoniales</h3>
                    </div>
                    <ul className="space-y-2 text-brand/70 text-sm leading-relaxed m-0 pl-11 list-disc list-outside">
                      <li>Ingresos, estados de cuenta, bienes materiales, inmuebles y datos relacionados.</li>
                      <li>Información de cónyuge, estado civil, nacionalidad, educación, hijos y referencias familiares/no familiares (nombre, dirección, teléfono y relación).</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 3. Finalidades */}
              <motion.div
                id="finalidades"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    3. Finalidad del Tratamiento de los Datos
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-8">
                  <p className="text-brand/80">
                    Los datos personales recabados serán utilizados única y exclusivamente para los siguientes fines necesarios para la relación jurídica:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'Información, cotización y prestación de los servicios contratados (desarrollo web, e-commerce, automatización y consultoría).',
                    'Gestión, programación y publicación automatizada de contenido en redes sociales en nombre de nuestros clientes.',
                    'Generar reportes de métricas y actividad para el análisis de rendimiento.',
                    'Actualización de nuestras bases de datos internas y cumplimiento de obligaciones contractuales.',
                    'Cualquier finalidad análoga o compatible con las anteriores.',
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-[#f8f9fc] transition-colors border border-transparent hover:border-brand/5">
                      <div className="w-6 h-6 rounded-full bg-brand-soft text-brand-light flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-brand/70 text-sm leading-relaxed m-0">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 4. Transferencia de datos y APIs */}
              <motion.div
                id="transferencia"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    4. Transferencia de Datos y Uso de APIs
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg mb-8">
                  <p className="text-brand/80">
                    Le informamos que para la correcta prestación de nuestros servicios de gestión digital, compartimos e interactuamos con datos mediante las APIs oficiales de las siguientes plataformas tecnológicas:
                  </p>
                </div>

                {/* Platforms Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { name: 'Meta Platforms, Inc.', detail: 'Facebook & Instagram' },
                    { name: 'LinkedIn Corporation', detail: 'Professional Network' },
                    { name: 'TikTok Inc.', detail: 'Short Video Platform' },
                    { name: 'Google LLC', detail: 'YouTube Integration' }
                  ].map((platform, i) => (
                    <div key={i} className="bg-[#f8f9fc] border border-brand/5 p-4 rounded-xl text-center flex flex-col justify-center min-h-[100px] hover:border-brand/10 transition-colors">
                      <div className="text-brand font-bold text-xs mb-1">{platform.name}</div>
                      <div className="text-brand/40 text-[10px] uppercase font-bold tracking-wider">{platform.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-brand/5 border border-brand/5 rounded-2xl flex items-start gap-4">
                  <Info className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <p className="text-brand/70 text-sm leading-relaxed m-0">
                    Estas transferencias se realizan única y exclusivamente bajo su consentimiento expreso al vincular sus cuentas en nuestras plataformas y son indispensables para la ejecución del servicio contratado. <strong>No vendemos ni transferimos sus datos a terceros ajenos a estas operaciones indispensables.</strong>
                  </p>
                </div>
              </motion.div>

              {/* 5. Retención */}
              <motion.div
                id="retencion"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    5. Retención y Conservación de Datos
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Los datos relacionados con las integraciones digitales y tokens se conservarán durante la vigencia de la relación contractual y hasta un periodo máximo de <span className="text-brand font-bold">90 días</span> posteriores a su terminación (procediendo a su desvinculación o borrado seguro), salvo obligación legal o fiscal que exija una conservación más prolongada de la información financiera/patrimonial.
                  </p>
                </div>
              </motion.div>

              {/* 6. Derechos ARCO */}
              <motion.div
                id="arco"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <Key className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    6. Derechos ARCO y Revocación del Consentimiento
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (<span className="text-brand font-bold">Derechos ARCO</span>) al tratamiento de sus datos personales, así como a revocar el consentimiento otorgado.
                  </p>
                  <p className="mt-4 text-brand/80">
                    Para ejercer cualquiera de estos derechos, puede enviar una solicitud por escrito al correo electrónico:{' '}
                    <a href="mailto:contacto@lunavalos.com" className="text-brand font-bold hover:text-secondary transition-colors underline">
                      contacto@lunavalos.com
                    </a>
                    , detallando su nombre y el motivo de su solicitud.
                  </p>

                  {/* Immediate data removal CTA */}
                  <div className="mt-8 p-6 md:p-8 bg-gradient-to-r from-orange-500/5 to-secondary/10 border border-secondary/15 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="text-brand font-bold text-md m-0 mb-1">
                        ¿Deseas revocar accesos de inmediato?
                      </h4>
                      <p className="text-brand/60 text-xs md:text-sm m-0 leading-relaxed">
                        Puedes gestionar la supresión automatizada de los datos de redes sociales y desvincular tus cuentas en nuestro portal especializado.
                      </p>
                    </div>
                    <a
                      href="https://lunavalos.com/eliminar-datos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-secondary hover:opacity-90 text-white rounded-xl text-sm font-bold shadow-sm transition-all whitespace-nowrap shrink-0 group"
                    >
                      <span>Eliminar Datos Digitales</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* 7. Cambios al aviso */}
              <motion.div
                id="cambios"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 bg-white border border-brand/5 p-8 md:p-10 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand shrink-0">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">
                    7. Cambios al Aviso de Privacidad
                  </h2>
                </div>
                <div className="prose prose-brand text-brand/70 leading-relaxed max-w-none text-base md:text-lg">
                  <p className="text-brand/80">
                    Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad para la atención de novedades legislativas o políticas internas.
                  </p>
                  <p className="mt-4 text-brand/80">
                    Estas modificaciones estarán disponibles al público a través de nuestra página web oficial:{' '}
                    <a href="https://lunavalos.com/aviso-de-privacidad/" className="text-brand font-bold hover:text-secondary transition-colors underline">
                      https://lunavalos.com/aviso-de-privacidad/
                    </a>
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

