import { getPostBySlug, getMediaUrl } from '@/lib/payload';
import Navbar from '@/components/Navbar';
import CtaCompact from '@/components/CtaCompact';
import RichText from '@/components/RichText';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/navigation';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';

import BlogPostHero from '@/components/BlogPostHero';

export default async function BlogPostPage({
    params: { locale, slug }
}: {
    params: { locale: string; slug: string }
}) {
    const t = await getTranslations('Blog');
    const post = await getPostBySlug(slug, locale);

    if (!post) {
        notFound();
    }

    return (
        <main className="relative min-h-screen bg-white">
            <Navbar />

            <BlogPostHero
                title={post.title}
                categories={post.categories || []}
                publishedDate={post.publishedDate || undefined}
                createdAt={post.createdAt}
                authorName={typeof post.author !== 'number' ? post.author?.username : undefined}
                backToListLabel={t('backToList')}
                locale={locale}
            />

            {/* Article Content */}
            <article className="py-24 px-6">
                <div className="max-w-7xl px-4 mx-auto">
                    {post.excerpt && (
                        <p className="text-2xl font-display font-medium text-brand/90 leading-relaxed mb-12 italic border-l-4 border-secondary/30 pl-8">
                            {post.excerpt}
                        </p>
                    )}

                    <RichText content={post.content} />

                    {/* Featured Image - Moved here */}
                    <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">
                        {post.featuredImage && typeof post.featuredImage !== 'number' ? (
                            <div className="relative aspect-video">
                                <Image
                                    src={getMediaUrl(post.featuredImage)}
                                    alt={post.featuredImage.alt || post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="aspect-video bg-brand/5 flex items-center justify-center">
                                <span className="text-brand/10 font-display font-bold text-9xl">L/A</span>
                            </div>
                        )}
                    </div>

                    {/* Share / Tags section */}
                    <div className="mt-20 pt-10 border-t border-brand/5 flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="text-brand/40 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                <Tag className="w-3 h-3" /> Categorías:
                            </span>
                            {post.categories?.map((cat: any) => (
                                <span key={cat.id} className="text-brand/80 text-xs font-bold hover:text-secondary transition-colors cursor-default">
                                    #{cat.title}
                                </span>
                            ))}
                        </div>

                        <Link
                            href="/blog"
                            className="px-8 py-3 bg-brand/5 text-brand font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-brand/10 transition-all"
                        >
                            {t('backToList')}
                        </Link>
                    </div>
                </div>
            </article>

            <CtaCompact />
        </main>
    );
}
