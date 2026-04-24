'use client';

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      <section id="services" className="py-24 md:py-32 bg-brand w-full relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
            >
              {t('services.badge')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight leading-none"
            >
              {t('services.titlePart1')} <br />
              <span className="text-secondary">{t('services.titlePart2')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/50 mt-5 text-lg font-normal leading-relaxed"
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
