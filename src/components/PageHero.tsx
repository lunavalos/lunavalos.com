'use client';

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import Beams from './Beams';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  dividerColor?: string;
}

export default function PageHero({ title, subtitle, badge, dividerColor = 'bg-brand-soft' }: PageHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Efecto de inclinación más pronunciado (de 0% a 15% de la altura del bloque divider)
  const slantY = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const clipPath = useMotionTemplate`polygon(0% 100%, 100% 100%, 100% ${slantY}%)`;

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-brand"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 bottom-[-30%] z-0">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left pt-20">
        {badge && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tight leading-[0.85] text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-white/60 mt-8 leading-relaxed font-normal"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Diagonal Divider at the bottom */}
      <motion.div 
        className={`absolute -bottom-px left-0 w-full h-32 ${dividerColor} z-20 pointer-events-none`} 
        style={{ 
          clipPath: clipPath,
        }}
      />
    </section>
  );
}
