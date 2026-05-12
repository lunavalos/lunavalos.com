import { getPosts, getMediaUrl } from '@/lib/payload';
import PageHero from '@/components/PageHero';
import Navbar from '@/components/Navbar';
import CtaCompact from '@/components/CtaCompact';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';

import BlogCard from '@/components/BlogCard';

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('Blog');
  const { docs: posts } = await getPosts();

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        badge={t('badge')}
        dividerColor="bg-white"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  locale={locale}
                  readMoreLabel={t('readMore')}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand/40 font-display text-xl">{t('noPosts')}</p>
            </div>
          )}
        </div>
      </section>

      <CtaCompact />
    </main>
  );
}
