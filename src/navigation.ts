import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {locales} from './i18n/request';

export const pathnames = {
  '/': '/',
  '/aviso-de-privacidad': {
    es: '/aviso-de-privacidad',
    en: '/privacy-policy',
    pt: '/politica-de-privacidade',
    fr: '/politique-de-confidentialite',
    zh: '/yinsi-zhengce'
  },
  '/contacto': {
    es: '/contacto',
    en: '/contact',
    pt: '/contato',
    fr: '/contact',
    zh: '/lianxi'
  },
  '/mapa-del-sitio': {
    es: '/mapa-del-sitio',
    en: '/sitemap',
    pt: '/mapa-do-site',
    fr: '/plan-du-site',
    zh: '/wangdian-ditu'
  },
  '/nosotros': {
    es: '/nosotros',
    en: '/about',
    pt: '/sobre-nos',
    fr: '/a-propos',
    zh: '/guanyu'
  },
  '/servicios': {
    es: '/servicios',
    en: '/services',
    pt: '/servicos',
    fr: '/services',
    zh: '/fuwu'
  }
} as const;

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames
  });
