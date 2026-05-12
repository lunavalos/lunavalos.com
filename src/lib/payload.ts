export interface Media {
  id: number;
  alt: string;
  url?: string | null;
  width?: number | null;
  height?: number | null;
}

export interface Category {
  id: number;
  title: string;
  slug?: string | null;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  excerpt?: string | null;
  content: any; // Lexical content
  author: number | User;
  categories?: (number | Category)[] | null;
  featuredImage?: (number | null) | Media;
  slug?: string | null;
  publishedDate?: string | null;
  createdAt: string;
  updatedAt: string;
  _status?: 'draft' | 'published' | null;
}

export interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
}

const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000';

export async function getPosts(page = 1, limit = 10): Promise<PayloadResponse<Post>> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/posts?where[_status][equals]=published&depth=2&page=${page}&limit=${limit}`,
    {
      next: { revalidate: 60 }, // Revalidate every minute
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/posts?where[slug][equals]=${slug}&depth=2`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }

  const data: PayloadResponse<Post> = await res.json();
  return data.docs[0] || null;
}

export function getMediaUrl(media: Media | number | null | undefined): string {
  if (!media || typeof media === 'number') return '';
  
  const url = media.url || '';
  if (url.startsWith('http')) {
    return url;
  }
  
  return `${PAYLOAD_URL}${url}`;
}
