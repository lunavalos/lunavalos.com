'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import { useTranslations } from 'next-intl';
import { useRef } from "react";

export default function Home() {
  const t = useTranslations('Index');
  const servicesRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  // Entrance and Exit transforms
  // We want them to fade in as they enter and fade out as they leave the top
  const opacityBadge = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [0, 1, 1, 0]);
  const yBadge = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [40, 0, 0, -40]);

  const opacityT1 = useTransform(scrollYProgress, [0.05, 0.15, 0.82, 0.92], [0, 1, 1, 0]);
  const yT1 = useTransform(scrollYProgress, [0.05, 0.15, 0.82, 0.92], [40, 0, 0, -40]);

  const opacityT2 = useTransform(scrollYProgress, [0.1, 0.2, 0.84, 0.94], [0, 1, 1, 0]);
  const yT2 = useTransform(scrollYProgress, [0.1, 0.2, 0.84, 0.94], [40, 0, 0, -40]);

  const opacityP = useTransform(scrollYProgress, [0.15, 0.25, 0.86, 0.96], [0, 1, 1, 0]);
  const yP = useTransform(scrollYProgress, [0.15, 0.25, 0.86, 0.96], [40, 0, 0, -40]);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      <section id="services" ref={servicesRef} className="py-24 md:py-32 bg-brand w-full relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <motion.span
              style={{ opacity: opacityBadge, y: yBadge }}
              className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
            >
              {t('services.badge')}
            </motion.span>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight leading-none overflow-hidden">
              <motion.span 
                style={{ opacity: opacityT1, y: yT1 }}
                className="block"
              >
                {t('services.titlePart1')}
              </motion.span>
              <motion.span 
                style={{ opacity: opacityT2, y: yT2 }}
                className="text-secondary block mt-2"
              >
                {t('services.titlePart2')}
              </motion.span>
            </h2>

            <motion.p
              style={{ opacity: opacityP, y: yP }}
              className="text-white/50 mt-8 text-lg font-normal leading-relaxed max-w-3xl"
            >
              {t('services.description')}
            </motion.p>
          </div>

          <ServiceGrid />

        </div>
      </section>

      <StatsSection />

      <CtaSection />
    </main>
  );
}
