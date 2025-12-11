import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Chrome, MousePointer, Video, Target, Shield } from 'lucide-react';
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

const SLUG = 'download-gamechanger-soccer-clips';

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
        name="How to Download GameChanger Soccer Videos"
        description="Download soccer video clips from GameChanger using the ClipKeeper Chrome extension"
        steps={[
          { name: 'Install ClipKeeper', text: 'Install the free ClipKeeper Chrome extension from the Chrome Web Store' },
          { name: 'Open GameChanger', text: 'Go to web.gc.com and log into your GameChanger account' },
          { name: 'Find Your Soccer Game', text: 'Navigate to your soccer team and select the game with clips you want' },
          { name: 'Download Clips', text: 'Click the green download button on any soccer clip to save it to your computer' },
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
            question: 'Does GameChanger have video for soccer?',
            answer: 'Yes! GameChanger supports soccer with automatic video clips for goals, assists, saves, and other key plays. If your team uses GameChanger with video enabled, all plays are recorded.',
          },
          {
            question: 'Are soccer video clips different from baseball clips?',
            answer: 'Soccer clips tend to be slightly longer since the sport has continuous play rather than discrete pitches. The download process is identical - just click the download button.',
          },
          {
            question: 'Can I use GameChanger soccer clips for club recruiting?',
            answer: 'Absolutely! Download your best clips with ClipKeeper and create a highlight reel for ECNL, GA, MLS NEXT, or college coaches.',
          },
          {
            question: 'Does ClipKeeper work for futsal or indoor soccer?',
            answer: 'ClipKeeper works with any video on GameChanger, including futsal and indoor soccer if your league uses the platform.',
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Soccer season never really ends. Save those goals, assists, and incredible saves."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>Soccer Never Stops</SectionHeading>
        <p className="text-gray-600 mb-6">
          Unlike seasonal sports, soccer runs year-round. Fall outdoor, spring outdoor,
          winter futsal, summer tournaments - your kid&apos;s soccer highlights are constantly
          piling up on GameChanger.
        </p>
        <p className="text-gray-600 mb-6">
          That&apos;s a lot of goals, assists, and saves to keep track of. And just like
          with{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            all GameChanger videos
          </Link>
          , there&apos;s no built-in way to download them.
        </p>

        <SectionHeading number={2}>GameChanger for Soccer: What Gets Clipped</SectionHeading>
        <p className="text-gray-600 mb-6">
          GameChanger automatically creates video clips for every recorded stat. Soccer
          clips capture continuous play, so they tend to be a bit longer than baseball&apos;s
          pitch-by-pitch clips.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              Offensive Plays
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Goals scored</li>
              <li>Assists</li>
              <li>Shots on goal</li>
              <li>Corner kicks</li>
              <li>Penalty kicks</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              Defensive Plays
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Goalkeeper saves</li>
              <li>Clean sheet contributions</li>
              <li>Tackles won</li>
              <li>Clearances</li>
              <li>Blocked shots</li>
            </ul>
          </div>
        </div>

        <SectionHeading number={3}>Step-by-Step: Download Soccer Clips</SectionHeading>

        <StepCard icon={Chrome} title="Step 1: Install ClipKeeper">
          <p>
            Install the free ClipKeeper extension from the Chrome Web Store.
            It works with all GameChanger sports - soccer, basketball, baseball, and more.
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
            and log in. Navigate to your soccer team&apos;s page.
          </p>
        </StepCard>

        <StepCard icon={Video} title="Step 3: Find Your Soccer Game">
          <p>
            Select the game you want clips from. Open the video section to see all
            automatically generated clips - goals, saves, assists, and more.
          </p>
        </StepCard>

        <StepCard icon={Download} title="Step 4: Download Clips">
          <p>
            Click the green download button on any clip to save it. With ClipKeeper Pro,
            batch download all clips from a match with one click.
          </p>
        </StepCard>

        <SectionHeading number={4}>Building a Soccer Highlight Reel</SectionHeading>
        <p className="text-gray-600 mb-6">
          Club soccer recruiting starts earlier than ever. ECNL, GA, MLS NEXT, and other
          elite programs want to see video. Having your own downloaded clips makes it easy
          to create recruiting packages.
        </p>

        <FeatureList
          title="Soccer Recruiting Video Tips:"
          features={[
            'Lead with your best goal or biggest play',
            'Show both feet (if applicable)',
            'Include defensive work for non-forwards',
            'Goalkeepers: show saves, distribution, and positioning',
            'Keep the total video under 3-4 minutes',
          ]}
        />

        <p className="text-gray-600 mb-6">
          After downloading clips, you can edit them together with free tools. See our guide on the{' '}
          <Link href="/blog/sports-highlight-reel-maker" className="text-green-600 hover:underline">
            best sports highlight reel makers
          </Link>
          .
        </p>

        <SectionHeading number={5}>Converting Soccer Clips for Coaches</SectionHeading>
        <p className="text-gray-600 mb-6">
          College and club coaches prefer MP4 format. GameChanger downloads as .ts files,
          which are high quality but less universal.
        </p>
        <p className="text-gray-600 mb-6">
          Converting is easy - see our guide on{' '}
          <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
            how to convert TS to MP4
          </Link>
          . Once converted, upload to YouTube (unlisted) and share the link with coaches.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Does my soccer league need to use GameChanger?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes - ClipKeeper works by adding a download button to GameChanger. If your league
          uses a different platform like SidelineHD, the clips won&apos;t be in GameChanger.
          Many rec leagues and travel clubs use GameChanger for scoring and video.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Are soccer clips longer than other sports?
        </h3>
        <p className="text-gray-600 mb-4">
          Soccer clips can be slightly longer since the sport has continuous play. A goal clip
          might include the buildup leading to the shot. This is actually great for recruiting
          videos since it shows more context.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I download clips from multiple seasons?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes! As long as the clips are still available on GameChanger, you can download them.
          We recommend downloading regularly so you don&apos;t lose access if GameChanger
          removes older content.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          How do I share soccer clips with college coaches?
        </h3>
        <p className="text-gray-600 mb-4">
          Download your best clips, convert to MP4 if needed, then upload to YouTube as an
          unlisted video. Send the link directly to coaches via email. Keep your highlight
          reel concise - coaches won&apos;t watch a 20-minute video.
        </p>

        <CTASection
          title="Every Goal Deserves to Be Saved"
          description="Download your soccer highlights and keep them forever. From rec league to club, every memory matters."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
