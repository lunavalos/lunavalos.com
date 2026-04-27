'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reduced duration to minimize LCP render delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1b4b] overflow-hidden"
        >
          {/* Lightweight CSS gradient background - no WebGL */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4b] via-[#1a2d6e] to-[#0d1b4b]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent" />

          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 relative"
            >
              <Image
                src="/images/header-logo.svg"
                alt="LunAvalos"
                width={220}
                height={60}
                className="brightness-0 invert h-12 w-auto relative z-10"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-white/20" />
              <p className="text-[10px] uppercase font-black tracking-[0.5em] text-white/40">
                Digital House
              </p>
              <span className="w-8 h-px bg-white/20" />
            </motion.div>

            {/* Progress bar */}
            <div className="w-56 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear', delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
