'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DarkVeil = dynamic(() => import('./DarkVeil'), { ssr: false });

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
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Animated background using existing DarkVeil */}
          <div className="absolute inset-0 opacity-40">
            <DarkVeil
              speed={2.5}
              hueShift={13}
              noiseIntensity={0.04}
              warpAmount={0.15}
            />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Logo Animation with Glow */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="mb-6 relative"
            >
              <div className="absolute inset-0 blur-3xl bg-accent/20 scale-150 rounded-full" />
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
              transition={{ delay: 0.2 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-white/20" />
              <p className="text-[10px] uppercase font-black tracking-[0.5em] text-white/40">
                Digital House
              </p>
              <span className="w-8 h-px bg-white/20" />
            </motion.div>

            {/* Progress indicator */}
            <div className="w-56 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                  delay: 0.4,
                }}
                className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
