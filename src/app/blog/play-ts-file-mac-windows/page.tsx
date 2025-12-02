import type { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, Smartphone, HelpCircle, ExternalLink } from 'lucide-react';
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

const SLUG = 'play-ts-file-mac-windows';

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
      <HowToSchema
        name="How to Play .TS Video Files"
        description="Open and play .ts video files on Mac, Windows, and mobile devices"
        steps={[
          { name: 'Download VLC', text: 'Get VLC Media Player free from videolan.org' },
          { name: 'Open the File', text: 'Right-click the .ts file and select Open With > VLC' },
          { name: 'Watch', text: 'The video plays immediately with full quality' },
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
            question: 'What program opens .ts files on Mac?',
            answer: 'VLC Media Player (free from videolan.org) is the best option for Mac. IINA is another excellent free, native Mac video player that handles .ts files perfectly.',
          },
          {
            question: 'Can Windows Media Player play .ts files?',
            answer: 'Yes, Windows Media Player on Windows 10/11 can play most .ts files. If you have issues, VLC Media Player is a free alternative that plays everything.',
          },
          {
            question: 'Why does GameChanger use .ts format?',
            answer: 'GameChanger uses .ts (Transport Stream) because it is optimized for streaming video over the internet. It handles network interruptions well and is the industry standard for video delivery.',
          },
          {
            question: 'Is .ts better quality than MP4?',
            answer: 'The .ts file from GameChanger is the original, uncompressed video. Converting to MP4 may actually reduce quality slightly (though usually not noticeable). For archival, keep the original .ts files.',
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Downloaded a .ts file and can't play it? Here's everything you need to know about this video format."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>What is a .TS File?</SectionHeading>
        <p className="text-gray-600 mb-6">
          A <strong>.ts file</strong> (MPEG Transport Stream) is a video format commonly used for
          streaming and broadcasting. It&apos;s what services like GameChanger use to deliver
          video - it&apos;s designed to handle interruptions gracefully.
        </p>
        <p className="text-gray-600 mb-6">
          When you{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            download GameChanger videos with ClipKeeper
          </Link>
          , they come as .ts files because that&apos;s the original format. This means you&apos;re
          getting the highest quality without any re-encoding.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            Quick Answer
          </h3>
          <p className="text-gray-700">
            Most modern video players can play .ts files without any conversion.
            If your default player doesn&apos;t work, <strong>VLC Media Player</strong> (free)
            handles .ts files perfectly.
          </p>
        </div>

        <SectionHeading number={2}>How to Play .TS Files on Each Device</SectionHeading>

        <StepCard icon={Monitor} title="Windows">
          <p className="mb-3">
            <strong>Windows Media Player:</strong> Works on Windows 10/11.
            Double-click the file or right-click → &quot;Open with&quot; → Windows Media Player.
          </p>
          <p className="mb-3">
            <strong>VLC (recommended):</strong> Free download from{' '}
            <a
              href="https://www.videolan.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              videolan.org
              <ExternalLink className="w-3 h-3 inline ml-1" />
            </a>
            . Plays everything, including .ts files.
          </p>
          <p>
            <strong>Movies & TV app:</strong> The built-in Windows app also supports .ts files.
          </p>
        </StepCard>

        <StepCard icon={Monitor} title="Mac">
          <p className="mb-3">
            <strong>QuickTime:</strong> May not play all .ts files. If it doesn&apos;t work,
            use VLC instead.
          </p>
          <p className="mb-3">
            <strong>VLC (recommended):</strong> Download from{' '}
            <a
              href="https://www.videolan.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              videolan.org
              <ExternalLink className="w-3 h-3 inline ml-1" />
            </a>
            . Works perfectly with all .ts files.
          </p>
          <p>
            <strong>IINA:</strong> A modern, native Mac video player that handles .ts files beautifully.
            Free from iina.io.
          </p>
        </StepCard>

        <StepCard icon={Smartphone} title="iPhone & iPad">
          <p className="mb-3">
            <strong>VLC for iOS:</strong> Free app on the App Store. Transfer the .ts file
            via AirDrop, Files app, or iTunes, then open with VLC.
          </p>
          <p>
            <strong>Files app:</strong> iOS can sometimes preview .ts files directly.
            If not, use VLC.
          </p>
        </StepCard>

        <StepCard icon={Smartphone} title="Android">
          <p className="mb-3">
            <strong>VLC for Android:</strong> Free on Google Play. Handles .ts files easily.
          </p>
          <p>
            <strong>MX Player:</strong> Another popular free option that plays .ts files.
          </p>
        </StepCard>

        <SectionHeading number={3}>Need to Convert to MP4?</SectionHeading>
        <p className="text-gray-600 mb-6">
          While .ts files play fine on most devices, you might want MP4 for:
        </p>

        <FeatureList
          features={[
            'Uploading to social media (Instagram, TikTok)',
            'Editing in video software that prefers MP4',
            'Sharing with people who have older devices',
            'Using with web-based tools',
          ]}
        />

        <p className="text-gray-600 mt-6 mb-6">
          Converting is easy and free. Check our guide:{' '}
          <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
            How to Convert .TS to MP4
          </Link>
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Why does GameChanger use .ts format?
        </h3>
        <p className="text-gray-600 mb-4">
          GameChanger uses .ts (Transport Stream) because it&apos;s optimized for
          streaming video over the internet. It handles network interruptions well
          and is the industry standard for video delivery.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Is .ts the same quality as MP4?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes! The .ts file from GameChanger is the original, uncompressed video.
          Converting to MP4 may actually reduce quality slightly (though usually not noticeable).
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I just rename .ts to .mp4?
        </h3>
        <p className="text-gray-600 mb-4">
          No, that doesn&apos;t work. The file formats are different internally.
          You need to actually convert the file using VLC, HandBrake, or another tool.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Why is VLC recommended so often?
        </h3>
        <p className="text-gray-600 mb-4">
          VLC is free, open-source, available on every platform, and plays virtually
          any video format including .ts. It&apos;s been the go-to video player for
          over 20 years for good reason.
        </p>

        <CTASection
          title="Download Your GameChanger Clips"
          description="Get ClipKeeper and start downloading your videos today. They'll play on any device with VLC."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
