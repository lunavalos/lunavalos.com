import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {locales} from './i18n/request';

export const pathnames = {
  '/': '/',
  '/aviso-de-privacidad': '/aviso-de-privacidad',
  '/contacto': '/contacto',
  '/nosotros': '/nosotros',
  '/servicios': {
    es: '/servicios',
    en: '/services',
    pt: '/servicos',
    fr: '/services',
    zh: '/fuwu' // services in zh
  }
} as const;

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames
  });
