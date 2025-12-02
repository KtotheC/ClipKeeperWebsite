import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Video, ListChecks, Star } from 'lucide-react';
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

const SLUG = 'baseball-recruiting-video-tips';

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
        name="How to Make a Baseball Recruiting Video"
        description="Create a standout recruiting video using GameChanger clips"
        steps={[
          { name: 'Download Your Best Clips', text: 'Use ClipKeeper to download your top plays from GameChanger' },
          { name: 'Select Your Highlights', text: 'Choose 8-12 clips showing different skills' },
          { name: 'Edit Together', text: 'Use a free editor like CapCut or iMovie to combine clips' },
          { name: 'Add Info Overlay', text: 'Include name, position, grad year, and contact info' },
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
            question: 'When should my kid start making baseball recruiting videos?',
            answer: 'Most serious recruiting starts freshman/sophomore year of high school for baseball. Start building clips earlier so you have options. Even 12U travel ball clips can show natural talent.',
          },
          {
            question: 'Do I need professional video editing for a recruiting video?',
            answer: "No! Coaches care about the plays, not fancy transitions. A simple, clean edit with good clips is more effective than an over-produced video with mediocre content.",
          },
          {
            question: 'What format should I export my baseball recruiting video?',
            answer: 'Export as MP4 at 1080p resolution. This works everywhere - YouTube, email, and recruiting platforms like NCSA.',
          },
          {
            question: 'How long should a baseball recruiting video be?',
            answer: "Keep it under 3-4 minutes total with 8-12 clips showing variety. Lead with your best clip to grab attention. Quality over quantity - only include your best plays.",
          },
          {
            question: 'What clips should I include in a baseball recruiting video?',
            answer: 'Include at-bats showing good swing mechanics, hard-hit balls, defense plays at your primary position, arm strength throws, and base running clips. Show variety in your skills.',
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Help your athlete get recruited with a professional-quality highlight video built from GameChanger clips."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>Why Baseball Recruiting Videos Matter</SectionHeading>
        <p className="text-gray-600 mb-6">
          College coaches don&apos;t have time to attend every travel ball game. They rely
          on recruiting videos to scout potential players. Before you can build one, you&apos;ll need to{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            download your GameChanger clips
          </Link>
          . A well-made highlight reel can be the difference between getting noticed and getting overlooked.
        </p>
        <p className="text-gray-600 mb-6">
          The good news? You don&apos;t need professional videographers. GameChanger already
          captures your kid&apos;s best moments - you just need to compile them.
        </p>

        <SectionHeading number={2}>The Challenge: Getting Your Videos</SectionHeading>
        <p className="text-gray-600 mb-6">
          GameChanger has all your game footage, but they don&apos;t let you download it.
          That makes it impossible to create a recruiting video unless you screen record
          everything (which looks terrible).
        </p>
        <p className="text-gray-600 mb-6">
          <strong>The solution:</strong> Use{' '}
          <Link href="/" className="text-green-600 hover:underline">
            ClipKeeper
          </Link>{' '}
          to download your GameChanger clips in original quality, then edit them
          into a highlight reel.
        </p>

        <SectionHeading number={3}>What College Coaches Want in a Recruiting Video</SectionHeading>

        <FeatureList
          title="Must-Have Clips for Baseball/Softball:"
          features={[
            'At-bats showing good swing mechanics',
            'Hard-hit balls (line drives, gap shots)',
            'Defense plays at your primary position',
            'Arm strength (throws from outfield or infield)',
            'Base running / speed clips',
            'Pitching highlights if applicable',
          ]}
        />

        <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-100">
          <h3 className="font-semibold text-gray-900 mb-3">Pro Tips from College Coaches:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Keep it under 3-4 minutes total
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Lead with your best clip to grab attention
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Include 8-12 clips showing variety
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Show your name, position, grad year, and contact clearly
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Quality over quantity - only your best plays
            </li>
          </ul>
        </div>

        <SectionHeading number={4}>How to Make a Baseball Recruiting Video: Step-by-Step</SectionHeading>

        <StepCard icon={Download} title="Step 1: Download Your Best Clips">
          <p>
            First,{' '}
            <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
              install ClipKeeper and download your GameChanger clips
            </Link>
            . Go through games from the past 1-2 seasons and download every standout play.
            It&apos;s better to have too many options than too few.
          </p>
        </StepCard>

        <StepCard icon={ListChecks} title="Step 2: Organize and Select">
          <p>
            Create folders by skill type (hitting, fielding, pitching, etc.).
            Pick your 8-12 best clips. Be ruthless - only include plays that make
            coaches say &quot;wow.&quot;
          </p>
        </StepCard>

        <StepCard icon={Video} title="Step 3: Edit Your Reel">
          <p className="mb-3">
            Use a free video editor to combine your clips:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>CapCut</strong> (free, mobile & desktop)</li>
            <li><strong>iMovie</strong> (free on Mac/iPhone)</li>
            <li><strong>DaVinci Resolve</strong> (free, professional-grade)</li>
          </ul>
          <p className="mt-3">
            Check our guide on{' '}
            <Link href="/blog/sports-highlight-reel-maker" className="text-green-600 hover:underline">
              best tools for sports highlight reels
            </Link>
            .
          </p>
        </StepCard>

        <StepCard icon={Star} title="Step 4: Add Your Info">
          <p>
            Include a title card at the start and end with: Name, Position(s), Graduation Year,
            Height/Weight, School, Email, Phone. Make it easy for coaches to contact you.
          </p>
        </StepCard>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          When should my kid start making recruiting videos?
        </h3>
        <p className="text-gray-600 mb-4">
          Most serious recruiting starts freshman/sophomore year of high school for baseball.
          Start building clips earlier so you have options. Even 12U travel ball clips can
          show natural talent.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Do I need professional editing?
        </h3>
        <p className="text-gray-600 mb-4">
          No! Coaches care about the plays, not fancy transitions. A simple, clean edit
          with good clips is more effective than an over-produced video with mediocre content.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What format should I export?
        </h3>
        <p className="text-gray-600 mb-4">
          Export as MP4 at 1080p resolution. This works everywhere - YouTube, email,
          and recruiting platforms like NCSA. Need to{' '}
          <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
            convert your .ts files to MP4
          </Link>
          ? It only takes a few seconds with free tools.
        </p>

        <CTASection
          title="Get Your GameChanger Clips"
          description="Download all your athlete's highlights and start building that recruiting video today."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
