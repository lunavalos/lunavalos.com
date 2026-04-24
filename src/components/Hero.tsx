'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Beams from './Beams';

export default function Hero() {
  const t = useTranslations('Index.hero');

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-32 px-6 bg-[#12204c]">
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={5}
          beamHeight={59}
          beamNumber={20}
          lightColor="#6978a2"
          speed={12}
          noiseIntensity={0.8}
          scale={0.14}
          rotation={45}
          background="#1e3066"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#193074]" />
      </div>


      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-10"
        >
          <Sparkles className="w-3.5 h-3.5 text-secondary" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60">
            SmartShoring Evolution 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[8vw] md:text-[60px] font-display font-bold uppercase tracking-tight leading-[0.85] mb-10"
        >
          {t.rich('title', {
            span: (chunks) => <span className="text-[#f99f1f] block bg-clip-text text-[10vw] md:text-[80px]">{chunks}</span>
          })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/40 mb-14 leading-relaxed font-normal"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contacto" className="px-10 py-4 bg-secondary text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-brand-light hover:text-white transition-all hover:scale-105 active:scale-95 text-center">
            {t('ctaStart')}
          </Link>

          <Link href="/servicios" className="px-10 py-4 glass text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/5 transition-all text-center">
            {t('ctaServices')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
