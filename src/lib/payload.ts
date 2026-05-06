const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface Media {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: any; // Lexical JSON
  featuredImage?: Media | string;
  publishedDate?: string;
  author?: {
    username?: string;
  } | string;
  categories?: any[];
  metaTitle?: string;
  metaDescription?: string;
}

export async function getPosts(locale: string = 'es'): Promise<Post[]> {
  try {
    const res = await fetch(`${API_URL}/api/posts?locale=${locale}&depth=1&where[_status][equals]=published`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Failed to fetch posts:', res.statusText);
      return [];
    }

    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string, locale: string = 'es'): Promise<Post | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/posts?locale=${locale}&depth=2&where[slug][equals]=${slug}&where[_status][equals]=published`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch post with slug ${slug}:`, res.statusText);
      return null;
    }

    const data = await res.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

export function getMediaUrl(media: Media | string | undefined): string {
  if (!media) return '';
  if (typeof media === 'string') return media;
  if (media.url.startsWith('http')) return media.url;
  return `${API_URL}${media.url}`;
}
