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

const PAYLOAD_URL = 'https://blogmanager.lunavalos.com';

export async function getPosts(page = 1, limit = 10, locale = 'es'): Promise<PayloadResponse<Post>> {
  const fetchUrl = `${PAYLOAD_URL}/api/posts?where[_status][equals]=published&depth=2&page=${page}&limit=${limit}&locale=${locale}`;
  console.log('Fetching posts from:', fetchUrl);
  
  try {
    const res = await fetch(fetchUrl, {
      cache: 'no-store', // Disable cache for debugging
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Payload fetch error (${res.status}):`, errorText);
      return { docs: [], totalDocs: 0, limit, totalPages: 0, page };
    }

    const data = await res.json();
    console.log(`Successfully fetched ${data.docs?.length} posts`);
    return data;
  } catch (error) {
    console.error('getPosts network error:', error);
    return { docs: [], totalDocs: 0, limit, totalPages: 0, page };
  }
}

export async function getPostBySlug(slug: string, locale = 'es'): Promise<Post | null> {
  try {
    const res = await fetch(
      `${PAYLOAD_URL}/api/posts?where[slug][equals]=${slug}&depth=2&locale=${locale}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error('Payload single post fetch error:', res.statusText);
      return null;
    }

    const data: PayloadResponse<Post> = await res.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('getPostBySlug error:', error);
    return null;
  }
}

export function getMediaUrl(media: Media | number | null | undefined): string {
  if (!media || typeof media === 'number') return '';
  
  const url = media.url || '';
  if (url.startsWith('http')) {
    return url;
  }
  
  return `${PAYLOAD_URL}${url}`;
}
