'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { locales } from '@/i18n/request';
import { Globe, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), href: '/' as any },
    { name: t('services'), href: '/servicios' as any },
    { name: t('about'), href: '/nosotros' as any },
    { name: t('contact'), href: '/contacto' as any },
  ];

  const router = useRouter();

  const onLanguageChange = (targetLocale: string) => {
    setIsLangOpen(false);
    router.replace(pathname, { locale: targetLocale as any });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none transition-all duration-300">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-7xl px-8 py-3 rounded-full shadow-2xl transition-colors duration-500 ${isScrolled
          ? 'bg-brand/90 backdrop-blur-xs border border-white/10'
          : 'glass'
          }`}
      >
        <Link href="/" className="flex items-center" aria-label="Inicio">
          <Image
            src="/images/header-logo.svg"
            alt="LunAvalos Logo"
            width={140}
            height={40}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
        </Link>


        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden md:flex items-center">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
              aria-label="Cambiar idioma"
            >
              <Globe className="w-4 h-4" />
              <span className="text-[10px] uppercase font-black text-secondary">{locale}</span>
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-6 p-2 bg-[#081f63]/95 backdrop-blur-xl border border-white/10 rounded-xl flex flex-col gap-1 min-w-[60px] shadow-2xl"
                >
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => onLanguageChange(l)}
                      className={`text-xs uppercase font-black transition-all px-3 py-2 w-10 rounded-lg flex items-center justify-center ${locale === l ? 'bg-white/10 text-secondary' : 'text-white/50 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {l}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="md:hidden flex items-center text-white/80 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-[80px] left-6 right-6 p-6 rounded-2xl flex flex-col gap-6 md:hidden pointer-events-auto shadow-2xl transition-all duration-500 ${
              isScrolled ? 'bg-brand/95 backdrop-blur-xl border border-white/10' : 'glass'
            }`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors w-fit"
                aria-label="Cambiar idioma"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs uppercase font-black text-secondary">{locale}</span>
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-wrap gap-3 overflow-hidden ml-7"
                  >
                    {locales.map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          onLanguageChange(l);
                          setIsOpen(false);
                        }}
                        className={`text-xs uppercase font-black transition-colors px-2 py-1 ${locale === l ? 'text-secondary' : 'text-white/50 hover:text-white'
                          }`}
                      >
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
