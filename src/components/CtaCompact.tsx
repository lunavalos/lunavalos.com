'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";
import { Link } from "@/navigation";

export default function CtaCompact() {
  const t = useTranslations('CTA');

  return (
    <section className="relative w-full py-20 flex justify-center bg-transparent">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <BorderGlow
            className="w-full bg-brand p-10 md:p-16 flex flex-col items-center justify-center text-center overflow-hidden"
            borderRadius={24}
            backgroundColor="#1e3066"
            glowColor="rgba(249, 159, 31, 0.15)"
          >

            {/* Badge - Focused Centering */}
            <div className="w-full flex justify-center mb-6">
              <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] leading-none">
                {t('badge')}
              </span>
            </div>

            {/* Heading - Back to two lines and centered */}
            <h2
              className="text-2xl md:text-4xl font-display font-bold uppercase text-white mb-8 leading-[1.1] tracking-tight w-full max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />

            {/* Paragraph - Centered */}
            <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg mb-10 leading-relaxed  text-center">
              {t('description')}
            </p>

            {/* Buttons - Centered and simplified with Glass effect on WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link href="/contacto" className="px-10 py-4 bg-secondary text-black font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-brand-light hover:text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/20 text-center">
                {t('ctaQuote')}
              </Link>
              <a href="https://wa.me/5218442751165" target="_blank" rel="noopener noreferrer" className="px-10 py-4 glass text-white font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-white/5 transition-all text-center">
                {t('ctaWhatsapp')}
              </a>
            </div>

          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
