'use client';

import { useState } from 'react';
import { Link } from '@/navigation';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { getMediaUrl } from '@/lib/payload';

interface BlogCardProps {
  post: any;
  locale: string;
  readMoreLabel: string;
}

export default function BlogCard({ post, locale, readMoreLabel }: BlogCardProps) {

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateString));
  };

  return (
    <Link
      href={`/blog/${post.slug}` as any}
      className="group relative flex flex-col min-h-[450px] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {post.featuredImage && typeof post.featuredImage !== 'number' ? (
          <Image
            src={getMediaUrl(post.featuredImage)}
            alt={post.featuredImage.alt || post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
        ) : (
          <div className="w-full h-full bg-brand" />
        )}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto p-8 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories?.map((cat: any) => (
            <span key={cat.id} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-black text-[9px] uppercase tracking-[0.2em]">
              {cat.title}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300 line-clamp-2 leading-tight">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="text-white/70 text-sm leading-relaxed mb-8 line-clamp-2 group-hover:text-white/90 transition-colors">
            {post.excerpt}
          </p>
        )}

        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest">
            <Calendar className="w-3 h-3 text-secondary" />
            {post.publishedDate ? formatDate(post.publishedDate) : formatDate(post.createdAt)}
          </div>
          <div className="flex items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
            {readMoreLabel} <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  );
}
