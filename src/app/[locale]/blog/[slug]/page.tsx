import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Link } from '@/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import RichText from '@/components/Blog/RichText';
import { getPostBySlug, getMediaUrl } from '@/lib/payload';

export const revalidate = 60;

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, params.locale);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.featuredImage ? [{ url: getMediaUrl(post.featuredImage) }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug, params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'Blog' });

  if (!post) {
    notFound();
  }

  const imageUrl = getMediaUrl(post.featuredImage);
  const formattedDate = post.publishedDate 
    ? new Date(post.publishedDate).toLocaleDateString(params.locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : '';

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      {/* Post Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand/70 z-10" />
          {imageUrl && (
            <Image 
              src={imageUrl} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight tracking-tight uppercase">
            {post.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-8 text-white font-bold uppercase tracking-[0.2em] text-xs">
            <span className="flex items-center gap-3">
              <Calendar size={18} className="text-secondary" />
              {formattedDate}
            </span>
            {post.author && (
              <span className="flex items-center gap-3">
                <User size={18} className="text-secondary" />
                {typeof post.author === 'object' 
                  ? (post.author.username || post.author.name || 'Admin') 
                  : post.author}
              </span>
            )}
            {post.categories && post.categories.length > 0 && (
              <span className="flex items-center gap-3">
                <Tag size={18} className="text-secondary" />
                {typeof post.categories[0] === 'object' ? post.categories[0].title : post.categories[0]}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Article */}
          <article className="prose-container">
            <RichText 
              content={post.content} 
              isBlogDetail={true}
              className="prose-slate max-w-none"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
