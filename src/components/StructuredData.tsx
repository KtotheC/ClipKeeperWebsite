// FAQ Schema for Google Rich Snippets
export function FAQSchema() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What file format are the downloads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '.ts (MPEG Transport Stream) files. This format plays in VLC, Windows Media Player, and most modern video players. Convert to MP4 using free tools like VLC or HandBrake if needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why .ts instead of .mp4?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Chrome security policies prevent in-browser conversion. The .ts format is GameChanger's native format, giving you the original quality without re-encoding.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is this legal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You are downloading videos of your own children that you already have access to through GameChanger. ClipKeeper helps you backup personal family memories you already own.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if GameChanger changes something?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ClipKeeper is actively maintained and updated when needed. Contact support@getclipkeeper.com if you encounter any issues.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a GameChanger subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ClipKeeper downloads videos you already have access to through your GameChanger account. It does not grant access to new content.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Email support@getclipkeeper.com. Pro users receive priority support with faster response times.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

// Product Schema for Pricing
export function ProductSchema() {
  const productData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ClipKeeper',
    applicationCategory: 'BrowserExtension',
    applicationSubCategory: 'Video Downloader',
    operatingSystem: 'Chrome',
    browserRequirements: 'Chrome 88+',
    description:
      "Download and backup your kids' GameChanger sports videos. One-click downloads, smart file naming, and batch export for baseball, softball, and basketball clips.",
    url: 'https://getclipkeeper.com',
    downloadUrl: 'https://chromewebstore.google.com',
    softwareVersion: '1.0',
    screenshot: 'https://getclipkeeper.com/og-image.jpg',
    featureList: [
      'One-click video downloads',
      'Smart file naming with player and play info',
      'Batch download entire games',
      'Works with all GameChanger sports',
      'Original HD quality preservation',
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'ClipKeeper Free',
        price: '0',
        priceCurrency: 'USD',
        description: '5 downloads per week, smart file naming, works on all GameChanger videos',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'ClipKeeper Pro Monthly',
        price: '5',
        priceCurrency: 'USD',
        billingDuration: 'P1M',
        description: 'Unlimited downloads, batch download entire games, download by player filter, priority support',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'ClipKeeper Pro Yearly',
        price: '29',
        priceCurrency: 'USD',
        billingDuration: 'P1Y',
        description: 'Unlimited downloads, batch download entire games, download by player filter, priority support - Best value!',
        availability: 'https://schema.org/InStock',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  );
}

// Organization Schema
export function OrganizationSchema() {
  const orgData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ClipKeeper',
    url: 'https://getclipkeeper.com',
    logo: 'https://getclipkeeper.com/icon-512.png',
    description:
      "ClipKeeper helps parents download and backup their kids' GameChanger youth sports video clips.",
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@getclipkeeper.com',
      contactType: 'customer support',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
    />
  );
}

// WebSite Schema for Sitelinks Search Box
export function WebsiteSchema() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ClipKeeper',
    url: 'https://getclipkeeper.com',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

// Article Schema for Blog Posts
interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  imageUrl?: string;
  readingTime?: string;
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  slug,
  imageUrl,
  readingTime,
}: ArticleSchemaProps) {
  // Parse reading time string (e.g., "5 min read" → "PT5M")
  const parseReadingTime = (time?: string): string | undefined => {
    if (!time) return undefined;
    const match = time.match(/(\d+)/);
    return match ? `PT${match[1]}M` : undefined;
  };

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl || 'https://getclipkeeper.com/og-image.jpg',
    author: {
      '@type': 'Person',
      name: 'Casey Jessup',
      jobTitle: 'Founder',
      url: 'https://getclipkeeper.com/about',
      description: 'ClipKeeper Founder | Parent of youth athletes',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ClipKeeper',
      logo: {
        '@type': 'ImageObject',
        url: 'https://getclipkeeper.com/icon-512.png',
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://getclipkeeper.com/blog/${slug}`,
    },
    ...(parseReadingTime(readingTime) && { timeRequired: parseReadingTime(readingTime) }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}

// HowTo Schema for Tutorial Posts
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}

export function HowToSchema({ name, description, steps, totalTime = 'PT5M' }: HowToSchemaProps) {
  const howToData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    totalTime: totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
    />
  );
}

// Blog-specific FAQ Schema (for individual blog posts)
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

// Breadcrumb Schema for Navigation
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

// VideoObject Schema for YouTube Embeds
interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
  duration?: string;
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  embedUrl,
  duration,
}: VideoSchemaProps) {
  const videoData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    embedUrl,
    ...(duration && { duration }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoData) }}
    />
  );
}

// Speakable Schema for Voice Search Optimization
interface SpeakableSchemaProps {
  url: string;
  cssSelector?: string[];
  xpath?: string[];
}

export function SpeakableSchema({ url, cssSelector, xpath }: SpeakableSchemaProps) {
  const speakableData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      ...(cssSelector && { cssSelector }),
      ...(xpath && { xpath }),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableData) }}
    />
  );
}

// CollectionPage Schema for Blog Index
interface CollectionPageSchemaProps {
  name: string;
  description: string;
  items: { name: string; url: string }[];
}

export function CollectionPageSchema({ name, description, items }: CollectionPageSchemaProps) {
  const collectionData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionData) }}
    />
  );
}
