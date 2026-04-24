'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const tServices = useTranslations('Services.items');
  return (
    <>
      <footer className="bg-brand border-t border-brand-light/50 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Image
              src="/images/header-logo.svg"
              alt="LunAvalos Logo"
              width={200}
              height={50}
              className="h-16 w-auto brightness-0 invert mb-6"
            />
            <p className="text-white/50 text-md leading-relaxed mb-6 gap-2">
              {t('description')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">{t('services')}</h4>
            <ul className="flex flex-col gap-3 text-white/70 text-sm">
              <li><a href="/servicios/?open=websites" className="hover:text-secondary transition-colors">{tServices('websites.title')}</a></li>
              <li><a href="/servicios/?open=webApps" className="hover:text-secondary transition-colors">{tServices('webApps.title')}</a></li>
              <li><a href="/servicios/?open=ecommerce" className="hover:text-secondary transition-colors">{tServices('ecommerce.title')}</a></li>
              <li><a href="/servicios/?open=marketing" className="hover:text-secondary transition-colors">{tServices('marketing.title')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">{t('contact')}</h4>
            <ul className="flex flex-col gap-4 text-white/70 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:8442751165" className="hover:text-white transition-colors">844-275-1165</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:contacto@lunavalos.com" className="hover:text-white transition-colors">contacto@lunavalos.com</a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">{t('address')}</h4>
            <ul className="flex flex-col gap-4 text-white/70 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span>
                  {t('addressText')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest text-center md:text-left">
            {t('rights', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6 text-white/50 text-[11px] uppercase font-bold tracking-widest">
            <a href="/aviso-de-privacidad" className="hover:text-white transition-colors">
              {t('privacy')}
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/5218442751165"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform border-2 border-white/20"
        >
          {/* WhatsApp SVG Path */}
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
        </a>

        {/* Regular Phone Call Button */}
        <a
          href="tel:8442751165"
          className="w-14 h-14 bg-brand-light text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform border-2 border-brand"
        >
          <Phone className="w-6 h-6 fill-current" />
        </a>
      </div>
    </>
  );
}
