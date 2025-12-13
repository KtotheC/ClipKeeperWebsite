import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Clock, XCircle, Shield, Download } from 'lucide-react';
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
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredData';
import AuthorBio from '@/components/blog/AuthorBio';

const SLUG = 'gamechanger-video-storage-retention';

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

      <BlogLayout
        title={post.title}
        description="Your clips might not be there forever. Here's what every parent needs to know."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>The Assumption That Could Cost You</SectionHeading>
        <p className="text-gray-600 mb-6">
          You&apos;ve been paying for GameChanger Premium, watching your kid&apos;s games, and
          assuming those video clips will be there whenever you want them. Maybe you&apos;ll
          put together a highlight reel someday. Maybe you&apos;ll show the grandparents at
          Christmas. Maybe you&apos;ll look back in 10 years.
        </p>
        <p className="text-gray-600 mb-6">
          <strong>But will those videos actually be there?</strong>
        </p>
        <p className="text-gray-600 mb-6">
          Most parents assume GameChanger stores their videos forever. They don&apos;t read
          the fine print. They don&apos;t think about what happens when they cancel their
          subscription, when the team dissolves, or when GameChanger changes their policies.
        </p>

        <div className="bg-amber-50 rounded-xl p-6 my-8 border border-amber-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            The Hard Truth
          </h3>
          <p className="text-gray-700">
            GameChanger is not a backup service. It&apos;s a streaming platform. There&apos;s
            a significant difference - and that difference could mean losing years of your
            child&apos;s sports memories.
          </p>
        </div>

        <SectionHeading number={2}>What GameChanger&apos;s Policies Actually Say</SectionHeading>
        <p className="text-gray-600 mb-6">
          Let&apos;s be clear about what GameChanger does and doesn&apos;t promise:
        </p>

        <FeatureList
          title="What GameChanger Provides:"
          features={[
            'Streaming access to clips while subscribed',
            'In-app sharing with team members',
            'Live game streaming (Premium feature)',
            'Highlight clip creation within the app',
          ]}
        />

        <div className="bg-red-50 rounded-xl p-6 my-8 border border-red-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-500" />
            What GameChanger Does NOT Promise:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>Permanent video storage</li>
            <li>Guaranteed access after subscription ends</li>
            <li>Data portability or export options</li>
            <li>Notification before content is removed</li>
            <li>Protection against service changes</li>
          </ul>
        </div>

        <p className="text-gray-600 mb-6">
          Like many cloud platforms, GameChanger reserves the right to modify or discontinue
          services. They&apos;re a business focused on live game management and streaming -
          not long-term archival storage.
        </p>

        <SectionHeading number={3}>What Happens When You Cancel Premium</SectionHeading>
        <p className="text-gray-600 mb-6">
          When your GameChanger Premium subscription ends - whether you cancel or just don&apos;t
          renew - here&apos;s what you face:
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-500" />
            After Cancellation:
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li><strong>Immediate:</strong> You lose access to stream video clips</li>
            <li><strong>Unknown:</strong> How long your video data remains on their servers</li>
            <li><strong>No guarantee:</strong> That re-subscribing will restore access to old clips</li>
            <li><strong>No option:</strong> To download your content before or after cancellation</li>
          </ul>
        </div>

        <p className="text-gray-600 mb-6">
          Many parents don&apos;t realize this until it&apos;s too late. They assume their
          &quot;old videos&quot; will always be there, only to discover they&apos;ve lost years
          of memories.
        </p>

        <SectionHeading number={4}>Other Ways You Could Lose Access</SectionHeading>
        <p className="text-gray-600 mb-6">
          Canceling your subscription isn&apos;t the only risk. Here are other scenarios that
          could leave you without your videos:
        </p>

        <StepCard icon={AlertTriangle} title="Risk Factors">
          <ul className="space-y-3 text-gray-600">
            <li>
              <strong>Team dissolution:</strong> When a team stops using GameChanger, access
              to that team&apos;s content may change or disappear.
            </li>
            <li>
              <strong>Service changes:</strong> GameChanger could restructure their video
              features, migrate to a new system, or change retention policies.
            </li>
            <li>
              <strong>Account issues:</strong> Email changes, forgotten passwords, or account
              disputes could lock you out.
            </li>
            <li>
              <strong>Company changes:</strong> GameChanger was acquired by DICK&apos;S Sporting
              Goods. Future acquisitions or business decisions could affect the platform.
            </li>
            <li>
              <strong>Technical problems:</strong> Server issues, data corruption, or migration
              errors happen to every cloud service eventually.
            </li>
          </ul>
        </StepCard>

        <p className="text-gray-600 mb-6">
          None of these scenarios are guaranteed to happen. But any of them <em>could</em> happen.
          And if they do, you&apos;ll have no recourse to recover your child&apos;s sports memories.
        </p>

        <SectionHeading number={5}>The Only Guarantee: Download Your Clips</SectionHeading>
        <p className="text-gray-600 mb-6">
          Here&apos;s the simple truth: <strong>the only way to truly own your GameChanger
          videos is to download them to your own devices.</strong>
        </p>
        <p className="text-gray-600 mb-6">
          When you have the actual video files on your computer or backed up to your own cloud
          storage, you don&apos;t depend on GameChanger&apos;s policies, your subscription status,
          or the company&apos;s future decisions.
        </p>

        <div className="bg-green-50 rounded-xl p-6 my-8 border border-green-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-500" />
            Why Downloaded Files Are Safe:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>They exist on your own devices - you control them</li>
            <li>They work without internet or subscriptions</li>
            <li>You can back them up to multiple locations</li>
            <li>They&apos;ll play in 20 years just like they do today</li>
            <li>No company can take them away from you</li>
          </ul>
        </div>

        <StepCard icon={Download} title="How to Download Your GameChanger Videos">
          <p className="mb-3">
            GameChanger doesn&apos;t offer a download button, but ClipKeeper adds one. Here&apos;s
            how to start backing up your memories:
          </p>
          <p className="mb-3">
            <strong>1.</strong> Install the free ClipKeeper extension from the Chrome Web Store
          </p>
          <p className="mb-3">
            <strong>2.</strong> Log into GameChanger at web.gc.com
          </p>
          <p className="mb-3">
            <strong>3.</strong> Navigate to any game and click the download button on each clip
          </p>
          <p>
            For a complete walkthrough, see our{' '}
            <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
              guide to downloading GameChanger videos
            </Link>
            .
          </p>
        </StepCard>

        <p className="text-gray-600 mb-6">
          If you have multiple seasons to back up, check out our guide on{' '}
          <Link href="/blog/backup-gamechanger-season" className="text-green-600 hover:underline">
            how to back up your entire GameChanger season
          </Link>
          . ClipKeeper Pro&apos;s batch download feature can save you hours.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          How often should I download my GameChanger clips?
        </h3>
        <p className="text-gray-600 mb-4">
          We recommend downloading clips after each game or at least after each weekend of games.
          Don&apos;t wait until the end of the season - by then, you might have dozens or hundreds
          of clips to process.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Where should I store my downloaded videos?
        </h3>
        <p className="text-gray-600 mb-4">
          Store them in multiple places: your computer&apos;s hard drive, an external drive, and
          a cloud service you control (Google Drive, iCloud, Dropbox). This way, you&apos;re
          protected even if one storage method fails.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Is it worth downloading old seasons too?
        </h3>
        <p className="text-gray-600 mb-4">
          Absolutely. If you still have access to clips from previous seasons, download them now.
          You never know when access might change. Those early games might be the memories you
          treasure most years from now.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What if GameChanger adds a download feature?
        </h3>
        <p className="text-gray-600 mb-4">
          That would be great! But don&apos;t wait for something that may never come. Every day
          you wait is another day your videos exist only on someone else&apos;s servers.
        </p>

        <CTASection
          title="Don't Risk Losing Your Memories"
          description="Download your GameChanger clips now with ClipKeeper. Your future self will thank you."
        />

        <AuthorBio />
        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
