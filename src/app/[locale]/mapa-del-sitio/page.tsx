'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import CtaCompact from '@/components/CtaCompact';

export default function SitemapPage() {
  const t = useTranslations('Navigation');
  const tSitemap = useTranslations('Sitemap');

  const links = [
    { name: t('home'), href: '/' as any },
    { name: t('services'), href: '/servicios' as any },
    { name: t('about'), href: '/nosotros' as any },
    { name: t('contact'), href: '/contacto' as any },
    { name: t('privacy'), href: '/aviso-de-privacidad' as any },
  ];

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <PageHero
        title={tSitemap('title')}
        subtitle={tSitemap('subtitle')}
        badge={tSitemap('badge')}
        dividerColor="bg-white"
      />

      <section className="py-24 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto bg-brand/5 rounded-2xl p-10 md:p-12 border border-brand/10 shadow-sm">
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-md md:text-lg font-display font-bold text-brand hover:text-secondary transition-colors flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaCompact />
    </main>
  );
}
