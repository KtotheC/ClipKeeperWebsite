import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Chrome, MousePointer, FolderCheck, Trophy, Users, Video } from 'lucide-react';
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

const SLUG = 'download-gamechanger-basketball-clips';

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
        name="How to Download GameChanger Basketball Videos"
        description="Download basketball video clips from GameChanger using the ClipKeeper Chrome extension"
        steps={[
          { name: 'Install ClipKeeper', text: 'Install the free ClipKeeper Chrome extension from the Chrome Web Store' },
          { name: 'Open GameChanger', text: 'Go to web.gc.com and log into your GameChanger account' },
          { name: 'Find Your Basketball Game', text: 'Navigate to your basketball team and select the game with clips you want' },
          { name: 'Download Clips', text: 'Click the green download button on any basketball clip to save it to your computer' },
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
            question: 'Does ClipKeeper work for GameChanger basketball videos?',
            answer: 'Yes! ClipKeeper works for all sports on GameChanger including basketball, baseball, softball, soccer, volleyball, and more. The download process is identical.',
          },
          {
            question: 'Can I download an entire basketball game from GameChanger?',
            answer: 'With ClipKeeper Pro ($29/year), you can batch download all clips from a basketball game with one click. The free version allows 5 downloads per week.',
          },
          {
            question: 'How do I download basketball highlights for a recruiting video?',
            answer: 'Download your best clips with ClipKeeper, then use a free video editor like CapCut, iMovie, or DaVinci Resolve to arrange them into a highlight reel for college coaches.',
          },
          {
            question: 'Does GameChanger have video for youth basketball leagues?',
            answer: 'Yes, if your basketball team uses GameChanger with video enabled, all plays (points, assists, rebounds, etc.) are automatically clipped and available for download.',
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Basketball season is here. Don't lose those dunks, three-pointers, and game-winning shots."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>Basketball Season is Here</SectionHeading>
        <p className="text-gray-600 mb-6">
          It&apos;s basketball season, and GameChanger is capturing every made shot, assist,
          steal, and block. Your kid&apos;s first three-pointer, their game-winning free throw,
          that incredible defensive play - it&apos;s all on video.
        </p>
        <p className="text-gray-600 mb-6">
          But just like{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            all GameChanger videos
          </Link>
          , there&apos;s no download button. These memories are stuck on their platform unless
          you know the workaround.
        </p>

        <SectionHeading number={2}>Why Basketball Parents Need Downloads</SectionHeading>
        <p className="text-gray-600 mb-6">
          Basketball season flies by. Between regular season, tournaments, and AAU/travel ball,
          you could have 30+ games worth of video clips in just a few months.
        </p>

        <FeatureList
          title="Why Download Your Basketball Clips:"
          features={[
            'Create end-of-season highlight reels for your player',
            'Share dunks and big plays with grandparents',
            'Build recruiting videos for high school and college coaches',
            'Backup memories before GameChanger subscription ends',
            'Post highlights to Instagram and TikTok',
          ]}
        />

        <p className="text-gray-600 mb-6">
          AAU and travel ball parents especially need downloads for recruiting. Learn more about{' '}
          <Link href="/blog/basketball-recruiting-video-guide" className="text-green-600 hover:underline">
            how to make a basketball recruiting video
          </Link>
          .
        </p>

        <SectionHeading number={3}>Step-by-Step: Download Basketball Clips</SectionHeading>

        <StepCard icon={Chrome} title="Step 1: Install ClipKeeper">
          <p>
            Install the free ClipKeeper extension from the Chrome Web Store.
            It works with all GameChanger sports, including basketball.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mt-4 hover:bg-green-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Install ClipKeeper Free
          </a>
        </StepCard>

        <StepCard icon={MousePointer} title="Step 2: Open GameChanger">
          <p>
            Go to{' '}
            <a
              href="https://web.gc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              web.gc.com
            </a>{' '}
            and log in. Navigate to your basketball team&apos;s page.
          </p>
        </StepCard>

        <StepCard icon={Video} title="Step 3: Find Your Basketball Game">
          <p>
            Select the game you want clips from. Click on the &quot;Video&quot; or &quot;Clips&quot;
            section to see all the automatically generated highlights.
          </p>
        </StepCard>

        <StepCard icon={Download} title="Step 4: Click Download">
          <p>
            You&apos;ll see a green download button on each clip card. Click it and the video
            saves to your computer in seconds. With Pro, you can batch download the entire game.
          </p>
        </StepCard>

        <SectionHeading number={4}>Types of Basketball Clips You Can Download</SectionHeading>
        <p className="text-gray-600 mb-6">
          GameChanger automatically creates clips for every recorded stat. Here&apos;s what
          you can download from basketball games:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-orange-500" />
              Offensive Plays
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Made 2-pointers and 3-pointers</li>
              <li>Free throws</li>
              <li>Assists</li>
              <li>Dunks and layups</li>
              <li>And-one plays</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              Defensive Plays
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Rebounds (offensive & defensive)</li>
              <li>Steals</li>
              <li>Blocks</li>
              <li>Charges drawn</li>
              <li>Defensive stops</li>
            </ul>
          </div>
        </div>

        <SectionHeading number={5}>What to Do With Your Basketball Clips</SectionHeading>
        <p className="text-gray-600 mb-6">
          Once you&apos;ve downloaded your clips, the possibilities are endless:
        </p>

        <FeatureList
          features={[
            'Create highlight reels for end-of-season banquets',
            'Share with family via text, email, or cloud storage',
            'Post to social media (Instagram Reels, TikTok)',
            'Build recruiting packages for high school coaches',
            'Archive to Google Drive or iCloud for safekeeping',
          ]}
        />

        <p className="text-gray-600 mb-6">
          Want to share clips on social media? Check out our guide on{' '}
          <Link href="/blog/share-gamechanger-to-instagram-tiktok" className="text-green-600 hover:underline">
            sharing GameChanger videos to Instagram and TikTok
          </Link>
          .
        </p>

        <p className="text-gray-600 mb-6">
          Need to edit your clips? See our roundup of the{' '}
          <Link href="/blog/sports-highlight-reel-maker" className="text-green-600 hover:underline">
            best free sports highlight reel makers
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Do basketball clips work the same as baseball?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes! The download process is identical for all sports. Install ClipKeeper, go to
          GameChanger, and click download on any clip. Basketball clips tend to be slightly
          longer since the sport has more continuous action.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I download AAU or travel ball clips?
        </h3>
        <p className="text-gray-600 mb-4">
          Absolutely. If your AAU or travel team uses GameChanger to track games, all those
          clips are downloadable with ClipKeeper. Many AAU programs use GameChanger extensively.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          How do I share basketball clips with coaches?
        </h3>
        <p className="text-gray-600 mb-4">
          Download your best clips, then either email them directly or upload to YouTube/Vimeo
          and share the link. For recruiting, coaches prefer YouTube links they can watch easily.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What file format are basketball clips?
        </h3>
        <p className="text-gray-600 mb-4">
          Like all GameChanger videos, basketball clips download as .ts files. These play
          in VLC and most video players. Need MP4? See our{' '}
          <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
            TS to MP4 conversion guide
          </Link>
          .
        </p>

        <CTASection
          title="Don't Miss a Single Highlight"
          description="Download every dunk, three-pointer, and game-winning shot. Keep your basketball memories forever."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
