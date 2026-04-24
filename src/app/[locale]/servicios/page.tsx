'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import CtaCompact from '@/components/CtaCompact';
import ClientGrid from '@/components/ClientGrid';
import { Link } from '@/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  MonitorSmartphone,
  ShoppingBag,
  Bot,
  Mail,
  Cpu,
  ArrowUpRight,
  X
} from 'lucide-react';

const servicesList = [
  { id: 'webApps', icon: Code2 },
  { id: 'websites', icon: MonitorSmartphone },
  { id: 'ecommerce', icon: ShoppingBag },
  { id: 'ai', icon: Bot },
  { id: 'marketing', icon: Mail },
  { id: 'digitalization', icon: Cpu }
];

function SearchParamsHandler({ onOpen }: { onOpen: (id: string) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const s = searchParams.get('open');
    if (s && servicesList.some(x => x.id === s)) {
      onOpen(s);
    }
  }, [searchParams, onOpen]);
  return null;
}

export default function ServicesPage() {
  const t = useTranslations('Services');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const activeService = servicesList.find(s => s.id === selectedService);

  return (
    <main className="relative min-h-screen bg-white">
      <Suspense fallback={null}>
        <SearchParamsHandler onOpen={setSelectedService} />
      </Suspense>
      <Navbar />

      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        badge={t('badge')}
        dividerColor="bg-white"
      />

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-32">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col gap-8">
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center text-brand group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm">
                        <service.icon className="w-8 h-8 stroke-[1.5]" />
                      </div>
                      <div className="absolute -inset-2 bg-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-brand uppercase tracking-tight leading-none mb-2">
                        {t(`items.${service.id}.title`)}
                      </h3>
                      <div className="w-12 h-0.5 bg-secondary/30 group-hover:w-full transition-all duration-700 ease-out" />
                    </div>
                  </div>

                  {/* Extended Description */}
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-brand/5 rounded-full" />
                    <p className="pl-8 text-brand/70 text-lg leading-relaxed ">
                      {t(`items.${service.id}.description`)}
                    </p>
                  </div>

                  {/* Action Link -> Open Modal */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedService(service.id)}
                    className="flex items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-[0.2em] w-fit"
                  >
                    {t('learnMore')} <ArrowUpRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal Overlay */}
      <AnimatePresence>
        {selectedService && activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-[10px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[60vh] max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-brand/5 hover:bg-brand/10 text-brand rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Column - Brand Blue Background (Icon Only) */}
              <div className="w-full md:w-1/4 bg-brand p-12 flex flex-col items-center justify-center text-center relative overflow-hidden flex-shrink-0">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -ml-32 -mb-32" />

                <div className="relative z-10 w-full">
                  <motion.div
                    layoutId={`icon-${selectedService}`}
                    className="w-32 h-32 rounded-[20px] bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-secondary mb-0 mx-auto shadow-2xl"
                  >
                    <activeService.icon className="w-16 h-16 stroke-[1.2]" />
                  </motion.div>
                </div>
              </div>

              {/* Right Column - Content (Title + Details) */}
              <div className="w-full md:w-3/4 p-10 md:p-16 flex flex-col justify-center overflow-y-auto">
                <div className="h-full">
                  <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                    Detalles del Servicio
                  </span>

                  <h2 className="text-3xl md:text-5xl font-display font-bold text-brand uppercase tracking-tighter leading-tight mb-8">
                    {t(`items.${selectedService}.title`)}
                  </h2>

                  <div className="prose prose-lg">
                    <p className="text-brand/80 text-xl leading-relaxed  mb-8 italic border-l-4 border-secondary/20 pl-6">
                      {t(`items.${selectedService}.description`)}
                    </p>
                    <div className="h-px w-full bg-brand/5 mb-10" />
                    <p className="text-brand/60 text-lg leading-relaxed">
                      {t(`items.${selectedService}.details`)}
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-brand/5 flex flex-wrap gap-4">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-8 py-3 bg-brand/5 text-brand font-bold text-[10px] uppercase tracking-widest rounded-[10px] hover:bg-brand/10 transition-all"
                    >
                      {t('buttons.back')}
                    </button>
                    <Link
                      href={`/contacto?service=${selectedService}` as any}
                      className="px-8 py-3 bg-secondary text-black font-bold text-[10px] uppercase tracking-widest rounded-[10px] hover:scale-105 transition-all shadow-lg shadow-secondary/20 flex items-center justify-center"
                    >
                      {t('buttons.quote')}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ClientGrid />

      <CtaCompact />
    </main>
  );
}
