import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BlogHeaderProps {
  backTo?: 'home' | 'blog';
}

export default function BlogHeader({ backTo = 'blog' }: BlogHeaderProps) {
  const href = backTo === 'home' ? '/' : '/blog';
  const label = backTo === 'home' ? 'Back to ClipKeeper' : 'All Articles';

  return (
    <header className="border-b border-gray-100 py-4">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {label}
        </Link>
      </div>
    </header>
  );
}
