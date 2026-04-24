'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
  'absolutegroup.webp',
  'afcargasydescargas.webp',
  'ammd.webp',
  'avintech.webp',
  'bonelessyasi.webp',
  'dolcebisquet.webp',
  'elccogroup.webp',
  'exlgp.webp',
  'garciadelcastillo.webp',
  'greenvci.webp',
  'grupoloscompadres.webp',
  'hisacv.webp',
  'kespacio.webp',
  'kronoslogistics.webp',
  'lage.webp',
  'lavandapasteleria.webp',
  'lpap.webp',
  'macadam.webp',
  'natanaelespinoza.webp',
  'panelessolaressaltillo.webp',
  'rdnseguros.webp',
  'sportecs.webp',
  'syacsa.webp',
  'tierramar.webp'
];

export default function ClientGrid() {
  return (
    <section className="w-full bg-white py-24 px-6 border-t border-brand/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Nuestros Clientes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand uppercase tracking-tighter"
          >
            Empresas que <br /><span className="text-secondary">confían</span> en nosotros
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white overflow-hidden">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: (index % 5) * 0.05 }}
              viewport={{ once: true }}
              className="bg-white flex items-center justify-center p-12 md:p-10 transition-all duration-500 group border border-brand/5 aspect-[3/2]"
            >
              <Image
                src={`/images/clients/${logo}`}
                alt="Client Logo"
                width={320}
                height={200}
                className="w-full h-full object-contain filter transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
