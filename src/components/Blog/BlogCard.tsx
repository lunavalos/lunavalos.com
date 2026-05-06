'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/navigation';
import BorderGlow from '../BorderGlow';
import { Post, getMediaUrl } from '@/lib/payload';
import { useTranslations } from 'next-intl';

interface BlogCardProps {
  post: Post;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const t = useTranslations('Blog');
  const imageUrl = getMediaUrl(post.featuredImage);
  const formattedDate = post.publishedDate 
    ? new Date(post.publishedDate).toLocaleDateString()
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full cursor-pointer"
    >
      <Link href={`/blog/${post.slug}`}>
        <BorderGlow
          glowRadius={120}
          glowIntensity={0.08}
          edgeSensitivity={10}
          animated={true}
          backgroundColor="#193074"
          glowColor="rgba(249, 159, 31, 0.2)"
          borderRadius={16}
          className="flex flex-col h-full overflow-hidden border border-white/5"
        >
          {/* Image Container */}
          <div className="relative h-60 w-full overflow-hidden">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-brand-light flex items-center justify-center">
                <span className="text-white/20 font-display font-bold text-4xl">LUNAVALOS</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent opacity-60" />
            
            {/* Category badge if exists */}
            {post.categories && post.categories.length > 0 && (
              <div className="absolute top-4 left-4">
                <span className="bg-secondary text-brand text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                  {typeof post.categories[0] === 'object' ? post.categories[0].title : 'Blog'}
                </span>
              </div>
            )}
          </div>

          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-display font-bold mb-4 tracking-tight group-hover:text-secondary transition-colors duration-300">
              {post.title}
            </h3>
            
            <p className="text-white/70 text-sm leading-relaxed mb-8 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                {t('readMore')}
              </span>
              <ArrowRight size={16} className="text-secondary" />
            </div>
          </div>
        </BorderGlow>
      </Link>
    </motion.div>
  );
}
