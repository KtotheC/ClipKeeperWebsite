import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, RefreshCw, Monitor, Globe, ExternalLink } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog/posts';
import { generateBlogMetadata } from '@/lib/blog/utils';
import {
  BlogLayout,
  StepCard,
  FeatureList,
  CTASection,
  SectionHeading,
  RelatedPosts,
} from '@/components/blog';
import { ArticleSchema, HowToSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData';

const SLUG = 'convert-ts-to-mp4';

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
        dateModified={post.updatedAt}
        slug={post.slug}
      />
      <HowToSchema
        name="How to Convert .TS to MP4"
        description="Convert .ts video files to MP4 format using free tools"
        steps={[
          { name: 'Install VLC', text: 'Download VLC Media Player from videolan.org' },
          { name: 'Open VLC', text: 'Go to Media > Convert/Save (or Ctrl+R)' },
          { name: 'Add File', text: 'Click Add and select your .ts file' },
          { name: 'Convert', text: 'Choose MP4 profile, set destination, and click Start' },
        ]}
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
            question: 'Does converting TS to MP4 reduce video quality?',
            answer: 'Technically yes - any re-encoding involves some quality loss. But with proper settings (H.264 codec, high bitrate), the difference is invisible to the human eye.',
          },
          {
            question: 'How long does it take to convert TS to MP4?',
            answer: "A typical 30-second clip takes about 10-30 seconds to convert, depending on your computer's speed. Longer videos take proportionally longer.",
          },
          {
            question: 'Can I convert TS files to MP4 on my phone?',
            answer: "Yes, but it's easier on desktop. VLC for iOS/Android can convert files, or use an online converter like CloudConvert.",
          },
          {
            question: 'What is the best free TS to MP4 converter?',
            answer: 'VLC Media Player is the best free option - it works on Mac and Windows, handles conversion perfectly, and is completely free with no watermarks or limitations.',
          },
          {
            question: 'Can I batch convert multiple TS files to MP4?',
            answer: 'Yes! HandBrake is best for batch conversion - add all files to a queue and convert them automatically. VLC can also batch convert via its command line interface.',
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Convert your GameChanger .ts files to MP4 format for free using VLC, HandBrake, or online tools."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>Why Convert TS to MP4?</SectionHeading>
        <p className="text-gray-600 mb-6">
          First, you need to{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            download your GameChanger videos
          </Link>
          . When you download them with ClipKeeper, they come as .ts (Transport Stream) files.
          While .ts files{' '}
          <Link href="/blog/play-ts-file-mac-windows" className="text-green-600 hover:underline">
            play fine on most devices
          </Link>
          , you might need MP4 for:
        </p>

        <FeatureList
          features={[
            'Uploading to Instagram, TikTok, or YouTube',
            'Editing in some video software',
            'Sharing with family who have older devices',
            'Using with web-based editing tools',
          ]}
        />
        <p className="text-gray-600 mb-6">
          Planning to{' '}
          <Link href="/blog/share-gamechanger-to-instagram-tiktok" className="text-green-600 hover:underline">
            share clips on Instagram or TikTok
          </Link>
          ? Converting to MP4 first gives you the best compatibility.
        </p>

        <p className="text-gray-600 mt-6 mb-6">
          The good news: converting is free and only takes a minute or two per file.
        </p>

        <SectionHeading number={2}>Convert TS to MP4 with VLC (Recommended)</SectionHeading>
        <p className="text-gray-600 mb-6">
          VLC is free, available on Mac and Windows, and handles conversion perfectly.
          If you don&apos;t have it,{' '}
          <a
            href="https://www.videolan.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            download from videolan.org
            <ExternalLink className="w-3 h-3 inline ml-1" />
          </a>
          .
        </p>

        <StepCard icon={Monitor} title="Step 1: Open VLC Convert Dialog">
          <p className="mb-3">
            <strong>Windows:</strong> Open VLC → Media → Convert/Save (or press Ctrl+R)
          </p>
          <p>
            <strong>Mac:</strong> Open VLC → File → Convert/Stream
          </p>
        </StepCard>

        <StepCard icon={Download} title="Step 2: Add Your .TS File">
          <p>
            Click the &quot;Add&quot; button and select the .ts file you want to convert.
            You can add multiple files to batch convert.
          </p>
        </StepCard>

        <StepCard icon={RefreshCw} title="Step 3: Choose Output Settings">
          <p className="mb-3">
            <strong>Windows:</strong> Click &quot;Convert/Save&quot;. In the Profile dropdown,
            select &quot;Video - H.264 + MP3 (MP4)&quot;. Click Browse to choose where to save.
          </p>
          <p>
            <strong>Mac:</strong> Choose &quot;File&quot; as the destination, select &quot;H.264 + MP3 (MP4)&quot;
            profile, then click &quot;Save as File&quot; and choose location.
          </p>
        </StepCard>

        <StepCard icon={Download} title="Step 4: Start Converting">
          <p>
            Click &quot;Start&quot; (Windows) or &quot;Save&quot; (Mac). VLC will convert the file.
            A progress bar shows the conversion status. The new MP4 will appear at your chosen location.
          </p>
        </StepCard>

        <SectionHeading number={3}>Convert TS to MP4 with HandBrake (Batch)</SectionHeading>
        <p className="text-gray-600 mb-6">
          HandBrake is a free, open-source video converter that&apos;s great for converting
          multiple files at once. Download from{' '}
          <a
            href="https://handbrake.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            handbrake.fr
            <ExternalLink className="w-3 h-3 inline ml-1" />
          </a>
          .
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">HandBrake Quick Steps:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Open HandBrake and drag your .ts file onto the window</li>
            <li>Select &quot;Fast 1080p30&quot; preset (or your preferred quality)</li>
            <li>Click &quot;Browse&quot; to set the save location</li>
            <li>Click &quot;Start Encode&quot;</li>
          </ol>
          <p className="text-sm text-gray-500 mt-3">
            For batches: Use &quot;Add to Queue&quot; to add multiple files, then &quot;Start Queue&quot;.
          </p>
        </div>

        <SectionHeading number={4}>Method 3: Online Converters (No Software)</SectionHeading>
        <p className="text-gray-600 mb-6">
          If you don&apos;t want to install software, online converters work for small files:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-gray-900">Popular Online Tools:</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li><strong>CloudConvert:</strong> cloudconvert.com (reliable, 25 free conversions/day)</li>
            <li><strong>Convertio:</strong> convertio.co (easy to use, 100MB limit on free)</li>
            <li><strong>FreeConvert:</strong> freeconvert.com (up to 1GB free)</li>
          </ul>
          <p className="text-sm text-yellow-600 mt-3">
            Note: Online tools require uploading your video. For privacy, desktop tools like VLC are better.
          </p>
        </div>

        <SectionHeading number={5}>Tips for Best Quality</SectionHeading>

        <FeatureList
          title="Quality Settings:"
          features={[
            'Use H.264 codec for best compatibility',
            'Keep resolution at 1080p (same as source)',
            'Use a bitrate of 5-10 Mbps for sports footage',
            "Don't upscale - keep original dimensions",
            'AAC audio codec works everywhere',
          ]}
        />

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Does converting reduce quality?
        </h3>
        <p className="text-gray-600 mb-4">
          Technically yes - any re-encoding involves some quality loss. But with proper
          settings (H.264, high bitrate), the difference is invisible to the human eye.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          How long does conversion take?
        </h3>
        <p className="text-gray-600 mb-4">
          A typical 30-second clip takes about 10-30 seconds to convert, depending on your
          computer&apos;s speed. Longer videos take proportionally longer.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I convert on my phone?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes, but it&apos;s easier on desktop. If you must use mobile, VLC for iOS/Android
          can convert files, or use an online converter.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Should I keep the original .ts file?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes, at least until you confirm the MP4 works. The .ts is the highest quality
          original. Once you verify the MP4 is good, you can delete the .ts to save space.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I batch convert multiple files?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes! HandBrake is best for this - add all files to a queue and convert them
          overnight. VLC can also batch convert via its command line interface.
        </p>

        <CTASection
          title="First, Get Your Clips"
          description="Before you can convert, you need to download your GameChanger videos. ClipKeeper makes it easy."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
