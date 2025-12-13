import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Layers, FolderOpen, Film, Trophy, Star, Target, Scissors } from 'lucide-react';
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

const SLUG = 'multi-sport-highlight-reel';

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
        name="How to Create a Multi-Sport Highlight Reel"
        description="Complete guide to combining clips from multiple sports into one recruiting highlight video"
        steps={[
          { name: 'Gather clips from all sports', text: 'Download clips from GameChanger for each sport your athlete plays using ClipKeeper.' },
          { name: 'Organize by sport and season', text: 'Create folders for each sport and organize clips by quality and type of play.' },
          { name: 'Select your best clips', text: 'Choose 8-12 of the best clips from each sport that showcase different skills.' },
          { name: 'Plan your video structure', text: 'Decide on the order: intro with athlete info, sport 1 highlights, sport 2 highlights, outro.' },
          { name: 'Edit into one cohesive video', text: 'Use a video editor to combine clips with transitions, titles for each sport section.' },
          { name: 'Keep total length under 4 minutes', text: 'Coaches are busy - a tight, impactful video is better than a long one.' },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Two-sport athlete? Three-sport? Here's how to showcase all your talents in one powerful video."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>The Multi-Sport Athlete Advantage</SectionHeading>
        <p className="text-gray-600 mb-6">
          Your kid plays baseball in spring, basketball in winter, and soccer in fall.
          They&apos;ve got GameChanger clips scattered across multiple sports, multiple
          seasons, and multiple teams.
        </p>
        <p className="text-gray-600 mb-6">
          How do you bring it all together into one highlight reel that shows everything
          they can do?
        </p>
        <p className="text-gray-600 mb-6">
          <strong>Multi-sport highlight videos are underrated.</strong> While most kids
          send sport-specific highlights, a well-made multi-sport reel demonstrates
          overall athleticism, versatility, and competitiveness - traits that college
          coaches love.
        </p>

        <div className="bg-green-50 rounded-xl p-6 my-8 border border-green-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-green-500" />
            Why Coaches Value Multi-Sport Athletes
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Broader athletic base:</strong> Different sports develop different skills</li>
            <li><strong>Reduced burnout:</strong> Sport specialization leads to overuse injuries and mental fatigue</li>
            <li><strong>Competitive experience:</strong> More games, more pressure situations</li>
            <li><strong>Coachability:</strong> Learning multiple systems shows adaptability</li>
            <li><strong>Team experience:</strong> More locker rooms, more leadership opportunities</li>
          </ul>
        </div>

        <SectionHeading number={2}>Gathering Clips from Multiple Sports</SectionHeading>
        <p className="text-gray-600 mb-6">
          The first step is getting all your clips downloaded and organized. If your
          teams use GameChanger, ClipKeeper can download clips from any sport.
        </p>

        <StepCard icon={Download} title="Download Clips from All Sports">
          <ol className="space-y-2 text-gray-600 list-decimal list-inside">
            <li>Install ClipKeeper from the Chrome Web Store</li>
            <li>Log into GameChanger at web.gc.com</li>
            <li>Navigate to each team your athlete is on</li>
            <li>Download clips from each sport&apos;s games</li>
            <li>Save to separate folders for each sport</li>
          </ol>
          <p className="mt-4 text-gray-500 text-sm">
            Pro tip: ClipKeeper Pro&apos;s batch download can save hours when gathering
            clips from multiple seasons.
          </p>
        </StepCard>

        <p className="text-gray-600 mb-6">
          For the complete download process, see our{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            guide to downloading GameChanger videos
          </Link>
          .
        </p>

        <SectionHeading number={3}>Organizing by Sport and Season</SectionHeading>
        <p className="text-gray-600 mb-6">
          Good organization makes editing much easier. Here&apos;s a folder structure
          that works:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200 font-mono text-sm">
          <h3 className="font-semibold text-gray-900 mb-3 font-sans flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-gray-500" />
            Recommended Folder Structure
          </h3>
          <pre className="text-gray-600">
{`Multi-Sport-Highlights/
├── Baseball/
│   ├── 2024-Spring/
│   │   ├── Best-Hits/
│   │   ├── Fielding/
│   │   └── All-Clips/
│   └── 2023-Spring/
├── Basketball/
│   ├── 2023-24-Season/
│   │   ├── Scoring/
│   │   ├── Defense/
│   │   └── All-Clips/
│   └── 2022-23-Season/
├── Soccer/
│   ├── 2024-Fall/
│   │   ├── Goals/
│   │   ├── Assists/
│   │   └── All-Clips/
│   └── 2023-Fall/
└── Final-Selections/`}
          </pre>
        </div>

        <p className="text-gray-600 mb-6">
          The &quot;Final-Selections&quot; folder is key. This is where you&apos;ll copy
          your absolute best clips from each sport when you&apos;re ready to edit.
        </p>

        <SectionHeading number={4}>Selecting Your Best Clips</SectionHeading>
        <p className="text-gray-600 mb-6">
          You might have 50+ clips per sport. You need to narrow it down to 8-12 per sport
          for a multi-sport reel. Here&apos;s how to choose:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500" />
            Selection Criteria
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <strong>Impact:</strong> Does this clip make you say &quot;wow&quot;?
              Coaches watch hundreds of videos - you need clips that stand out.
            </li>
            <li>
              <strong>Quality:</strong> Clear video, good angle, easy to see the play.
              Skip clips where the action is hard to follow.
            </li>
            <li>
              <strong>Variety:</strong> Show different skills. For baseball: hitting,
              fielding, base running. For basketball: scoring, passing, defense.
            </li>
            <li>
              <strong>Competition level:</strong> Plays against strong opponents matter
              more than dominating weak teams.
            </li>
            <li>
              <strong>Recent:</strong> Prefer clips from the last 1-2 seasons. Coaches
              want to see current ability.
            </li>
          </ul>
        </div>

        <FeatureList
          title="Clips to Include for Each Sport:"
          features={[
            'Baseball: Hits (especially extra bases), fielding plays, arm strength throws',
            'Basketball: Scoring (layups, jumpers, drives), passes/assists, defensive stops',
            'Soccer: Goals, assists, 1v1 moves, defensive tackles, saves (if goalie)',
            'Football: Touchdown plays, big hits, route running, open-field tackles',
            'Lacrosse: Goals, assists, ground balls, face-off wins, saves',
          ]}
        />

        <SectionHeading number={5}>Planning Your Video Structure</SectionHeading>
        <p className="text-gray-600 mb-6">
          A multi-sport video needs a clear structure so coaches can follow along.
          Here&apos;s a proven format:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Film className="w-5 h-5 text-gray-500" />
            Recommended Video Structure
          </h3>
          <ol className="space-y-4 text-gray-600">
            <li>
              <strong>Intro (15-30 seconds):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Athlete name, graduation year</li>
                <li>Position(s) for each sport</li>
                <li>School/club team names</li>
                <li>Height, weight (if relevant)</li>
                <li>Contact info</li>
              </ul>
            </li>
            <li>
              <strong>Primary Sport (60-90 seconds):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Title card: &quot;BASEBALL - Shortstop/Pitcher&quot;</li>
                <li>8-12 of your best clips</li>
                <li>Lead with the most impressive plays</li>
              </ul>
            </li>
            <li>
              <strong>Secondary Sport(s) (45-90 seconds each):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Title card for each sport</li>
                <li>6-10 strong clips per sport</li>
                <li>Show transferable athleticism</li>
              </ul>
            </li>
            <li>
              <strong>Outro (10-15 seconds):</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Thank you message</li>
                <li>Contact information again</li>
              </ul>
            </li>
          </ol>
        </div>

        <p className="text-gray-600 mb-6">
          <strong>Total target length: 3-4 minutes.</strong> Shorter is better. Coaches
          often decide in the first 30 seconds whether to keep watching.
        </p>

        <SectionHeading number={6}>Editing Tips for Multi-Sport Videos</SectionHeading>
        <p className="text-gray-600 mb-6">
          Once you have your clips selected and structure planned, it&apos;s time to edit.
          Here are tips specific to multi-sport videos:
        </p>

        <StepCard icon={Scissors} title="Editing Best Practices">
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Clear sport transitions:</strong> Use title cards between sports
              so coaches know what they&apos;re watching.
            </li>
            <li>
              <strong>Consistent style:</strong> Use the same fonts, colors, and
              transition effects throughout for a professional look.
            </li>
            <li>
              <strong>Highlight the athlete:</strong> Use arrows, circles, or jersey
              number callouts so coaches can find your athlete quickly.
            </li>
            <li>
              <strong>Music choice:</strong> Upbeat but not distracting. Keep it
              appropriate for coaches of all ages.
            </li>
            <li>
              <strong>Show the whole play:</strong> Don&apos;t cut clips too tight.
              Coaches want to see what happens before and after.
            </li>
          </ul>
        </StepCard>

        <p className="text-gray-600 mb-6">
          Need help with editing software? Check out our guide to the{' '}
          <Link href="/blog/sports-highlight-reel-maker" className="text-green-600 hover:underline">
            best tools for creating sports highlight reels
          </Link>
          .
        </p>

        <SectionHeading number={7}>When to Use Multi-Sport vs. Single-Sport Videos</SectionHeading>
        <p className="text-gray-600 mb-6">
          Multi-sport videos are powerful, but they&apos;re not always the right choice.
          Here&apos;s when to use each approach:
        </p>

        <div className="bg-green-50 rounded-xl p-6 my-8 border border-green-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-500" />
            Use a Multi-Sport Video When:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Applying to schools that value multi-sport athletes</li>
            <li>DIII schools or liberal arts colleges (often recruit multi-sport)</li>
            <li>Your secondary sport shows complementary skills</li>
            <li>You&apos;re undecided which sport to pursue in college</li>
            <li>Creating a general athletic showcase for admissions</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-gray-500" />
            Use a Single-Sport Video When:
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Targeting a specific DI program for one sport</li>
            <li>A coach specifically requests sport-focused footage</li>
            <li>You need more than 90 seconds to showcase one sport well</li>
            <li>Your secondary sport footage is limited or lower quality</li>
          </ul>
        </div>

        <p className="text-gray-600 mb-6">
          <strong>Pro tip:</strong> Make both. Have a multi-sport version and single-sport
          versions ready to send depending on what each school prefers.
        </p>

        <p className="text-gray-600 mb-6">
          For sport-specific guidance, check out our posts on{' '}
          <Link href="/blog/baseball-recruiting-video-tips" className="text-green-600 hover:underline">
            baseball recruiting videos
          </Link>
          ,{' '}
          <Link href="/blog/basketball-recruiting-video-guide" className="text-green-600 hover:underline">
            basketball recruiting videos
          </Link>
          , and{' '}
          <Link href="/blog/gamechanger-lacrosse-highlights" className="text-green-600 hover:underline">
            lacrosse highlights
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What if one sport has much better footage than another?
        </h3>
        <p className="text-gray-600 mb-4">
          That&apos;s okay! Lead with your strongest sport and give it more time in the
          video. The secondary sport can be shorter - even 30-45 seconds of solid clips
          shows you&apos;re a multi-sport athlete.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Should I include all the sports I play?
        </h3>
        <p className="text-gray-600 mb-4">
          Only include sports where you have quality footage and notable performance.
          Two sports shown well is better than four sports with mediocre clips. Focus
          on quality over quantity.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          How do I handle different video formats from different seasons?
        </h3>
        <p className="text-gray-600 mb-4">
          GameChanger clips download as .ts files regardless of sport. If you need to
          convert them, see our guide on{' '}
          <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
            converting TS to MP4
          </Link>
          . Most video editors can handle mixed formats.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I use clips from non-GameChanger sources?
        </h3>
        <p className="text-gray-600 mb-4">
          Absolutely! If you have phone recordings, other platform clips, or showcase
          footage, include it. Coaches care about seeing the athlete, not where the
          footage came from.
        </p>

        <CTASection
          title="Start Building Your Multi-Sport Reel"
          description="Download clips from all your GameChanger sports with ClipKeeper. Show colleges everything your athlete can do."
        />

        <AuthorBio />
        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
