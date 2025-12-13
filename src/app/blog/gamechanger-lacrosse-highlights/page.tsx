import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Target, Shield, Video, Trophy, Star, CheckCircle } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog/posts';
import { generateBlogMetadata } from '@/lib/blog/utils';
import {
  BlogLayout,
  StepCard,
  CTASection,
  SectionHeading,
  RelatedPosts,
  FeatureList,
} from '@/components/blog';
import { ArticleSchema, BreadcrumbSchema, HowToSchema } from '@/components/StructuredData';
import AuthorBio from '@/components/blog/AuthorBio';
import QuickAnswer from '@/components/blog/QuickAnswer';

const SLUG = 'gamechanger-lacrosse-highlights';

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
        readingTime={post.readingTime}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://getclipkeeper.com' },
          { name: 'Blog', url: 'https://getclipkeeper.com/blog' },
          { name: post.title, url: `https://getclipkeeper.com/blog/${post.slug}` },
        ]}
      />
      <HowToSchema
        name="How to Download GameChanger Lacrosse Clips"
        description="Step-by-step guide to saving lacrosse highlights from GameChanger"
        steps={[
          { name: 'Install ClipKeeper', text: 'Add the free ClipKeeper Chrome extension from the Chrome Web Store.' },
          { name: 'Log into GameChanger', text: 'Go to web.gc.com and sign into your account with lacrosse team access.' },
          { name: 'Find your lacrosse clips', text: 'Navigate to your lacrosse team and select a game with video clips.' },
          { name: 'Download highlights', text: 'Click the green download button on any clip to save it to your computer.' },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Lacrosse parents: here's how to save those goals, saves, and amazing plays forever."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <QuickAnswer answer="Download GameChanger lacrosse clips by installing the free ClipKeeper Chrome extension, logging into web.gc.com, navigating to your lacrosse team's game clips, and clicking the green download button on any highlight you want to save." />
        <SectionHeading number={1}>Lacrosse Parents Use GameChanger Too</SectionHeading>
        <p className="text-gray-600 mb-6">
          Lacrosse is one of the fastest-growing sports in America, and GameChanger has
          become a go-to platform for lacrosse leagues at every level. From youth club
          teams to high school varsity, coaches are using it to track stats, stream games,
          and capture highlights.
        </p>
        <p className="text-gray-600 mb-6">
          If you&apos;re a lacrosse parent, you know those GameChanger clips capture
          irreplaceable moments: your kid&apos;s first goal, a game-winning save, an
          incredible behind-the-back assist.
        </p>
        <p className="text-gray-600 mb-6">
          <strong>The problem?</strong> GameChanger doesn&apos;t let you download those
          clips. They&apos;re stuck on the platform, viewable only through streaming.
          Until now.
        </p>

        <SectionHeading number={2}>Does GameChanger Work for Lacrosse?</SectionHeading>
        <p className="text-gray-600 mb-6">
          Yes! GameChanger fully supports lacrosse with sport-specific features:
        </p>

        <FeatureList
          title="GameChanger Lacrosse Features:"
          features={[
            'Live game scoring with lacrosse-specific stats',
            'Shot tracking (shots on goal, saves)',
            'Ground ball tracking',
            'Face-off statistics',
            'Penalty tracking',
            'Video highlight clips for key plays',
            'Live streaming for parents who can\'t attend',
          ]}
        />

        <p className="text-gray-600 mb-6">
          When your kid scores a goal or makes a great play, GameChanger captures it as
          a video clip. These clips are available to stream through the app or website -
          but downloading them requires a little help.
        </p>

        <SectionHeading number={3}>How to Download Lacrosse Clips</SectionHeading>
        <p className="text-gray-600 mb-6">
          ClipKeeper works with lacrosse clips exactly the same way it works with
          baseball, softball, or any other sport on GameChanger. Here&apos;s how to
          save your lacrosse highlights:
        </p>

        <StepCard icon={Download} title="Step 1: Install ClipKeeper">
          <p className="text-gray-600">
            Go to the Chrome Web Store and add the ClipKeeper extension. It&apos;s free
            and takes about 30 seconds to install. Works on any computer with Chrome,
            Brave, or Edge browser.
          </p>
        </StepCard>

        <StepCard icon={Target} title="Step 2: Find Your Lacrosse Team">
          <p className="text-gray-600">
            Go to web.gc.com and log into your GameChanger account. Navigate to your
            lacrosse team and select a game that has video clips. Look for the Media
            or Clips section.
          </p>
        </StepCard>

        <StepCard icon={Video} title="Step 3: Download Your Clips">
          <p className="text-gray-600">
            You&apos;ll see a green download button added by ClipKeeper on each clip.
            Click it to download the video directly to your computer. That&apos;s it!
          </p>
        </StepCard>

        <p className="text-gray-600 mb-6">
          Need more detail? Check out our complete{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            guide to downloading GameChanger videos
          </Link>
          .
        </p>

        <SectionHeading number={4}>Best Lacrosse Moments to Capture</SectionHeading>
        <p className="text-gray-600 mb-6">
          Not every clip is equally important. Here are the lacrosse highlights worth
          saving and organizing:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500" />
            Priority Clips for Attackers
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li><strong>Goals:</strong> Every goal, especially ones showing shooting technique</li>
            <li><strong>Assists:</strong> Passes that lead to goals show vision and stick skills</li>
            <li><strong>Dodges:</strong> Beating defenders one-on-one</li>
            <li><strong>Off-ball movement:</strong> Cutting and creating space</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-500" />
            Priority Clips for Defenders & Goalies
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li><strong>Saves:</strong> Every save, especially on tough shots</li>
            <li><strong>Clears:</strong> Successful clears showing decision-making</li>
            <li><strong>Ground balls:</strong> Winning contested ground balls</li>
            <li><strong>Checks:</strong> Clean, legal checks that create turnovers</li>
            <li><strong>Slides:</strong> Proper defensive rotations</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-500" />
            Priority Clips for Midfielders
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li><strong>Face-offs:</strong> Face-off wins (huge for recruiting)</li>
            <li><strong>Transition plays:</strong> Fast breaks and outlet passes</li>
            <li><strong>Two-way play:</strong> Clips showing both offensive and defensive ability</li>
            <li><strong>Conditioning:</strong> Playing full-field and hustling back</li>
          </ul>
        </div>

        <SectionHeading number={5}>Lacrosse Recruiting and Video</SectionHeading>
        <p className="text-gray-600 mb-6">
          Lacrosse recruiting is intensely competitive, and video is essential. College
          coaches receive hundreds of emails from recruits - a strong highlight video
          helps you stand out.
        </p>

        <div className="bg-green-50 rounded-xl p-6 my-8 border border-green-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-green-500" />
            What Lacrosse Coaches Want to See
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Position-specific skills:</strong> Goalies show saves, attackers show goals and assists</li>
            <li><strong>Speed and athleticism:</strong> Fast breaks, chasing down ground balls</li>
            <li><strong>Stick skills:</strong> Clean catches, accurate passes, strong shots</li>
            <li><strong>Game IQ:</strong> Making smart decisions under pressure</li>
            <li><strong>Competitiveness:</strong> Effort plays, hustle, intensity</li>
          </ul>
        </div>

        <p className="text-gray-600 mb-6">
          GameChanger clips are perfect for recruiting videos because they&apos;re from
          real games, not practice. Coaches want to see how you perform in competition.
        </p>

        <SectionHeading number={6}>Building a Lacrosse Highlight Reel</SectionHeading>
        <p className="text-gray-600 mb-6">
          Once you&apos;ve downloaded your best clips, here&apos;s how to turn them into
          a recruiting-ready highlight video:
        </p>

        <StepCard icon={CheckCircle} title="Lacrosse Highlight Reel Tips">
          <ul className="space-y-2 text-gray-600">
            <li><strong>Keep it short:</strong> 2-3 minutes maximum. Coaches are busy.</li>
            <li><strong>Lead with your best:</strong> Put your top 3-5 plays in the first 30 seconds.</li>
            <li><strong>Show variety:</strong> Goals, assists, ground balls, defensive plays.</li>
            <li><strong>Add player info:</strong> Jersey number, position, graduation year at the start.</li>
            <li><strong>Include game film:</strong> A few full possessions show game awareness.</li>
            <li><strong>Circle yourself:</strong> Use an arrow or circle so coaches can find you.</li>
          </ul>
        </StepCard>

        <p className="text-gray-600 mb-6">
          For video editing tools and more tips, check out our guide to{' '}
          <Link href="/blog/sports-highlight-reel-maker" className="text-green-600 hover:underline">
            creating sports highlight reels
          </Link>
          .
        </p>

        <p className="text-gray-600 mb-6">
          If your kid plays multiple sports, you might also want to create a combined
          video. See our guide on{' '}
          <Link href="/blog/multi-sport-highlight-reel" className="text-green-600 hover:underline">
            creating a multi-sport highlight reel
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Does ClipKeeper work for all lacrosse leagues?
        </h3>
        <p className="text-gray-600 mb-4">
          ClipKeeper works with any lacrosse clips on GameChanger, regardless of league.
          Youth club, middle school, high school, travel teams - if it&apos;s on GameChanger,
          ClipKeeper can download it.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What if my team uses a different platform?
        </h3>
        <p className="text-gray-600 mb-4">
          ClipKeeper is built specifically for GameChanger. If your team uses a different
          platform, ClipKeeper won&apos;t help with those clips. Many lacrosse teams use
          GameChanger, but some use other services.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          When should I start building a recruiting video?
        </h3>
        <p className="text-gray-600 mb-4">
          Start saving clips as early as freshman year of high school. You don&apos;t need
          to create the video yet, but having clips from multiple seasons gives you more
          to work with when it&apos;s time. D1 coaches often start evaluating sophomores
          and juniors.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          How do I share clips on social media?
        </h3>
        <p className="text-gray-600 mb-4">
          After downloading, you may need to convert the .ts file to MP4 for social media.
          See our{' '}
          <Link href="/blog/share-gamechanger-to-instagram-tiktok" className="text-green-600 hover:underline">
            guide to sharing GameChanger clips on Instagram and TikTok
          </Link>
          .
        </p>

        <CTASection
          title="Save Your Lacrosse Highlights Today"
          description="Don't let great plays disappear. Download your GameChanger lacrosse clips with ClipKeeper."
        />

        <AuthorBio />
        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
