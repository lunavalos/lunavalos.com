'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code2,
  ShoppingBag,
  Cpu,
  Mail,
  Bot,
  Layers,
  ArrowRight,
  MonitorSmartphone
} from 'lucide-react';
import BorderGlow from './BorderGlow';
import { useRef } from 'react';

import { useTranslations, useLocale } from 'next-intl';

const servicesList = [
  { id: 'webApps', icon: <Code2 /> },
  { id: 'websites', icon: <MonitorSmartphone /> },
  { id: 'ecommerce', icon: <ShoppingBag /> },
  { id: 'ai', icon: <Bot /> },
  { id: 'marketing', icon: <Mail /> },
  { id: 'digitalization', icon: <Cpu /> }
];

const techMap: Record<string, Record<string, string[]>> = {
  es: {
    webApps: ["Laravel", "Next.js", "React", "Prisma", "Spatie", "API REST"],
    websites: ["SEO técnico", "Diseño UI/UX", "Core Web Vitals", "Custom CMS", "Responsive Design"],
    ecommerce: ["Headless", "Next.js + API", "Laravel API", "Pasarelas MX/US", "CFDI"],
    ai: ["ChatGPT API", "Claude API", "Automatización", "NLP", "ML Integrado"],
    marketing: ["Mailchimp", "ActiveCampaign", "Automatización", "Segmentación", "Analytics"],
    digitalization: ["Menú Digital", "Catálogo digital", "QR & NFC", "Google Analytics", "SEO local"]
  },
  en: {
    webApps: ["Laravel", "Next.js", "React", "Prisma", "Spatie", "REST API"],
    websites: ["Technical SEO", "UI/UX Design", "Core Web Vitals", "Custom CMS", "Responsive Design"],
    ecommerce: ["Headless", "Next.js + API", "Laravel API", "MX/US Gateways", "Invoicing"],
    ai: ["ChatGPT API", "Claude API", "Automation", "NLP", "Integrated ML"],
    marketing: ["Mailchimp", "ActiveCampaign", "Automation", "Segmentation", "Analytics"],
    digitalization: ["Digital Menu", "Digital Catalog", "QR & NFC", "Google Analytics", "Local SEO"]
  }
};

function ServiceCard({ service, index, scrollYProgress, techs, t }: any) {
  // Entrance stagger: starts at 0.1 of section scroll
  // Exit stagger: starts at 0.7 of section scroll
  const opacity = useTransform(
    scrollYProgress, 
    [0.1 + index * 0.03, 0.2 + index * 0.03, 0.75 + index * 0.02, 0.85 + index * 0.02], 
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress, 
    [0.1 + index * 0.03, 0.2 + index * 0.03, 0.75 + index * 0.02, 0.85 + index * 0.02], 
    [60, 0, 0, -60]
  );

  const scale = useTransform(
    scrollYProgress, 
    [0.1 + index * 0.03, 0.2 + index * 0.03, 0.75 + index * 0.02, 0.85 + index * 0.02], 
    [0.9, 1, 1, 0.95]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="group relative h-full cursor-default transition-all duration-300 origin-center"
    >
      <BorderGlow
        glowRadius={90}
        glowIntensity={0.05}
        edgeSensitivity={9}
        coneSpread={3}
        animated={true}
        backgroundColor="#14275fc1"
        glowColor="rgba(255, 255, 255, 0.34)"
        borderRadius={10}
        className="flex flex-col p-10 h-full border border-white/5"
      >
        <div className="text-white mb-8 [&>svg]:w-14 [&>svg]:h-14 [&>svg]:stroke-[1.5] group-hover:text-secondary transition-all duration-500 origin-left">
          {service.icon}
        </div>

        <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">{t(`${service.id}.title`)}</h3>
        <p className="text-white/30 text-sm leading-relaxed mb-10 flex-grow">
          {t(`${service.id}.description`)}
        </p>

        <div className="flex items-end justify-between pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2 mr-4">
            {techs[service.id].map((tTech: string) => (
              <span key={tTech} className="text-[9px] font-bold uppercase tracking-widest text-brand glass text-white/40 px-2 py-1 rounded">
                {tTech}
              </span>
            ))}
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}

export default function ServiceGrid() {
  const t = useTranslations('Services.items');
  const locale = useLocale();
  const techs = techMap[locale] || techMap['es'];
  const gridRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesList.map((service, index) => (
        <ServiceCard 
          key={service.id} 
          service={service} 
          index={index} 
          scrollYProgress={scrollYProgress} 
          techs={techs}
          t={t}
        />
      ))}
    </div>
  );
}
