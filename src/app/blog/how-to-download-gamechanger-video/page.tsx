import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, Chrome, MousePointer, FolderCheck, Play, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Download GameChanger Videos (Step-by-Step Guide) | ClipKeeper',
  description:
    'Learn how to download and save your GameChanger video clips in 3 easy steps. Keep your youth sports memories forever with ClipKeeper Chrome extension.',
  keywords: [
    'how to download gamechanger video',
    'download gamechanger clips',
    'save gamechanger videos',
    'gamechanger video download',
    'gamechanger backup',
  ],
  openGraph: {
    title: 'How to Download GameChanger Videos (Step-by-Step Guide)',
    description:
      'Learn how to download and save your GameChanger video clips in 3 easy steps.',
    type: 'article',
  },
};

export default function BlogPost() {
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

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Download GameChanger Videos (Step-by-Step Guide)
          </h1>
          <p className="text-lg text-gray-600">
            Keep your kids&apos; sports highlights forever. Here&apos;s the easiest way to
            download and backup GameChanger video clips.
          </p>
        </header>

        {/* Video placeholder */}
        <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center mb-12 border border-gray-200">
          <div className="text-center text-gray-400">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm">Tutorial video coming soon</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-8 mb-4">
            <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
              1
            </span>
            The Problem: Your Memories Are Locked Away
          </h2>
          <p className="text-gray-600 mb-6">
            If you&apos;re a parent with kids playing youth baseball, softball, or basketball,
            you probably use GameChanger. It&apos;s great for tracking games and watching
            video highlights of your child&apos;s big moments.
          </p>
          <p className="text-gray-600 mb-6">
            But there&apos;s a catch: <strong>you can&apos;t download those videos</strong>.
            They&apos;re stuck on GameChanger&apos;s platform. If you cancel your $99/year
            subscription, or if GameChanger changes their service, you lose access to
            years of precious memories.
          </p>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-4">
            <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
              2
            </span>
            The Solution: ClipKeeper Chrome Extension
          </h2>
          <p className="text-gray-600 mb-6">
            ClipKeeper is a Chrome extension that adds a download button to every video
            clip on GameChanger. One click, and the video is saved to your computer.
          </p>

          <div className="bg-green-50 rounded-xl p-6 my-8 border border-green-100">
            <h3 className="font-semibold text-gray-900 mb-3">Why Parents Love ClipKeeper:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Videos saved permanently on your computer
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Files named automatically (player name, play type, inning)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Share clips with grandparents, coaches, or college scouts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                Create highlight reels in any video editor
              </li>
            </ul>
          </div>

          <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-4">
            <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
              3
            </span>
            Step-by-Step: How to Download GameChanger Videos
          </h2>

          {/* Step 1 */}
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Chrome className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Step 1: Install ClipKeeper
                </h3>
                <p className="text-gray-600">
                  Go to the Chrome Web Store and search for &quot;ClipKeeper&quot; or click
                  the button below. Click &quot;Add to Chrome&quot; to install. It takes about
                  10 seconds.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mt-4 hover:bg-green-600 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Install ClipKeeper Free
                </a>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MousePointer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Step 2: Go to GameChanger
                </h3>
                <p className="text-gray-600">
                  Navigate to{' '}
                  <a
                    href="https://web.gc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    web.gc.com
                    <ExternalLink className="w-3 h-3 inline ml-1" />
                  </a>{' '}
                  and log in with your GameChanger account. Go to any game&apos;s video
                  clips page.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Step 3: Click Download
                </h3>
                <p className="text-gray-600">
                  You&apos;ll see a green download button appear on each video card.
                  Click it, and the video downloads to your computer in seconds.
                  That&apos;s it!
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <FolderCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Step 4: Enjoy Your Videos
                </h3>
                <p className="text-gray-600">
                  Your videos are saved as .ts files in your Downloads folder. They play
                  in VLC, Windows Media Player, or any modern video player. Pro tip: use
                  VLC to convert to MP4 if needed for social media.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            Frequently Asked Questions
          </h2>

          <h3 className="font-semibold text-gray-900 mt-6 mb-2">
            Is this legal?
          </h3>
          <p className="text-gray-600 mb-4">
            Yes. You&apos;re downloading videos of your own children that you already
            have viewing access to. ClipKeeper simply helps you exercise your right to
            backup your personal family memories.
          </p>

          <h3 className="font-semibold text-gray-900 mt-6 mb-2">
            Why are videos in .ts format?
          </h3>
          <p className="text-gray-600 mb-4">
            Chrome&apos;s security policies prevent in-browser video conversion. The .ts
            format is actually GameChanger&apos;s original format - you&apos;re getting
            the highest quality video. Most players (VLC, Windows Media Player) play
            .ts files natively.
          </p>

          <h3 className="font-semibold text-gray-900 mt-6 mb-2">
            What about batch downloads?
          </h3>
          <p className="text-gray-600 mb-4">
            The free version lets you download 5 clips per week. ClipKeeper Pro ($29/year)
            includes unlimited downloads and batch download of entire games with one click.
          </p>

          {/* CTA */}
          <div className="bg-green-500 rounded-xl p-8 my-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Ready to Save Your Memories?</h2>
            <p className="text-green-100 mb-6">
              Install ClipKeeper free and start downloading your GameChanger clips today.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
            >
              <Download className="w-5 h-5" />
              Get ClipKeeper Free
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
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
