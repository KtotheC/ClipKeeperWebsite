import type { Metadata } from 'next';
import Link from 'next/link';
import { Smartphone, Monitor, Sparkles } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog/posts';
import { generateBlogMetadata } from '@/lib/blog/utils';
import {
  BlogLayout,
  FeatureList,
  CTASection,
  SectionHeading,
  RelatedPosts,
} from '@/components/blog';
import { ArticleSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData';

const SLUG = 'sports-highlight-reel-maker';

export const metadata: Metadata = generateBlogMetadata(SLUG);

export default function BlogPost() {
  const post = getPostBySlug(SLUG)!;
  const relatedPosts = getRelatedPosts(SLUG, 3);

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        datePublished={post.publishedAt}
        slug={post.slug}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://getclipkeeper.com' },
          { name: 'Blog', url: 'https://getclipkeeper.com/blog' },
          { name: post.title, url: `https://getclipkeeper.com/blog/${post.slug}` },
        ]}
      />
      <FAQPageSchema
        faqs={[
          {
            question: "What's the best free app for sports highlight reels?",
            answer: 'CapCut is the most popular free option - available on mobile and desktop with no watermark. iMovie is great for Apple users, and DaVinci Resolve offers professional-grade features for free.',
          },
          {
            question: 'Can I make a youth sports highlight video on my phone?',
            answer: 'Yes! CapCut and iMovie both have excellent mobile apps. You can edit entire highlight reels on your iPhone or Android phone and export directly to social media.',
          },
          {
            question: 'How long should a youth sports highlight reel be?',
            answer: 'Keep it under 3-4 minutes total. Start with your best clip to hook viewers, cut out dead time between plays, and use simple transitions. Quality over quantity.',
          },
          {
            question: 'What editing software do professional highlight makers use?',
            answer: 'Professionals typically use Adobe Premiere Pro or DaVinci Resolve. However, the free version of DaVinci Resolve has most features you need for sports highlights.',
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Compare the best free video editors for creating youth sports highlight reels from your GameChanger clips."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>First Things First: Get Your Raw Clips</SectionHeading>
        <p className="text-gray-600 mb-6">
          Before you can edit a highlight reel, you need the actual video files.
          If your clips are on GameChanger, you&apos;ll need to{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            download them first
          </Link>
          .
        </p>
        <p className="text-gray-600 mb-6">
          GameChanger doesn&apos;t have a download button, but ClipKeeper adds one.
          Install the Chrome extension, and you can download any clip in one click.
          Building a{' '}
          <Link href="/blog/baseball-recruiting-video-tips" className="text-green-600 hover:underline">
            recruiting video
          </Link>
          ? Download all your best plays first.
        </p>

        <SectionHeading number={2}>Best Free Video Editors for Highlight Reels</SectionHeading>
        <p className="text-gray-600 mb-6">
          You don&apos;t need expensive software to make great highlight videos.
          Here are the best free options for 2025:
        </p>

        {/* CapCut */}
        <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Smartphone className="w-8 h-8 text-green-500" />
            <h3 className="font-bold text-gray-900 text-xl">CapCut</h3>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
              Recommended
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            The most popular free editor for sports clips. Available on iPhone, Android, and desktop.
          </p>
          <FeatureList
            features={[
              'Completely free with no watermark',
              'Easy drag-and-drop interface',
              'Great templates for sports highlights',
              'Auto-captions and effects',
              'Export directly to social media',
            ]}
          />
          <p className="text-gray-500 text-sm mt-3">
            Best for: Parents who want quick, easy editing on their phone
          </p>
        </div>

        {/* iMovie */}
        <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Monitor className="w-8 h-8 text-blue-500" />
            <h3 className="font-bold text-gray-900 text-xl">iMovie</h3>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
              Mac/iPhone
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Apple&apos;s free video editor. Clean interface, great for beginners.
          </p>
          <FeatureList
            features={[
              'Pre-installed on all Macs and iPhones',
              'Simple timeline editing',
              'Professional-looking titles and transitions',
              'Excellent export quality',
              'Syncs across Apple devices',
            ]}
          />
          <p className="text-gray-500 text-sm mt-3">
            Best for: Apple users who want a reliable, no-fuss editor
          </p>
        </div>

        {/* DaVinci Resolve */}
        <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-8 h-8 text-purple-500" />
            <h3 className="font-bold text-gray-900 text-xl">DaVinci Resolve</h3>
            <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium">
              Professional
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Hollywood-grade editor with a free version. More features than you&apos;ll ever need.
          </p>
          <FeatureList
            features={[
              'Industry-standard color grading',
              'Advanced audio editing',
              'No watermark on free version',
              'Available for Mac, Windows, and Linux',
              'Steeper learning curve but powerful',
            ]}
          />
          <p className="text-gray-500 text-sm mt-3">
            Best for: Parents willing to learn a professional tool for best results
          </p>
        </div>

        {/* Shotcut */}
        <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Monitor className="w-8 h-8 text-gray-500" />
            <h3 className="font-bold text-gray-900 text-xl">Shotcut</h3>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
              Windows/Mac/Linux
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Open-source editor that&apos;s completely free. Good middle-ground option.
          </p>
          <FeatureList
            features={[
              '100% free and open source',
              'Wide format support (plays .ts files directly!)',
              'No account required',
              'Decent feature set for highlights',
            ]}
          />
          <p className="text-gray-500 text-sm mt-3">
            Best for: Windows users who want something simple and free
          </p>
        </div>

        <SectionHeading number={3}>Tips for Great Highlight Reels</SectionHeading>

        <FeatureList
          title="Quick Editing Tips:"
          features={[
            'Start with your best clip to hook viewers',
            'Keep total length under 3-4 minutes',
            'Cut out dead time between plays',
            'Use simple transitions (cuts work best)',
            'Add player name and info at start and end',
            'Export at 1080p for best quality',
          ]}
        />

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can these editors handle .ts files?
        </h3>
        <p className="text-gray-600 mb-4">
          Shotcut and DaVinci Resolve can import .ts files directly. For CapCut and iMovie,
          you may need to{' '}
          <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
            convert to MP4 first
          </Link>
          .
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Which editor is easiest for beginners?
        </h3>
        <p className="text-gray-600 mb-4">
          CapCut on mobile is the easiest to learn. You can make a great highlight reel
          in under 30 minutes with no prior editing experience.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What about YouTube&apos;s built-in editor?
        </h3>
        <p className="text-gray-600 mb-4">
          YouTube&apos;s editor is very basic - it can trim clips but can&apos;t combine
          multiple videos. Use a dedicated editor then upload to YouTube.
        </p>

        <CTASection
          title="Get Your Raw Clips First"
          description="Download your GameChanger videos with ClipKeeper, then edit them into an amazing highlight reel."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
