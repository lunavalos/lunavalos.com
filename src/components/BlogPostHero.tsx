'use client';

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import Beams from './Beams';
import { Link } from '@/navigation';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface BlogPostHeroProps {
  title: string;
  categories?: any[];
  publishedDate?: string;
  createdAt: string;
  authorName?: string;
  backToListLabel: string;
  locale: string;
}

export default function BlogPostHero({
  title,
  categories,
  publishedDate,
  createdAt,
  authorName,
  backToListLabel,
  locale
}: BlogPostHeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateString));
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[400px] flex flex-col overflow-hidden bg-brand"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-40 pb-44 md:pt-48 md:pb-52 text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-3 h-3" /> {backToListLabel}
          </Link>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {categories?.map((cat: any, index: number) => (
            <motion.span
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest"
            >
              {cat.title}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight leading-tight text-white mb-8 max-w-4xl"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center gap-8 text-white/50 text-[10px] font-bold uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-secondary" />
            {publishedDate ? formatDate(publishedDate) : formatDate(createdAt)}
          </div>
          {authorName && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-secondary" />
              {authorName}
            </div>
          )}
        </motion.div>
      </div>

      {/* Diagonal Divider at the bottom - Matching PageHero */}
      <div
        className="absolute -bottom-px left-0 w-full h-32 bg-white z-20 pointer-events-none"
        style={{
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%)',
        }}
      />
    </section>
  );
}
