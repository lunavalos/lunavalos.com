'use client';

import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import CtaCompact from '@/components/CtaCompact';
import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useScroll, useMotionTemplate } from 'framer-motion';
import { Users, Globe2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import DarkVeil from '@/components/DarkVeil';

function SlantedSection({
  children,
  className = "",
  index = 0
}: {
  children: React.ReactNode,
  className?: string,
  index?: number
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const topSlant = useTransform(scrollYProgress, [0, 0.5, 1], [4, 10, 4]);
  const bottomSlant = useTransform(scrollYProgress, [0, 0.5, 1], [96, 90, 96]);

  const clipPathStyle = useMotionTemplate`polygon(0% ${topSlant}%, 100% 0%, 100% ${bottomSlant}%, 0% 100%)`;

  const zIndexes = ["z-30", "z-20", "z-10"];

  return (
    <div className={`relative ${index > 0 ? "-mt-16 md:-mt-28" : ""} ${zIndexes[index]}`}>
      <motion.section
        ref={ref}
        style={{ clipPath: clipPathStyle }}
        className={`w-full py-40 md:py-56 px-6 relative ${className}`}
      >
        {children}
      </motion.section>
    </div>
  );
}

function ParallaxDarkVeil() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
      <motion.div style={{ y }} className="absolute top-[-50%] bottom-[-50%] left-0 right-0">
        <DarkVeil speed={1.5} warpAmount={1} hueShift={0} noiseIntensity={0.04} />
      </motion.div>
    </div>
  );
}



function AnimatedCounter({ from = 0, to = 70 }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, inView, to]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        badge={t('badge')}
        dividerColor="bg-white"
      />

      {/* Intro Section - Párrafo principal */}
      <section className="py-24 px-6 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-xl md:prose-2xl max-w-none"
          >
            <h2 className="font-bold text-brand block mb-8 uppercase tracking-tighter text-2xl md:text-4xl font-display">
              {t('intro.titlePart1')} <span className="text-secondary">{t('intro.titlePart2')}</span>
            </h2>
            <p className="text-brand/80 text-lg leading-relaxed mb-8">
              {t('intro.p1')}
            </p>
            <p className="text-brand/80 text-lg leading-relaxed">
              {t('intro.p2')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bloque 1: Nuestro equipo */}
      <SlantedSection index={0} className="bg-[#f8f9fc] border-t border-brand/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-start pb-8 text-left px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand/5 text-brand flex items-center justify-center mb-6 border border-brand/10">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-brand uppercase tracking-tighter mb-6">
              {t('team.title')}
            </h3>
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-brand/70 text-lg leading-relaxed mb-6">
                {t('team.p1')}
              </p>
              <p className="text-brand/70 text-lg leading-relaxed">
                {t('team.p2')}
              </p>
            </div>
          </motion.div>
        </div>
      </SlantedSection>

      {/* Bloque 2: Números que nos respaldan */}
      <SlantedSection index={1} className="bg-brand overflow-hidden text-white">
        <ParallaxDarkVeil />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-12 relative z-10 items-center">
          <div className="w-full md:w-5/12 lg:w-4/12 flex justify-center md:justify-start order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="flex flex-col items-center md:items-start text-secondary">
                <div className="text-[120px] md:text-[180px] font-display font-bold leading-none flex items-center">
                  <AnimatedCounter to={70} /><span className="text-[60px] md:text-[100px] ml-1 md:ml-4 text-white opacity-80">+</span>
                </div>
                <span className="text-white/60 text-lg md:text-xl font-bold uppercase tracking-[0.4em] mt-4 ml-2">{t('stats.projects')}</span>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 text-secondary flex items-center justify-center mb-6 border border-white/10 hidden md:flex">
                <Globe2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter mb-6">
                {t('stats.titlePart1')} <br /><span className="text-secondary">{t('stats.titlePart2')}</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                {t('stats.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </SlantedSection>

      {/* Bloque 3: Nuestra forma de trabajar */}
      <SlantedSection index={2} className="bg-[#f8f9fc] border-b border-brand/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand/5 text-brand flex items-center justify-center mb-6 border border-brand/10">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-brand uppercase tracking-tighter mb-8">
              {t('methodology.title')}
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-brand/70 text-lg leading-relaxed">
              {t('methodology.description')}
            </p>
          </motion.div>
        </div>
      </SlantedSection>

      <CtaCompact />
    </main>
  );
}
