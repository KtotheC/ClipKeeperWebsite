import Link from 'next/link';
import type { BlogPost } from '@/lib/blog/posts';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
