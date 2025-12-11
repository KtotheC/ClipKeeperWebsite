import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | ClipKeeper',
  description: 'ClipKeeper terms of service - the terms and conditions for using our Chrome extension and website.',
  openGraph: {
    title: 'Terms of Service | ClipKeeper',
    description: 'ClipKeeper terms of service - the terms and conditions for using our Chrome extension and website.',
    images: ['/og-image.jpg'],
  },
};

export default function TermsOfService() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: November 2025</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 mb-4">
            By installing, accessing, or using the ClipKeeper Chrome extension or visiting
            our website at getclipkeeper.com (&quot;Service&quot;), you agree to be bound by
            these Terms of Service. If you do not agree to these terms, do not use the Service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            2. Description of Service
          </h2>
          <p className="text-gray-600 mb-4">
            ClipKeeper is a Chrome browser extension that enables users to download and
            backup video clips from their personal GameChanger accounts. The Service is
            intended for parents and family members to preserve personal sports memories
            of their children.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            3. User Responsibilities
          </h2>
          <p className="text-gray-600 mb-4">
            You agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              Only download videos that you have the right to access through your own
              GameChanger account
            </li>
            <li>
              Use downloaded content for personal, non-commercial purposes only
            </li>
            <li>
              Not redistribute, sell, or publicly share downloaded videos without
              appropriate rights
            </li>
            <li>
              Not use the Service in violation of any applicable laws or regulations
            </li>
            <li>
              Not attempt to circumvent any technical limitations of the Service
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600 mb-4">
            Videos you download using ClipKeeper remain the property of their respective
            owners. ClipKeeper does not claim any ownership over content you download.
            The ClipKeeper extension, website, and associated branding are owned by
            ClipKeeper and protected by applicable intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            5. Pro Subscription
          </h2>
          <p className="text-gray-600 mb-4">
            ClipKeeper offers a paid Pro tier with additional features:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Billing:</strong> Pro subscriptions are billed annually at the
              rate displayed at time of purchase
            </li>
            <li>
              <strong>License:</strong> Each Pro license is valid for use on up to
              3 devices per account
            </li>
            <li>
              <strong>Refunds:</strong> We offer a 7-day money-back guarantee from the
              date of purchase. Contact support for refund requests.
            </li>
            <li>
              <strong>Cancellation:</strong> You may cancel your subscription at any time.
              Access continues until the end of your billing period.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            6. Free Tier Limitations
          </h2>
          <p className="text-gray-600 mb-4">
            The free tier of ClipKeeper includes a limit of 5 downloads per week.
            This limit resets every Monday at midnight. Free tier users receive
            basic file naming and single-clip downloads only.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            7. Disclaimer of Warranties
          </h2>
          <p className="text-gray-600 mb-4">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. We do not guarantee that:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>The Service will be uninterrupted or error-free</li>
            <li>The Service will be compatible with all websites or browsers</li>
            <li>Downloaded files will be in any specific format or quality</li>
            <li>The Service will continue to function if third-party platforms change</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLIPKEEPER SHALL NOT BE LIABLE FOR
            ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR
            ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY,
            OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Your use or inability to use the Service</li>
            <li>Any changes to or discontinuation of the Service</li>
            <li>Any unauthorized access to your downloads or data</li>
            <li>Any third-party conduct or content</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            9. Third-Party Services
          </h2>
          <p className="text-gray-600 mb-4">
            ClipKeeper interacts with GameChanger (web.gc.com) but is not affiliated with,
            endorsed by, or sponsored by GameChanger or Dick&apos;s Sporting Goods. GameChanger
            is a trademark of its respective owner. Your use of GameChanger is subject to
            their own terms of service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            10. Termination
          </h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to suspend or terminate your access to the Service at
            any time, with or without cause, and with or without notice. Upon termination:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Your license to use the Service immediately ends</li>
            <li>Pro subscription refunds are at our discretion</li>
            <li>You may uninstall the extension at any time</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            11. Changes to Terms
          </h2>
          <p className="text-gray-600 mb-4">
            We may modify these Terms at any time. We will notify users of material
            changes by updating the &quot;Last updated&quot; date. Continued use of the
            Service after changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            12. Governing Law
          </h2>
          <p className="text-gray-600 mb-4">
            These Terms shall be governed by and construed in accordance with the laws
            of the United States, without regard to conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            13. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-600 mb-4">
            <a
              href="mailto:support@getclipkeeper.com"
              className="text-green-600 hover:underline"
            >
              support@getclipkeeper.com
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
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
