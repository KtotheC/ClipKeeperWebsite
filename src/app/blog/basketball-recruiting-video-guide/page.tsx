import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Video, ListChecks, Star, Calendar, Send } from 'lucide-react';
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
import { ArticleSchema, HowToSchema, BreadcrumbSchema } from '@/components/StructuredData';
import AuthorBio from '@/components/blog/AuthorBio';

const SLUG = 'basketball-recruiting-video-guide';

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
      <HowToSchema
        name="How to Make a Basketball Recruiting Video"
        description="Create a standout basketball recruiting video using GameChanger clips"
        steps={[
          { name: 'Download Your Best Clips', text: 'Use ClipKeeper to download your top basketball plays from GameChanger' },
          { name: 'Select Your Highlights', text: 'Choose 10-15 clips showing different skills - scoring, defense, assists, rebounds' },
          { name: 'Edit Together', text: 'Use a free editor like CapCut or iMovie to combine clips' },
          { name: 'Add Info Overlay', text: 'Include name, position, height, grad year, and contact info' },
          { name: 'Share With Coaches', text: 'Upload to YouTube and email links directly to college coaches' },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://getclipkeeper.com' },
          { name: 'Blog', url: 'https://getclipkeeper.com/blog' },
          { name: post.title, url: `https://getclipkeeper.com/blog/${post.slug}` },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Help your athlete get recruited with a professional-quality highlight video built from GameChanger clips."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>The AAU to College Pipeline</SectionHeading>
        <p className="text-gray-600 mb-6">
          Basketball recruiting is more competitive than ever. College coaches can&apos;t attend
          every AAU tournament or high school game. They rely on highlight videos to discover
          and evaluate talent.
        </p>
        <p className="text-gray-600 mb-6">
          A well-made recruiting video can be the difference between getting a scholarship offer
          and getting overlooked. The good news? If your team uses GameChanger, you already have
          footage - you just need to{' '}
          <Link href="/blog/download-gamechanger-basketball-clips" className="text-green-600 hover:underline">
            download your basketball clips
          </Link>{' '}
          and compile them.
        </p>

        <SectionHeading number={2}>What College Basketball Coaches Want to See</SectionHeading>
        <p className="text-gray-600 mb-6">
          Different positions require different highlights. Show coaches what makes you valuable
          at your specific position.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
            <h3 className="font-bold text-gray-900 mb-3">Guards (PG/SG)</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Ball handling under pressure</li>
              <li>Court vision and passing</li>
              <li>Shooting from multiple spots</li>
              <li>Finishing at the rim</li>
              <li>Defensive pressure and steals</li>
              <li>Running the offense</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-3">Forwards/Centers (SF/PF/C)</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Post moves and footwork</li>
              <li>Rim protection and blocks</li>
              <li>Rebounding (both ends)</li>
              <li>Mid-range and three-point shooting</li>
              <li>Versatility on switches</li>
              <li>Transition finishing</li>
            </ul>
          </div>
        </div>

        <FeatureList
          title="Clips Every Position Should Include:"
          features={[
            'Athletic plays (dunks, blocks, fast breaks)',
            'High basketball IQ moments',
            'Plays against quality competition',
            'Full-court sequences showing motor',
            'Clutch moments (if you have them)',
          ]}
        />

        <SectionHeading number={3}>When to Start Building Your Video</SectionHeading>
        <p className="text-gray-600 mb-6">
          Basketball recruiting has a timeline. Understanding it helps you prepare the right
          materials at the right time.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-600" />
            Basketball Recruiting Timeline
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <strong>Freshman/Sophomore:</strong> Start collecting clips. Even if you&apos;re not ready
              to send to coaches, build your library. Skills development clips work too.
            </li>
            <li>
              <strong>Junior Year:</strong> This is when most active recruiting happens. Have a polished
              video ready. Attend showcases. Start emailing coaches directly.
            </li>
            <li>
              <strong>Senior Year:</strong> Update your video with the latest season. Final push for
              offers. Consider all division levels.
            </li>
          </ul>
        </div>

        <p className="text-gray-600 mb-6">
          Don&apos;t wait until junior year to start saving clips. The more footage you have,
          the better your final video will be.
        </p>

        <SectionHeading number={4}>Step-by-Step: Create Your Recruiting Video</SectionHeading>

        <StepCard icon={Download} title="Step 1: Download Your Best GameChanger Clips">
          <p>
            First,{' '}
            <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
              install ClipKeeper and download your GameChanger clips
            </Link>
            . Go through games from the past 1-2 seasons. Download every standout play - scoring,
            defense, assists, rebounds. More options means a better final product.
          </p>
        </StepCard>

        <StepCard icon={ListChecks} title="Step 2: Organize by Skill Type">
          <p>
            Create folders for different skills: Scoring, Defense, Rebounding, Passing/Assists,
            Athletic Plays. This makes it easier to build a balanced highlight reel. Aim for
            10-15 clips that show variety.
          </p>
        </StepCard>

        <StepCard icon={Video} title="Step 3: Edit Your Reel">
          <p className="mb-3">
            Use a free video editor to combine your clips:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>CapCut</strong> - Free, easy, works on phone and desktop</li>
            <li><strong>iMovie</strong> - Free on Mac and iPhone</li>
            <li><strong>DaVinci Resolve</strong> - Free, professional-grade</li>
          </ul>
          <p className="mt-3">
            See our guide on{' '}
            <Link href="/blog/sports-highlight-reel-maker" className="text-green-600 hover:underline">
              best tools for sports highlight reels
            </Link>
            .
          </p>
        </StepCard>

        <StepCard icon={Star} title="Step 4: Structure Your Video Right">
          <p>
            <strong>Opening (5-10 sec):</strong> Title card with Name, Position, Height, Weight,
            Grad Year, School, GPA, Contact Info.
          </p>
          <p className="mt-2">
            <strong>Body:</strong> Lead with your absolute best clip. Mix offensive and defensive.
            Show full-court sequences when possible. Don&apos;t just show made shots - show the
            plays that demonstrate your skills.
          </p>
          <p className="mt-2">
            <strong>Closing:</strong> Contact info again. Make it easy for coaches to reach you.
          </p>
        </StepCard>

        <StepCard icon={Send} title="Step 5: Share With Coaches">
          <p>
            Upload to YouTube (public or unlisted). Don&apos;t use Vimeo or other platforms -
            coaches want easy access. Email the link directly to coaches with a brief intro
            about yourself. Follow up, but don&apos;t spam.
          </p>
        </StepCard>

        <SectionHeading number={5}>Where to Share Your Video</SectionHeading>

        <FeatureList
          features={[
            'YouTube - Primary platform, easy for coaches to watch',
            'NCSA Athletic Recruiting - Popular recruiting network',
            'BeRecruited - Free recruiting platform',
            'Direct email to college coaches',
            'Twitter/X - Tag coaches, use hashtags',
          ]}
        />

        <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-100">
          <h3 className="font-semibold text-gray-900 mb-3">Pro Tips from College Coaches:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Keep it under 4-5 minutes - coaches won&apos;t watch longer
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Lead with your best clip - first impressions matter
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Show game footage, not just training
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Include competition level (AAU circuit, high school state)
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              Make contact info impossible to miss
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Should I include music in my highlight video?
        </h3>
        <p className="text-gray-600 mb-4">
          Optional. Some coaches prefer to hear game audio (sneaker squeaks, crowd, coaches yelling).
          If you use music, keep it professional and not too loud. Never use copyrighted music
          that could get your video taken down.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What resolution should I export?
        </h3>
        <p className="text-gray-600 mb-4">
          Export as MP4 at 1080p resolution. This works everywhere - YouTube, email, and
          recruiting platforms. Need to{' '}
          <Link href="/blog/convert-ts-to-mp4" className="text-green-600 hover:underline">
            convert your .ts files to MP4
          </Link>
          ? It only takes a few seconds with free tools.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          How often should I update my recruiting video?
        </h3>
        <p className="text-gray-600 mb-4">
          Update at least once per season. As you improve, your older clips may not represent
          your current abilities. Keep your best plays from multiple seasons, but lead with
          your most recent dominant performances.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What if I don&apos;t have GameChanger footage?
        </h3>
        <p className="text-gray-600 mb-4">
          Ask parents to film games from the stands. Even phone footage is better than nothing.
          For AAU, many tournaments have GameChanger or other stat tracking. Check if your
          league or tournament uses any video platform.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What if my athlete plays multiple sports?
        </h3>
        <p className="text-gray-600 mb-4">
          Many college programs value multi-sport athletes. Consider creating a{' '}
          <Link href="/blog/multi-sport-highlight-reel" className="text-green-600 hover:underline">
            multi-sport highlight reel
          </Link>{' '}
          that showcases overall athleticism and versatility, especially for DIII programs.
        </p>

        <CTASection
          title="Get Your GameChanger Clips"
          description="Download all your basketball highlights and start building that recruiting video today."
        />

        <AuthorBio />
        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
