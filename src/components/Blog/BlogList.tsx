import React from 'react';
import BlogCard from './BlogCard';
import { Post } from '@/lib/payload';

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-white/40 text-lg">No hay publicaciones disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
