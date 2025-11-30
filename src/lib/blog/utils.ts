import type { Metadata } from 'next';
import { getPostBySlug } from './posts';

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateBlogMetadata(slug: string): Metadata {
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Post Not Found | ClipKeeper' };
  }

  return {
    title: `${post.title} | ClipKeeper`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: ['ClipKeeper'],
      // OG images are auto-generated via opengraph-image.tsx
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      // Twitter images are auto-generated via opengraph-image.tsx
    },
  };
}
