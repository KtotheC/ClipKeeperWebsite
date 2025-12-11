import type { Metadata } from 'next';
import { Download, Chrome, MousePointer, FolderCheck, ExternalLink } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog/posts';
import { generateBlogMetadata } from '@/lib/blog/utils';
import {
  BlogLayout,
  StepCard,
  FeatureList,
  CTASection,
  SectionHeading,
  YouTubeEmbed,
  RelatedPosts,
} from '@/components/blog';
import { ArticleSchema, HowToSchema, BreadcrumbSchema, FAQPageSchema, VideoSchema } from '@/components/StructuredData';
import Link from 'next/link';

const SLUG = 'how-to-download-gamechanger-video';

export const metadata: Metadata = generateBlogMetadata(SLUG);

export default function BlogPost() {
  const post = getPostBySlug(SLUG)!;
  const relatedPosts = getRelatedPosts(SLUG, 3);

  return (
    <>
      {/* Structured Data */}
      <ArticleSchema
        title={post.title}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        slug={post.slug}
      />
      <HowToSchema
        name="How to Download GameChanger Videos"
        description="Download GameChanger video clips using the ClipKeeper Chrome extension"
        steps={[
          { name: 'Install ClipKeeper', text: 'Go to the Chrome Web Store and install the ClipKeeper extension' },
          { name: 'Go to GameChanger', text: 'Navigate to web.gc.com and log in with your GameChanger account' },
          { name: 'Click Download', text: 'Click the green download button on any video card to save it' },
          { name: 'Enjoy Your Videos', text: 'Your videos are saved as .ts files in your Downloads folder' },
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
            question: 'Is it legal to download GameChanger videos?',
            answer: "Yes. You're downloading videos of your own children that you already have viewing access to through your GameChanger subscription. ClipKeeper simply helps you exercise your right to backup your personal family memories.",
          },
          {
            question: 'Why are GameChanger videos downloaded as .ts files?',
            answer: "Chrome's security policies prevent in-browser video conversion. The .ts (Transport Stream) format is actually GameChanger's original format - you're getting the highest quality video. Most players like VLC and Windows Media Player play .ts files natively.",
          },
          {
            question: 'Can I download all my GameChanger videos at once?',
            answer: 'The free version lets you download 5 clips per week. ClipKeeper Pro ($29/year) includes unlimited downloads and batch download of entire games with one click.',
          },
          {
            question: 'How do I convert .ts files to MP4?',
            answer: 'You can convert .ts files to MP4 using free tools like VLC Media Player or HandBrake. The conversion only takes a few seconds per clip.',
          },
        ]}
      />
      <VideoSchema
        name="How to Download GameChanger Videos - Tutorial"
        description="Step-by-step tutorial showing how to download GameChanger video clips using the ClipKeeper Chrome extension. Save your kids' sports highlights forever."
        thumbnailUrl="https://img.youtube.com/vi/X9D9ESPdEnc/maxresdefault.jpg"
        uploadDate="2024-12-01"
        embedUrl="https://www.youtube.com/embed/X9D9ESPdEnc"
        duration="PT3M"
      />

      <BlogLayout
        title={post.title}
        description="Keep your kids' sports highlights forever. Here's the easiest way to download and backup GameChanger video clips."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <YouTubeEmbed videoId="X9D9ESPdEnc" title="How to Download GameChanger Videos - Tutorial" />

        <SectionHeading number={1}>Why You Can&apos;t Download GameChanger Videos</SectionHeading>
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

        <SectionHeading number={2}>How to Download GameChanger Videos with ClipKeeper</SectionHeading>
        <p className="text-gray-600 mb-6">
          ClipKeeper is a Chrome extension that adds a download button to every video
          clip on GameChanger. One click, and the video is saved to your computer.
        </p>

        <FeatureList
          title="Why Parents Love ClipKeeper:"
          features={[
            'Videos saved permanently on your computer',
            'Files named automatically (player name, play type, inning)',
            'Share clips with grandparents and coaches',
            'Create highlight reels in any video editor',
          ]}
        />
        <p className="text-gray-600 mb-6">
          Building a{' '}
          <Link href="/blog/baseball-recruiting-video-tips" className="text-green-600 hover:underline">
            baseball recruiting video
          </Link>
          ? Downloaded clips are perfect for creating highlight reels to send to college coaches.
        </p>

        <SectionHeading number={3}>Download GameChanger Videos: Step-by-Step Guide</SectionHeading>

        <StepCard icon={Chrome} title="Step 1: Install ClipKeeper">
          <p>
            Go to the Chrome Web Store and search for &quot;ClipKeeper&quot; or click
            the button below. Click &quot;Add to Chrome&quot; to install. It takes about
            10 seconds.
          </p>
          <a
            href="https://chrome.google.com/webstore/detail/beelllgidjaklbnacknjkghfibfpjhac"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mt-4 hover:bg-green-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Install ClipKeeper Free
          </a>
        </StepCard>

        <StepCard icon={MousePointer} title="Step 2: Go to GameChanger">
          <p>
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
        </StepCard>

        <StepCard icon={Download} title="Step 3: Click Download">
          <p>
            You&apos;ll see a green download button appear on each video card.
            Click it, and the video downloads to your computer in seconds.
            That&apos;s it!
          </p>
        </StepCard>

        <StepCard icon={FolderCheck} title="Step 4: Enjoy Your Videos">
          <p>
            Your videos are saved as .ts files in your Downloads folder. They play
            in VLC, Windows Media Player, or any modern video player. Need MP4 for
            social media? Check our guide on{' '}
            <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
              how to convert .ts to MP4
            </Link>
            .
          </p>
        </StepCard>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">Is this legal?</h3>
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
          the highest quality video. See our guide on{' '}
          <Link href="/blog/play-ts-file-mac-windows" className="text-green-600 hover:underline">
            how to play .ts files on Mac & Windows
          </Link>
          .
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What about batch downloads?
        </h3>
        <p className="text-gray-600 mb-4">
          The free version lets you download 5 clips per week. ClipKeeper Pro ($29/year)
          includes unlimited downloads and batch download of entire games with one click.
        </p>

        <CTASection />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
