import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Share2, Instagram, Smartphone } from 'lucide-react';
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

const SLUG = 'share-gamechanger-to-instagram-tiktok';

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
        name="How to Share GameChanger Videos on Social Media"
        description="Post GameChanger clips to Instagram Reels and TikTok"
        steps={[
          { name: 'Download Video', text: 'Use ClipKeeper to download the clip from GameChanger' },
          { name: 'Convert to MP4', text: 'Convert the .ts file to MP4 if needed for your app' },
          { name: 'Transfer to Phone', text: 'AirDrop or use cloud storage to get file on phone' },
          { name: 'Post to Social', text: 'Upload directly to Instagram Reels or TikTok' },
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
            question: 'Can I post GameChanger videos directly to Instagram?',
            answer: 'No, GameChanger only lets you share links, not actual video files. You need to download the video with ClipKeeper first, then upload it natively to Instagram.',
          },
          {
            question: 'What video format does TikTok need?',
            answer: 'TikTok works best with MP4 files in 9:16 vertical format. GameChanger videos are horizontal, so you may want to crop or add borders using an editor like CapCut.',
          },
          {
            question: 'How do I add music to GameChanger clips for social media?',
            answer: "Download your clip with ClipKeeper, then add music using Instagram or TikTok's built-in music library when you create your post. Or use CapCut to add music before uploading.",
          },
          {
            question: "What's the best aspect ratio for Instagram Reels?",
            answer: '9:16 vertical (1080x1920) is best for Reels. GameChanger videos are horizontal, so use CapCut or similar to crop, add borders, or convert to vertical format.',
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Show off your kid's highlights! Here's how to get GameChanger clips onto Instagram and TikTok."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>The Problem: GameChanger Has No Share Button</SectionHeading>
        <p className="text-gray-600 mb-6">
          Your kid just made an incredible play. You want to share it with family, friends,
          and maybe the whole world on social media. But GameChanger doesn&apos;t have a
          &quot;share to Instagram&quot; or &quot;share to TikTok&quot; button.
        </p>
        <p className="text-gray-600 mb-6">
          You can share a link to the video, but that only works if someone has a GameChanger
          account. Most people don&apos;t - and Instagram/TikTok need actual video files.
        </p>

        <SectionHeading number={2}>The Solution: Download, Convert, Post</SectionHeading>
        <p className="text-gray-600 mb-6">
          The workflow is simple: download the video from GameChanger, get it on your phone,
          and upload to Instagram or TikTok. Here&apos;s exactly how.
        </p>

        <StepCard icon={Download} title="Step 1: Download the Video">
          <p>
            First,{' '}
            <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
              download your GameChanger video
            </Link>{' '}
            using the ClipKeeper Chrome extension (it&apos;s free). The video saves to your
            computer as a .ts file.
          </p>
        </StepCard>

        <StepCard icon={Share2} title="Step 2: Convert to MP4 (If Needed)">
          <p>
            Some apps handle .ts files fine, but Instagram and TikTok prefer MP4.
            Use VLC (free) to convert:{' '}
            <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
              see our conversion guide
            </Link>
            . It takes about 30 seconds per clip.
          </p>
        </StepCard>

        <StepCard icon={Smartphone} title="Step 3: Get It On Your Phone">
          <p className="mb-3">
            <strong>Mac users:</strong> AirDrop the file directly to your iPhone.
          </p>
          <p className="mb-3">
            <strong>Windows/Android:</strong> Upload to Google Drive, Dropbox, or email it to yourself.
            Then download on your phone.
          </p>
          <p>
            Learn more in our guide:{' '}
            <Link href="/blog/save-gamechanger-clips-to-iphone" className="text-green-600 hover:underline">
              Save GameChanger clips to iPhone
            </Link>
          </p>
        </StepCard>

        <StepCard icon={Instagram} title="Step 4: Post to Instagram/TikTok">
          <p>
            Open Instagram or TikTok and create a new post. Select the video from your camera roll.
            Add captions, hashtags, music, and filters as desired. Hit post!
          </p>
        </StepCard>

        <SectionHeading number={3}>Tips for Sports Clips on Social Media</SectionHeading>

        <FeatureList
          title="Get More Views:"
          features={[
            'Trim to the key moment (15-30 seconds max)',
            'Add trending audio for algorithm boost',
            'Use hashtags like #youthbaseball #highlights #futurestar',
            'Post during peak hours (evenings, weekends)',
            'Tag the team and league accounts',
            'Add captions for accessibility',
          ]}
        />

        <div className="bg-yellow-50 rounded-xl p-6 my-8 border border-yellow-200">
          <h3 className="font-semibold text-gray-900 mb-3">Best Formats for Social:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="font-medium">Instagram Reels:</span>
              9:16 vertical, under 90 seconds
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">TikTok:</span>
              9:16 vertical, under 3 minutes
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">Instagram Feed:</span>
              1:1 square or 4:5 vertical
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium">YouTube:</span>
              16:9 horizontal, any length
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-3">
            GameChanger videos are horizontal. For vertical social apps, you may want to
            crop or add borders using{' '}
            <Link href="/blog/sports-highlight-reel-maker" className="text-green-600 hover:underline">
              CapCut or similar editors
            </Link>
            .
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I post directly from GameChanger?
        </h3>
        <p className="text-gray-600 mb-4">
          No, GameChanger only lets you share links, not actual video files.
          You need to download the video first to post it natively on social media.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Will the video quality be good?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes! ClipKeeper downloads the original HD quality from GameChanger.
          Much better than screen recording.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Is it okay to post my kid&apos;s sports clips?
        </h3>
        <p className="text-gray-600 mb-4">
          Absolutely. These are your family videos. Just be mindful that other kids might
          appear in team clips - use good judgment or ask other parents first.
        </p>

        <CTASection
          title="Ready to Go Viral?"
          description="Download your GameChanger highlights and share them with the world."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
