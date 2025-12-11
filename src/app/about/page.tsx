import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Code, Users, Heart, Shield } from 'lucide-react';
import { OrganizationSchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'About ClipKeeper | Our Story',
  description: 'Learn about ClipKeeper - built by parents, for parents. We help families preserve their youth sports memories from GameChanger.',
  openGraph: {
    title: 'About ClipKeeper | Our Story',
    description: 'Learn about ClipKeeper - built by parents, for parents. We help families preserve their youth sports memories from GameChanger.',
    images: ['/og-image.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://getclipkeeper.com' },
          { name: 'About', url: 'https://getclipkeeper.com/about' },
        ]}
      />
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About ClipKeeper</h1>

          {/* Origin Story */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-green-500" />
              Built by Parents, for Parents
            </h2>
            <p className="text-gray-600 mb-4">
              ClipKeeper started when we realized we had years of our kids&apos; baseball highlights
              trapped on GameChanger with no way to download them. As software developers and
              youth sports parents ourselves, we built the tool we wished existed.
            </p>
            <p className="text-gray-600 mb-4">
              We know how much those video clips mean. The game-winning hit, the diving catch,
              the first home run - these are family memories that deserve to be preserved forever,
              not locked behind a subscription.
            </p>
          </section>

          {/* Expertise */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-500" />
              Technical Expertise
            </h2>
            <p className="text-gray-600 mb-4">
              Our team has over 15 years of experience building browser extensions and web
              applications. We&apos;ve worked at major tech companies and understand both the
              technical challenges and the importance of user privacy.
            </p>
            <p className="text-gray-600 mb-4">
              ClipKeeper is built with modern web technologies and follows Chrome&apos;s best
              practices for extension development. We prioritize security, performance, and
              user experience.
            </p>
          </section>

          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              We believe parents should own their family&apos;s sports memories. GameChanger provides
              a great service for live scoring and video capture, but those videos are your memories.
            </p>
            <p className="text-gray-600 mb-4">
              ClipKeeper helps you backup and preserve your clips so they&apos;re safe forever -
              whether you want to create a highlight reel, share with family, or just have peace
              of mind knowing your memories are backed up.
            </p>
          </section>

          {/* Trust Signals */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              Privacy & Trust
            </h2>
            <div className="bg-green-50 rounded-xl p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-medium">&#10003;</span>
                  <span><strong>No data collection</strong> - ClipKeeper operates entirely locally on your computer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-medium">&#10003;</span>
                  <span><strong>No tracking</strong> - We don&apos;t track your browsing or video downloads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-medium">&#10003;</span>
                  <span><strong>Open source</strong> - Our extension code is transparent and auditable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-medium">&#10003;</span>
                  <span><strong>Chrome Web Store verified</strong> - Published through official channels</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Have questions or feedback? We&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Contact Us
            </Link>
          </section>
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
              <Link href="/contact" className="hover:text-gray-700 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
