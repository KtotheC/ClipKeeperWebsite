import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, Clock, MessageCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Support | ClipKeeper',
  description: 'Get help with ClipKeeper. Contact our support team for questions about downloads, Pro features, or technical issues.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-4">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to ClipKeeper
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact & Support</h1>
        <p className="text-gray-600 mb-8">
          We&apos;re here to help you get the most out of ClipKeeper.
        </p>

        {/* Contact Card */}
        <div className="bg-green-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h2>
              <p className="text-gray-600 mb-4">
                For questions, issues, or feedback, reach out to our support team.
              </p>
              <a
                href="mailto:support@getclipkeeper.com"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                support@getclipkeeper.com
              </a>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>We typically respond within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Common Topics */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Common Support Topics</h2>

        <div className="grid gap-4 mb-12">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Download Issues</h3>
                <p className="text-gray-600 text-sm">
                  If clips aren&apos;t downloading, try refreshing the GameChanger page and ensure you&apos;re
                  logged into your GameChanger account. The extension only works on web.gc.com.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Pro License Activation</h3>
                <p className="text-gray-600 text-sm">
                  After purchase, copy your license key from the confirmation page. Click the ClipKeeper
                  icon in Chrome, paste your key, and click &quot;Activate&quot;.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">File Format (.ts files)</h3>
                <p className="text-gray-600 text-sm">
                  ClipKeeper downloads videos in .ts format (MPEG Transport Stream). These files play
                  in VLC, Windows Media Player, and most modern video players. You can convert to MP4
                  using free tools like HandBrake if needed.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Refund Requests</h3>
                <p className="text-gray-600 text-sm">
                  We offer a 7-day money-back guarantee on Pro subscriptions. Email us with your
                  purchase email and we&apos;ll process your refund promptly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Other Inquiries</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Privacy Questions</h3>
                <a href="mailto:privacy@getclipkeeper.com" className="text-green-600 hover:underline text-sm">
                  privacy@getclipkeeper.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">Business Inquiries</h3>
                <a href="mailto:support@getclipkeeper.com" className="text-green-600 hover:underline text-sm">
                  support@getclipkeeper.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-12">
        <div className="max-w-3xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ClipKeeper. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
