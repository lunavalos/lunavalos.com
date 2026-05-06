import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/PageHero';
import BlogList from '@/components/Blog/BlogList';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import { getPosts } from '@/lib/payload';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'Blog' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Blog' });
  const posts = await getPosts(params.locale);

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title={t('title')}
        subtitle={t('subtitle')}
        badge={t('badge')}
        dividerColor="bg-white"
      />

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <BlogList posts={posts} />
        </div>
      </section>
    </main>
  );
}
