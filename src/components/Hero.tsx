'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';
import Beams from './Beams';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.4, // Increased to wait for Preloader (800ms + 500ms exit)
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const TypingText = ({ text }: { text: string }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.span 
      variants={container}
      className="inline-block"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  const t = useTranslations('Index.hero');
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Staggered scroll transforms
  const opacityBadge = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const yBadge = useTransform(scrollYProgress, [0, 0.15], [0, -20]);

  const opacityL1 = useTransform(scrollYProgress, [0.05, 0.25], [1, 0]);
  const yL1 = useTransform(scrollYProgress, [0.05, 0.25], [0, -40]);

  const opacityL2 = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const yL2 = useTransform(scrollYProgress, [0.1, 0.3], [0, -60]);

  const opacityL3 = useTransform(scrollYProgress, [0.15, 0.35], [1, 0]);
  const yL3 = useTransform(scrollYProgress, [0.15, 0.35], [0, -80]);

  const opacitySub = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const ySub = useTransform(scrollYProgress, [0.2, 0.4], [0, -100]);

  const opacityCta = useTransform(scrollYProgress, [0.25, 0.45], [1, 0]);
  const yCta = useTransform(scrollYProgress, [0.25, 0.45], [0, -120]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-32 px-6 bg-[#12204c]">
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            style={{ opacity: opacityBadge, y: yBadge }}
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/80">
              SmartShoring Evolution 2026
            </span>
          </motion.div>

          <motion.h1
            className="text-[8vw] md:text-[60px] font-display font-bold uppercase tracking-tight leading-[0.85] mb-10 flex flex-col items-center"
          >
            {t.rich('title', {
              l1: (chunks) => <motion.span style={{ opacity: opacityL1, y: yL1 }} variants={itemVariants} className="block">{chunks}</motion.span>,
              l2: (chunks) => (
                <motion.span 
                  style={{ opacity: opacityL2, y: yL2 }}
                  variants={itemVariants} 
                  className="text-[#f99f1f] block bg-clip-text text-[10vw] md:text-[80px] my-2"
                >
                  <TypingText text={String(chunks)} />
                </motion.span>
              ),
              l3: (chunks) => <motion.span style={{ opacity: opacityL3, y: yL3 }} variants={itemVariants} className="block">{chunks}</motion.span>,
            })}
          </motion.h1>

          <motion.p
            style={{ opacity: opacitySub, y: ySub }}
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-14 leading-relaxed font-normal"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            style={{ opacity: opacityCta, y: yCta }}
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contacto" className="px-10 py-4 bg-secondary text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-brand-light hover:text-white transition-all hover:scale-105 active:scale-95 text-center">
              {t('ctaStart')}
            </Link>

            <Link href="/servicios" className="px-10 py-4 glass text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/5 transition-all text-center">
              {t('ctaServices')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
