'use client';

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

function ProcessStep({ step, idx, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.1 + idx * 0.05, 0.2 + idx * 0.05, 0.8 + idx * 0.02, 0.9 + idx * 0.02], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1 + idx * 0.05, 0.2 + idx * 0.05, 0.8 + idx * 0.02, 0.9 + idx * 0.02], [40, 0, 0, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
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
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('Index.process');
  const processStepsRaw = t.raw('steps') as Array<{ title: string, desc: string }>;

  // Rastrear el progreso de scroll visual sobre esta sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Al hacer scroll, la inclinación subirá a un pico de 8% y bajará a 2%
  const topSlant = useTransform(scrollYProgress, [0, 0.5, 1], [2, 8, 2]);
  const bottomSlant = useTransform(scrollYProgress, [0, 0.5, 1], [98, 92, 98]);

  const clipPathStyle = useMotionTemplate`polygon(0% ${topSlant}%, 100% 0%, 100% ${bottomSlant}%, 0% 100%)`;

  const processSteps = [
    { num: "01", title: processStepsRaw[0].title, desc: processStepsRaw[0].desc },
    { num: "02", title: processStepsRaw[1].title, desc: processStepsRaw[1].desc },
    { num: "03", title: processStepsRaw[2].title, desc: processStepsRaw[2].desc },
    { num: "04", title: processStepsRaw[3].title, desc: processStepsRaw[3].desc }
  ];

  const opacityBadge = useTransform(scrollYProgress, [0.05, 0.15, 0.85, 0.95], [0, 1, 1, 0]);
  const yBadge = useTransform(scrollYProgress, [0.05, 0.15, 0.85, 0.95], [40, 0, 0, -40]);

  const opacityT1 = useTransform(scrollYProgress, [0.08, 0.18, 0.88, 0.98], [0, 1, 1, 0]);
  const yT1 = useTransform(scrollYProgress, [0.08, 0.18, 0.88, 0.98], [40, 0, 0, -40]);

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
            style={{ opacity: opacityBadge, y: yBadge }}
            className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            {t('badge')}
          </motion.span>
          <motion.h3
            style={{ opacity: opacityT1, y: yT1 }}
            className="text-4xl md:text-6xl font-display font-bold uppercase text-brand tracking-tight leading-none mb-16 max-w-4xl"
          >
            {t('titlePart1')} <span className="text-brand-light/80 block mt-2">{t('titlePart2')}</span>
          </motion.h3>

          <div className="border border-brand/10 rounded-xl overflow-hidden bg-brand/5 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {processSteps.map((step, idx) => (
                <ProcessStep key={idx} step={step} idx={idx} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
