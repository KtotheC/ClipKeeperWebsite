import Link from 'next/link';

export default function BlogFooter() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} ClipKeeper. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-gray-700 transition-colors">
            Blog
          </Link>
          <Link href="/privacy" className="hover:text-gray-700 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
