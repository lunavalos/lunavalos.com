'use client';

import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Lock, EyeOff, Scale, Info } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <PageHero
        title="Aviso de Privacidad"
        subtitle="Cumplimiento legal y transparencia en el manejo de tu información."
        badge="Legal & Transparencia"
        dividerColor="bg-white"
      />

      <section className="py-24 px-6 ">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col gap-16">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-brand/70 leading-relaxed"
            >
              <div className="bg-brand/5 p-8 rounded-2xl border border-brand/5 mb-16">
                <p className="m-0 text-brand font-bold text-center uppercase tracking-widest text-sm">
                  AVISO DE PRIVACIDAD
                </p>
                <p className="mt-6 mb-0 text-center">
                  <strong>LunAvalos Digital House</strong>, con domicilio en Av. La salle #437 Col. La Salle, cp. 25240 Saltillo, Coahuila, utilizará los datos personales aquí recabados, a fin de dar tramite a los asuntos de su competencia.
                </p>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">Datos Personales</h2>
              </div>
              <p>Los datos personales de los clientes que serán sometidos a tratamiento serán los siguientes:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                <li className="bg-white border border-brand/5 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" /> 1. Nombre Completo.
                </li>
                <li className="bg-white border border-brand/5 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" /> 2. Dirección.
                </li>
                <li className="bg-white border border-brand/5 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" /> 3. Teléfonos (Hogar, Oficinas y móviles).
                </li>
                <li className="bg-white border border-brand/5 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" /> 4. Correo Electrónico.
                </li>
              </ul>

              <p className="mt-8">Estos serán utilizados única y exclusivamente para los siguientes fines:</p>
              <ol className="space-y-2">
                <li>1. Información y Prestación de Servicios.</li>
                <li>2. Actualización de la Base de Datos.</li>
                <li>3. Cualquier finalidad análoga o compatible con las anteriores.</li>
              </ol>

              <div className="flex items-center gap-4 mt-16 mb-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">Datos Sensibles</h2>
              </div>
              <ul className="space-y-4 list-none p-0">
                <li className="p-4 border-l-4 border-secondary/20 bg-brand/5"><strong>1. Datos Financieros:</strong> Ingresos, Estados de Cuenta, y demás relacionados.</li>
                <li className="p-4 border-l-4 border-secondary/20 bg-brand/5"><strong>2. Datos Patrimoniales:</strong> Bienes Materiales, Inmuebles, y demás relacionados.</li>
                <li className="p-4 border-l-4 border-secondary/20 bg-brand/5"><strong>3. Datos Personales:</strong> Cónyuge, Estado Civil, Nacionalidad, Educación, Hijos, y demás relacionados.</li>
                <li className="p-4 border-l-4 border-secondary/20 bg-brand/5"><strong>4. Referencias:</strong> Familiares y no familiares (Nombre, Dirección, Teléfono, relación, etc.).</li>
              </ul>

              <p className="mt-8">Estos serán utilizados única y exclusivamente para los siguientes fines:</p>
              <ol className="space-y-2">
                <li>1. Información y Prestación de Servicios.</li>
                <li>2. Cualquier finalidad análoga o compatible con la anterior.</li>
              </ol>

              <div className="flex items-center gap-4 mt-16 mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand">
                  <Scale className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">Fundamento Legal</h2>
              </div>
              <p className="text-sm">
                Lo anterior con fundamento en lo dispuesto por los artículos 64 de la Ley General de Transparencia y Acceso a la Información Pública; 19, 20, 21, 37 y 51 de la Ley General de Protección de Datos Personales en posesión de Sujetos Obligados; 81 y 86 de la Ley de Transparencia y Acceso a la Información para el Estado de Coahuila de Zaragoza 18, 20, 21, 43 y 71 de la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de Coahuila de Zaragoza.
              </p>

              <div className="flex items-center gap-4 mt-16 mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-brand">
                  <EyeOff className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold text-brand uppercase tracking-tight m-0">Uso Exclusivo y Derechos ARCO</h2>
              </div>
              <p>
                La información será de uso exclusivo de <strong>LunAvalos Digital House</strong>, así mismo, les informamos que todos sus datos personales y sensibles son tratados de acuerdo a la legislación aplicable y vigente en el país, por ello le informamos que ustedes cuentan con la posibilidad de ejercer los derechos de Acceso, Ratificación, Cancelación y Oposición, así como el de portabilidad de los datos personales, directamente en las oficinas de esta empresa ubicadas en <strong>Av. La salle #437 Col. La Salle, cp. 25240 Saltillo, Coahuila.</strong>
              </p>

              <div className="mt-24 p-8 border border-brand/5 rounded-2xl bg-brand/5 flex items-start gap-4">
                <Info className="w-6 h-6 text-brand shrink-0 mt-1" />
                <p className="text-sm m-0">
                  El aviso de privacidad, así como las modificaciones, cambios o actualizaciones, podrán ser consultadas en la página oficial de LunAvalos Digital House: <a href="https://lunavalos.com/" className="text-brand font-bold underline">https://lunavalos.com/</a>
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      <footer className="py-20 px-6 border-t border-brand/10 text-center bg-white">
        <p className="text-brand/20 text-[10px] uppercase font-bold tracking-widest">
          © 2026 LunAvalos Digital House. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
