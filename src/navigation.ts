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
  '/terminos': {
    es: '/terminos',
    en: '/terms',
    pt: '/termos',
    fr: '/conditions',
    zh: '/tiaokuan'
  },
  '/eliminar-datos': {
    es: '/eliminar-datos',
    en: '/delete-data',
    pt: '/excluir-dados',
    fr: '/supprimer-donnees',
    zh: '/shanchu-shuju'
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
  },
  '/blog': {
    es: '/blog',
    en: '/blog',
    pt: '/blog',
    fr: '/blog',
    zh: '/blog'
  },
  '/blog/[slug]': {
    es: '/blog/[slug]',
    en: '/blog/[slug]',
    pt: '/blog/[slug]',
    fr: '/blog/[slug]',
    zh: '/blog/[slug]'
  }
} as const;

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames
  });
