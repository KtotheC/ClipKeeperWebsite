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

const SLUG = 'sidelinehd-vs-gamechanger';

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
            question: 'Is SidelineHD better than GameChanger?',
            answer: 'It depends on your priorities. SidelineHD offers higher video quality streams if you invest in their camera setup. GameChanger is better for all-in-one scorekeeping, stats, and automatic highlight clips.',
          },
          {
            question: 'Which platform has better video quality - SidelineHD or GameChanger?',
            answer: 'SidelineHD generally offers higher quality streams, especially with their recommended camera setup. GameChanger video quality has improved significantly and is good enough for most families.',
          },
          {
            question: 'Can you download videos from SidelineHD?',
            answer: 'SidelineHD has limited download options. For GameChanger, you can download videos using ClipKeeper, a Chrome extension that adds a download button to every clip.',
          },
          {
            question: 'How much does SidelineHD cost vs GameChanger?',
            answer: "SidelineHD costs around $25-50/month plus camera hardware. GameChanger Premium is about $99/year or $12.99/month. GameChanger's free tier includes basic features.",
          },
        ]}
      />

      <BlogLayout
        title={post.title}
        description="Comparing the two biggest names in youth sports video. Which platform is better for your team?"
        publishedAt={post.publishedAt}
        readingTime={post.readingTime}
        slug={post.slug}
      >
        <SectionHeading number={1}>Overview: Two Different Approaches</SectionHeading>
        <p className="text-gray-600 mb-6">
          <strong>GameChanger</strong> and <strong>SidelineHD</strong> are both popular for
          youth sports video, but they work differently. Wondering which lets you keep your videos?
          With GameChanger, you can{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            download your clips using ClipKeeper
          </Link>
          .
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h3 className="font-bold text-gray-900 mb-3">GameChanger</h3>
            <p className="text-gray-600 text-sm mb-4">
              All-in-one platform for scorekeeping, stats, and video. Auto-generates video clips
              based on play-by-play data.
            </p>
            <p className="text-xs text-gray-500">Best for: Teams that already use GameChanger for scoring</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-3">SidelineHD</h3>
            <p className="text-gray-600 text-sm mb-4">
              Dedicated live streaming platform. Higher quality video streams, designed for
              broadcasting games to remote family.
            </p>
            <p className="text-xs text-gray-500">Best for: Teams prioritizing live stream quality</p>
          </div>
        </div>

        <SectionHeading number={2}>Feature Comparison</SectionHeading>

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Feature</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold bg-green-50">GameChanger</th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold bg-blue-50">SidelineHD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Live scorekeeping</td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Player/team stats</td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Live streaming</td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50"><CheckCircle className="w-5 h-5 text-blue-500 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">HD video quality</td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50">720p-1080p</td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50">1080p+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Auto-clip highlights</td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Hardware required</td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50">iPad/iPhone</td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50">Dedicated camera</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Multi-sport support</td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50"><CheckCircle className="w-5 h-5 text-blue-500 mx-auto" /></td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border border-gray-200 px-4 py-3 font-semibold">Download videos</td>
                <td className="border border-gray-200 px-4 py-3 text-center">With ClipKeeper</td>
                <td className="border border-gray-200 px-4 py-3 text-center">Limited</td>
              </tr>
            </tbody>
          </table>
        </div>

        <SectionHeading number={3}>Pricing Comparison</SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-green-500" />
              <h3 className="font-bold text-gray-900">GameChanger</h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><strong>Free:</strong> Basic scorekeeping, limited video</li>
              <li><strong>Premium:</strong> ~$99/year per family</li>
              <li><strong>Team:</strong> ~$150-300/season (team-wide premium)</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-gray-900">SidelineHD</h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><strong>Basic:</strong> ~$25/month subscription</li>
              <li><strong>Pro:</strong> ~$50/month for advanced features</li>
              <li><strong>Hardware:</strong> Additional camera purchase required</li>
            </ul>
          </div>
        </div>

        <SectionHeading number={4}>Video Quality & Downloads</SectionHeading>
        <p className="text-gray-600 mb-6">
          <strong>SidelineHD</strong> generally offers higher video quality streams, especially
          if you invest in their recommended camera setup. They&apos;re focused purely on
          video, so that&apos;s their strength.
        </p>
        <p className="text-gray-600 mb-6">
          <strong>GameChanger</strong>&apos;s video quality has improved significantly and is
          plenty good for most families. The big advantage is automatic highlight clips -
          GameChanger knows when plays happen and clips them automatically.
        </p>
        <p className="text-gray-600 mb-6">
          Neither platform makes it easy to download your videos. For GameChanger,
          you can{' '}
          <Link href="/blog/how-to-download-gamechanger-video" className="text-green-600 hover:underline">
            download videos with ClipKeeper
          </Link>
          . Also see our{' '}
          <Link href="/blog/gamechanger-premium-vs-free-features" className="text-green-600 hover:underline">
            GameChanger Premium vs Free comparison
          </Link>
          .
        </p>

        <SectionHeading number={5}>Which Should You Choose?</SectionHeading>

        <FeatureList
          title="Choose GameChanger if:"
          features={[
            'Your team already uses GameChanger for scoring',
            'You want automatic highlight clips',
            'You need stats and scorekeeping together',
            "You don't want to buy extra hardware",
            'You value the all-in-one experience',
          ]}
        />

        <div className="my-4" />

        <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-100">
          <h3 className="font-semibold text-gray-900 mb-3">Choose SidelineHD if:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              Video quality is your #1 priority
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              You have budget for dedicated streaming hardware
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              You use a different app for scoring/stats
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              Your league/tournament requires SidelineHD
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Can I use both platforms?
        </h3>
        <p className="text-gray-600 mb-4">
          Yes! Some teams use GameChanger for stats and clips, while using SidelineHD
          for their primary live stream to family members watching remotely.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Which has better mobile apps?
        </h3>
        <p className="text-gray-600 mb-4">
          GameChanger has excellent mobile apps for iOS and Android. SidelineHD&apos;s
          apps are more focused on streaming setup than viewing.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-2">
          Is there a free trial?
        </h3>
        <p className="text-gray-600 mb-4">
          GameChanger has a free tier you can use indefinitely. SidelineHD typically
          offers a trial period for new teams.
        </p>

        <CTASection
          title="Using GameChanger? Get Your Clips"
          description="Download your GameChanger highlights with ClipKeeper and keep them forever."
        />

        <RelatedPosts posts={relatedPosts} />
      </BlogLayout>
    </>
  );
}
