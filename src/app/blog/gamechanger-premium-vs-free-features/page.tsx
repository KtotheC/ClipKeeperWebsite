import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, DollarSign } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog/posts';
import { generateBlogMetadata } from '@/lib/blog/utils';
import {
  BlogLayout,
  FeatureList,
  CTASection,
  SectionHeading,
  RelatedPosts,
} from '@/components/blog';
import { ArticleSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData';

const SLUG = 'gamechanger-premium-vs-free-features';

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
            question: 'Is GameChanger Premium worth $99/year?',
            answer: 'It depends on your priorities. Premium gives you HD streaming, unlimited storage, and advanced stats. But if your main goal is keeping videos forever, Premium still does not include downloads - you would need ClipKeeper for that.',
          },
          {
            question: 'What video features does GameChanger Premium include?',
            answer: 'Premium includes HD video quality (vs SD on free), unlimited video storage, and ad-free viewing. However, it does not include the ability to download videos to keep.',
          },
          {
            question: 'Can I download videos with GameChanger Premium?',
            answer: 'No. Even with Premium at $99/year, you cannot download your video clips. You can only stream them on the platform. For downloads, you need a tool like ClipKeeper.',
          },
          {
            question: "What's included in the free version of GameChanger?",
            answer: 'Free GameChanger includes live scorekeeping, team stats, and the ability to watch video clips online (in standard definition). Video storage may be limited compared to Premium.',
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Is GameChanger Premium worth $99/year? Here's what you get (and don't get) with the paid subscription."
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>GameChanger Pricing Overview</SectionHeading>
        <p className="text-gray-600 mb-6">
          GameChanger offers a free tier and a premium subscription called &quot;GameChanger Plus&quot;
          (sometimes marketed as Premium or Pro+). The paid tier costs about <strong>$99/year</strong> or
          $12.99/month.
        </p>
        <p className="text-gray-600 mb-6">
          But what do you actually get for that money? And more importantly - does it let you
          download and keep your video clips? Let&apos;s break it down.
        </p>

        <SectionHeading number={2}>Feature Comparison</SectionHeading>

        {/* Comparison Table */}
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Feature</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold">Free</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold bg-green-50">Premium ($99/yr)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Live scorekeeping</td>
                <td className="border border-gray-200 px-4 py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Team stats & standings</td>
                <td className="border border-gray-200 px-4 py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Watch video clips online</td>
                <td className="border border-gray-200 px-4 py-3 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">HD video quality</td>
                <td className="border border-gray-200 px-4 py-3 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Unlimited video storage</td>
                <td className="border border-gray-200 px-4 py-3 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Advanced player stats</td>
                <td className="border border-gray-200 px-4 py-3 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Ad-free experience</td>
                <td className="border border-gray-200 px-4 py-3 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border border-gray-200 px-4 py-3 font-semibold">Download videos to keep</td>
                <td className="border border-gray-200 px-4 py-3 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center"><XCircle className="w-5 h-5 text-red-400 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <SectionHeading number={3}>The Big Missing Feature: Video Downloads</SectionHeading>
        <p className="text-gray-600 mb-6">
          Here&apos;s what surprises most parents: <strong>even with Premium, you can&apos;t download
          your video clips</strong>. You can watch them in HD, but they&apos;re stuck on GameChanger&apos;s
          servers.
        </p>
        <p className="text-gray-600 mb-6">
          This means if you cancel your subscription, you lose access. If GameChanger changes
          their service, your videos could disappear. You&apos;re essentially renting access to
          your own family memories.
        </p>

        <div className="bg-yellow-50 rounded-xl p-6 my-8 border border-yellow-200">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-yellow-600" />
            The Real Cost
          </h3>
          <p className="text-gray-700">
            At $99/year, a family with a kid playing from age 8 to 18 would spend
            <strong> $990</strong> just to watch their videos online - without ever owning them.
          </p>
        </div>

        <SectionHeading number={4}>How to Actually Own Your Videos</SectionHeading>
        <p className="text-gray-600 mb-6">
          The solution is to{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            download your GameChanger videos
          </Link>{' '}
          with ClipKeeper, a Chrome extension that lets you save clips to your computer.
          Once downloaded, you own those files forever - no subscription required.
        </p>
        <p className="text-gray-600 mb-6">
          Considering other options? See our{' '}
          <Link href="/blog/sidelinehd-vs-gamechanger" className="text-green-600 hover:underline">
            comparison of SidelineHD vs GameChanger
          </Link>
          .
        </p>

        <FeatureList
          title="ClipKeeper vs GameChanger Premium:"
          features={[
            'Actually download and keep your videos',
            'One-time $29/year for Pro (or free for basic use)',
            'Videos work offline, forever',
            'Create highlight reels in any editor',
            'Share on social media easily',
          ]}
        />

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Is GameChanger Premium Worth It?
        </h2>
        <p className="text-gray-600 mb-6">
          GameChanger Premium is worth it <strong>if</strong> you value HD streaming,
          advanced stats, and an ad-free experience. It&apos;s a good service for watching
          games live and reviewing plays.
        </p>
        <p className="text-gray-600 mb-6">
          But if your main goal is <strong>keeping your videos forever</strong>, Premium
          won&apos;t help. You&apos;ll still need a download solution like ClipKeeper.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Does Premium include video downloads?
        </h3>
        <p className="text-gray-600 mb-4">
          No. GameChanger Premium gives you HD streaming and unlimited storage on their platform,
          but no download functionality.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          What happens to my videos if I cancel Premium?
        </h3>
        <p className="text-gray-600 mb-4">
          You&apos;ll lose access to HD quality and some features. Videos remain on the platform
          but may be in lower quality or behind feature gates.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I use ClipKeeper with a free GameChanger account?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes! ClipKeeper works with any GameChanger account, free or paid. It downloads
          whatever videos you have access to view.
        </p>

        <CTASection
          title="Keep Your Videos Forever"
          description="Download your GameChanger clips and own them outright. No subscription lock-in."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
