import type { Metadata } from 'next';
import Link from 'next/link';
import { Smartphone, Monitor, Share2 } from 'lucide-react';
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

const SLUG = 'save-gamechanger-clips-to-iphone';

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
        name="How to Save GameChanger Clips to iPhone"
        description="Transfer GameChanger video clips to your iPhone camera roll"
        steps={[
          { name: 'Download to Computer', text: 'Use ClipKeeper to download videos to your Mac or PC' },
          { name: 'AirDrop to iPhone', text: 'On Mac, right-click and AirDrop to your iPhone' },
          { name: 'Save to Camera Roll', text: 'Accept the AirDrop and save to your Photos app' },
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
            question: 'Can I save GameChanger videos directly to my iPhone?',
            answer: "Chrome extensions don't work on mobile browsers, so you need to download on a desktop computer first, then transfer via AirDrop, iCloud, or email. It only takes an extra minute.",
          },
          {
            question: 'Do I need a computer to download GameChanger clips?',
            answer: 'Yes, ClipKeeper is a Chrome extension that requires a desktop browser. Once downloaded, you can easily transfer files to your iPhone via AirDrop (Mac) or cloud storage (Windows).',
          },
          {
            question: 'What format are GameChanger videos when saved to iPhone?',
            answer: 'Videos download as .ts files, which iPhones can play natively. If you need MP4 format for certain apps, you can convert them using free tools like VLC.',
          },
          {
            question: 'Can I share saved GameChanger clips via iMessage or text?',
            answer: 'Yes! Once the video is in your Camera Roll, you can share it anywhere - iMessage, text, email, Instagram, TikTok, or any other app.',
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Get your GameChanger sports clips on your iPhone so you can share them anywhere."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>The Problem: GameChanger Videos Stuck on the Web</SectionHeading>
        <p className="text-gray-600 mb-6">
          You want to show grandma that amazing catch your kid made. Or post it to Instagram.
          But GameChanger doesn&apos;t have a &quot;save to camera roll&quot; button. The solution?
          First{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            download your GameChanger videos
          </Link>{' '}
          to your computer, then transfer them to your iPhone.
        </p>
        <p className="text-gray-600 mb-6">
          Even if you could download them, there&apos;s no direct way to get GameChanger videos
          onto your iPhone from their mobile app.
        </p>

        <SectionHeading number={2}>The Hard Way: Screen Recording</SectionHeading>
        <p className="text-gray-600 mb-6">
          Some parents try screen recording on their iPhone. But the quality is terrible,
          you catch notifications popping up, and the audio often sounds echoey from the
          phone speaker.
        </p>

        <SectionHeading number={3}>The Easy Way: Download First, Then Transfer</SectionHeading>
        <p className="text-gray-600 mb-6">
          The trick is to download the original HD video to your computer first, then
          transfer it to your iPhone. This preserves the full quality.
        </p>

        <FeatureList
          title="Why this method works best:"
          features={[
            'Original HD quality preserved',
            'No screen recording artifacts',
            'Clean audio without echo',
            'Files ready for editing or sharing',
          ]}
        />

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Step-by-Step Guide
        </h2>

        <StepCard icon={Monitor} title="Step 1: Download to Your Computer">
          <p>
            First,{' '}
            <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
              download your GameChanger videos
            </Link>{' '}
            using the ClipKeeper Chrome extension. Videos save as .ts files in your Downloads folder.
          </p>
        </StepCard>

        <StepCard icon={Share2} title="Step 2: Transfer to iPhone">
          <p className="mb-3">
            <strong>On Mac:</strong> Right-click the video file and select &quot;Share &gt; AirDrop&quot;.
            Choose your iPhone from the list.
          </p>
          <p>
            <strong>On Windows:</strong> Use iCloud Drive, Dropbox, or email the file to yourself.
            Open it on your iPhone and tap &quot;Save to Files&quot; or &quot;Save Video&quot;.
          </p>
        </StepCard>

        <StepCard icon={Smartphone} title="Step 3: Save to Camera Roll">
          <p>
            Once the video is on your iPhone, open it in the Files app and tap the share button.
            Select &quot;Save Video&quot; to add it to your Camera Roll. Now it&apos;s ready to{' '}
            <Link href="/blog/share-gamechanger-to-instagram-tiktok" className="text-green-600 hover:underline">
              share on Instagram, TikTok
            </Link>
            , or anywhere!
          </p>
        </StepCard>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I download directly to my iPhone?
        </h3>
        <p className="text-gray-600 mb-4">
          Chrome extensions don&apos;t work on mobile browsers. You need to download on a
          desktop computer first, then transfer. It only takes an extra minute.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Will the video play on my iPhone?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes! iPhones can play .ts files natively. If you have any issues, VLC for iOS
          (free app) plays everything.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What if I need MP4 format?
        </h3>
        <p className="text-gray-600 mb-4">
          Check out our guide on{' '}
          <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
            how to convert .ts files to MP4
          </Link>
          . It&apos;s free and easy.
        </p>

        <CTASection
          title="Start Saving Your Memories"
          description="Download ClipKeeper free and get your GameChanger clips on your iPhone today."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
