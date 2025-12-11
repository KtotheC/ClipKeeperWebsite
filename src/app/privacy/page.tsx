import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | ClipKeeper',
  description: 'ClipKeeper privacy policy - how we handle your data and protect your privacy.',
  openGraph: {
    title: 'Privacy Policy | ClipKeeper',
    description: 'ClipKeeper privacy policy - how we handle your data and protect your privacy.',
    images: ['/og-image.jpg'],
  },
};

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: November 2025</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Overview</h2>
          <p className="text-gray-600 mb-4">
            ClipKeeper (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and safeguard
            your information when you use our Chrome extension and website.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Information We Collect
          </h2>

          <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
            Chrome Extension
          </h3>
          <p className="text-gray-600 mb-4">
            The ClipKeeper Chrome extension:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Does NOT</strong> collect, transmit, or store any personal data
            </li>
            <li>
              <strong>Does NOT</strong> track your browsing history
            </li>
            <li>
              <strong>Does NOT</strong> access your GameChanger account credentials
            </li>
            <li>
              <strong>Does NOT</strong> send any data to our servers (except for
              license validation, if applicable)
            </li>
            <li>
              Operates entirely locally on your computer
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            The extension only interacts with GameChanger pages (web.gc.com) that you
            visit while logged into your own GameChanger account. All video downloads
            happen directly between your browser and GameChanger&apos;s video servers.
          </p>

          <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">
            Website
          </h3>
          <p className="text-gray-600 mb-4">
            When you visit our website, we may collect:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Email address</strong> - Only if you voluntarily join our
              waitlist. Used solely to notify you when features become available.
            </li>
            <li>
              <strong>Basic analytics</strong> - Anonymous usage data (page views,
              browser type) to improve our website. No personal identification.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            If you provide your email address:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>To notify you when Pro features launch</li>
            <li>To send occasional product updates (you can unsubscribe anytime)</li>
            <li>To respond to support inquiries</li>
          </ul>
          <p className="text-gray-600 mb-4">
            We will <strong>never</strong> sell, rent, or share your email address
            with third parties for marketing purposes.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Data Storage and Security
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              Email addresses are stored securely and encrypted at rest
            </li>
            <li>
              We use industry-standard security measures to protect your data
            </li>
            <li>
              Videos you download are stored only on your local computer - we never
              see or access them
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Third-Party Services
          </h2>
          <p className="text-gray-600 mb-4">
            We may use the following third-party services:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Vercel</strong> - Website hosting
            </li>
            <li>
              <strong>Analytics provider</strong> - Anonymous website analytics
            </li>
            <li>
              <strong>Payment processor</strong> (future) - For Pro subscriptions,
              handled securely by the processor
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Request access to any personal data we have</li>
            <li>Request deletion of your data</li>
            <li>Unsubscribe from marketing emails at any time</li>
            <li>Uninstall the extension at any time</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-gray-600 mb-4">
            ClipKeeper is designed for adults (parents). We do not knowingly collect
            personal information from children under 13. If you believe we have
            inadvertently collected such information, please contact us immediately.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. We will notify you
            of any significant changes by posting the new policy on this page and
            updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you have questions about this Privacy Policy or your data, please
            contact us at:
          </p>
          <p className="text-gray-600 mb-4">
            <a
              href="mailto:privacy@getclipkeeper.com"
              className="text-green-600 hover:underline"
            >
              privacy@getclipkeeper.com
            </a>
          </p>
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
            <Link
              href="/blog/how-to-download-gamechanger-video"
              className="hover:text-gray-700 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
