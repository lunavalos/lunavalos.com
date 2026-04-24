'use client';

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Rastrear el progreso de scroll visual sobre esta sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Al hacer scroll, la inclinación subirá a un pico de 8% y bajará a 2%
  const topSlant = useTransform(scrollYProgress, [0, 0.5, 1], [2, 8, 2]);
  const bottomSlant = useTransform(scrollYProgress, [0, 0.5, 1], [98, 92, 98]);

  const t = useTranslations('Index.process');
  const processStepsRaw = t.raw('steps') as Array<{title: string, desc: string}>;

  const clipPathStyle = useMotionTemplate`polygon(0% ${topSlant}%, 100% 0%, 100% ${bottomSlant}%, 0% 100%)`;
  
  const stats = [
    { value: "100+", label: "proyectos entregados" },
    { value: "4", label: "líneas de servicio" },
    { value: "100%", label: "proyectos a medida" },
  ];

  const processSteps = [
    { num: "01", title: processStepsRaw[0].title, desc: processStepsRaw[0].desc },
    { num: "02", title: processStepsRaw[1].title, desc: processStepsRaw[1].desc },
    { num: "03", title: processStepsRaw[2].title, desc: processStepsRaw[2].desc },
    { num: "04", title: processStepsRaw[3].title, desc: processStepsRaw[3].desc }
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full min-h-[80vh] flex flex-col justify-center py-40 bg-brand-soft"
      style={{ clipPath: clipPathStyle }}
    >
      <div className="max-w-7xl mx-auto px-12 py-24 relative z-10 w-full">


        {/* --- NUESTRO PROCESO --- */}
        <div className="w-full">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            {t('badge')}
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-bold uppercase text-brand tracking-tight leading-none mb-16 max-w-4xl"
          >
            {t('titlePart1')} <span className="text-brand-light/80 block mt-2">{t('titlePart2')}</span>
          </motion.h3>

          <div className="border border-brand/10 rounded-xl overflow-hidden bg-brand/5 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-10 md:p-14 relative flex flex-col justify-start transition-colors duration-300 hover:bg-white/30 ${idx === 0 ? 'border-b border-brand/10 md:border-r' : ''
                    } ${idx === 1 ? 'border-b border-brand/10' : ''
                    } ${idx === 2 ? 'border-b border-brand/10 md:border-b-0 md:border-r' : ''
                    }`}
                >
                  <span className="text-3xl md:text-6xl font-bold text-brand-light/70 mb-3 block leading-none select-none">
                    {step.num}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold uppercase text-brand mb-3">
                    {step.title}
                  </h4>
                  <p className="text-brand/70 text-base md:text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
