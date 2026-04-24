'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Mail, Globe } from "lucide-react";
import BorderGlow from "./BorderGlow";
import { Link } from "@/navigation";

export default function CtaSection() {
  const t = useTranslations('CTA');

  return (
    <section className="relative w-full py-24 md:py-32 flex justify-center bg-transparent">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <BorderGlow
            className="glass p-10 md:p-16 flex flex-col items-center text-center"
            borderRadius={12}
            backgroundColor="rgba(25,48,116,0.6)"
            glowColor="rgba(255,255,255,0.1)"
          >

            {/* Badge */}
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] leading-[0.85]">
              {t('badge')}
            </span>

            {/* Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase text-white mt-6 mb-6 leading-tight tracking-tight"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />

            {/* Paragraph */}
            <p className="text-center items-center text-white/60 max-w-3xl m-auto text-lg md:text-xl mb-12 leading-relaxed">
              {t('description')}
            </p>

            {/* Buttons */}
            <div className="flex align-center justify-center flex-col sm:flex-row gap-5 mb-16 w-full sm:w-auto">
              <Link href="/contacto" className="px-10 py-4 bg-secondary text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-brand-light hover:text-white transition-all hover:scale-105 active:scale-95 hover:-translate-y-1">
                {t('ctaQuote')}
              </Link>
              <a href="https://wa.me/5218442751165" target="_blank" rel="noopener noreferrer" className="px-10 py-4 glass text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/5 transition-all hover:-translate-y-1">
                {t('ctaWhatsapp')}
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-8" />

            {/* Footer Items */}
            <div className="flex align-center justify-center flex-col md:flex-row gap-6 md:gap-12 text-sm text-white/50 font-medium">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" /> {t('location')}
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-secondary" /> {t('email')}
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5 text-secondary" /> {t('global')}
              </div>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
