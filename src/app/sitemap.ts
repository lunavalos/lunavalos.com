import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lunavalos.com';
  
  const locales = ['es', 'en', 'pt', 'fr', 'zh'];
  const defaultLocale = 'es';
  const routes = ['', '/servicios', '/nosotros', '/contacto', '/aviso-de-privacidad', '/mapa-del-sitio'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const prefix = locale === defaultLocale ? '' : `/${locale}`;
      sitemapEntries.push({
        url: `${baseUrl}${prefix}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
