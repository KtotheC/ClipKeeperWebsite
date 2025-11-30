import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllPosts } from '@/lib/blog/posts';
import { BlogPostCard } from '@/components/blog';

export const metadata: Metadata = {
  title: 'GameChanger Video Tips & Guides | ClipKeeper Blog',
  description:
    'Expert guides on downloading, converting, and sharing GameChanger sports videos. Tips for parents, coaches, and youth athletes.',
  keywords: [
    'gamechanger tips',
    'gamechanger guides',
    'youth sports video tutorials',
    'gamechanger help',
    'download gamechanger video',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'GameChanger Video Tips & Guides | ClipKeeper Blog',
    description:
      'Expert guides on downloading, converting, and sharing GameChanger sports videos.',
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to ClipKeeper
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Blog</h1>
          <p className="text-lg text-gray-600">
            Tips, tutorials, and guides for parents who want to save their GameChanger memories.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ClipKeeper. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
