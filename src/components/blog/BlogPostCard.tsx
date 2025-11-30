import Link from 'next/link';
import type { BlogPost } from '@/lib/blog/posts';
import { formatDate } from '@/lib/blog/utils';

interface BlogPostCardProps {
  post: BlogPost;
}

const categoryLabels: Record<BlogPost['category'], string> = {
  tutorial: 'Tutorial',
  comparison: 'Comparison',
  guide: 'Guide',
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block border border-gray-200 rounded-xl p-6 hover:border-green-300 hover:shadow-sm transition-all group"
    >
      <span className="text-xs font-medium text-green-600 uppercase tracking-wide">
        {categoryLabels[post.category]}
      </span>
      <h2 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-green-600 transition-colors">
        {post.title}
      </h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <span>{formatDate(post.publishedAt)}</span>
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
