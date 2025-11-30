import BlogHeader from './BlogHeader';
import BlogFooter from './BlogFooter';
import Breadcrumbs from './Breadcrumbs';
import { formatDate } from '@/lib/blog/utils';

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  publishedAt?: string;
  readingTime?: string;
  slug?: string;
}

export default function BlogLayout({
  children,
  title,
  description,
  publishedAt,
  readingTime,
  slug,
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />

      <article className="max-w-3xl mx-auto px-4 py-12">
        {slug && (
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: title },
            ]}
          />
        )}

        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600">{description}</p>
          {(publishedAt || readingTime) && (
            <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
              {publishedAt && <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>}
              {publishedAt && readingTime && <span>•</span>}
              {readingTime && <span>{readingTime}</span>}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">{children}</div>
      </article>

      <BlogFooter />
    </div>
  );
}
