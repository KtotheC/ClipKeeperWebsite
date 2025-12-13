import Link from 'next/link';
import { User } from 'lucide-react';

export default function AuthorBio() {
  return (
    <div className="border-t border-gray-200 mt-12 pt-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
          <User className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Written by</p>
          <Link
            href="/about"
            className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors"
          >
            Casey Jessup
          </Link>
          <p className="text-gray-600 mt-1">
            ClipKeeper Founder | Parent of youth athletes helping families preserve sports memories
          </p>
        </div>
      </div>
    </div>
  );
}
