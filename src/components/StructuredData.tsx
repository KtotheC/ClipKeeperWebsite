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
          text: 'Videos are downloaded as .ts (MPEG Transport Stream) files. This format plays in VLC Media Player, Windows Media Player, and most modern video players. For social media sharing, you can easily convert to MP4 using free tools like VLC or online converters.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why .ts instead of .mp4?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Chrome Extension security policies prevent in-browser video conversion. The .ts format is actually what GameChanger uses internally - we're just giving you direct access to the original quality. The files play just fine in most players.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is this legal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You're downloading videos of your own children that you already have viewing access to through your GameChanger subscription. ClipKeeper simply helps you exercise your right to backup your personal family memories.",
        },
      },
      {
        '@type': 'Question',
        name: 'What if GameChanger changes something?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We actively monitor GameChanger's video delivery system and update the extension when needed. If you encounter any issues, our support team is here to help.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a GameChanger subscription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, ClipKeeper works with videos you already have access to through GameChanger. It helps you download and backup clips from your existing subscription.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Free users can reach us via email. Pro users get priority support with faster response times. Just reach out and we\'ll help you troubleshoot any issues.',
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
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome',
    description:
      "Download and backup your kids' GameChanger sports videos. One-click downloads, smart file naming, and batch export for baseball, softball, and basketball clips.",
    offers: [
      {
        '@type': 'Offer',
        name: 'ClipKeeper Free',
        price: '0',
        priceCurrency: 'USD',
        description: '5 downloads per week, smart file naming, works on all GameChanger videos',
      },
      {
        '@type': 'Offer',
        name: 'ClipKeeper Pro Monthly',
        price: '5',
        priceCurrency: 'USD',
        billingDuration: 'P1M',
        description: 'Unlimited downloads, batch download entire games, download by player filter, priority support',
      },
      {
        '@type': 'Offer',
        name: 'ClipKeeper Pro Yearly',
        price: '29',
        priceCurrency: 'USD',
        billingDuration: 'P1Y',
        description: 'Unlimited downloads, batch download entire games, download by player filter, priority support - Best value!',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
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
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  slug,
  imageUrl,
}: ArticleSchemaProps) {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl || 'https://getclipkeeper.com/og-image.jpg',
    author: {
      '@type': 'Organization',
      name: 'ClipKeeper',
      url: 'https://getclipkeeper.com',
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
