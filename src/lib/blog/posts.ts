export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  category: 'tutorial' | 'comparison' | 'guide';
  readingTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-download-gamechanger-video',
    title: 'How to Download GameChanger Videos in 2025 (3 Easy Steps)',
    description: "Can't download GameChanger videos? Learn the simple 3-step method to save your youth sports clips forever. Free Chrome extension - works in 2025.",
    publishedAt: '2024-11-01',
    updatedAt: '2025-01-15',
    keywords: ['download gamechanger video', 'gamechanger clips', 'save gamechanger videos', 'gamechanger video download', 'gamechanger backup'],
    category: 'tutorial',
    readingTime: '5 min read',
    featured: true,
  },
  {
    slug: 'save-gamechanger-clips-to-iphone',
    title: 'Save GameChanger Clips to iPhone (2025 Guide)',
    description: 'Learn how to save GameChanger video clips directly to your iPhone camera roll. Step-by-step guide for parents who want their sports memories on mobile.',
    publishedAt: '2024-11-15',
    keywords: ['save gamechanger clips to iphone', 'gamechanger iphone download', 'transfer gamechanger videos', 'gamechanger mobile backup', 'sports clips to phone'],
    category: 'tutorial',
    readingTime: '4 min read',
  },
  {
    slug: 'screen-record-gamechanger-alternative',
    title: 'Stop Screen Recording GameChanger (There\'s a Better Way)',
    description: 'Stop wasting time screen recording GameChanger videos. Learn why it produces poor quality and discover a one-click alternative that saves HD clips instantly.',
    publishedAt: '2024-11-20',
    keywords: ['screen record gamechanger', 'gamechanger screen recording', 'record gamechanger video', 'gamechanger capture', 'gamechanger video quality'],
    category: 'guide',
    readingTime: '4 min read',
  },
  {
    slug: 'baseball-recruiting-video-tips',
    title: 'Baseball Recruiting Video: How to Make One from GameChanger (2025)',
    description: "Create a baseball recruiting video that gets coaches' attention. Use your GameChanger clips to build a highlight reel. Expert tips from college coaches.",
    publishedAt: '2024-11-25',
    updatedAt: '2025-01-15',
    keywords: ['baseball recruiting video tips', 'college baseball highlights', 'recruiting video guide', 'baseball showcase video', 'gamechanger recruiting'],
    category: 'tutorial',
    readingTime: '7 min read',
  },
  {
    slug: 'sports-highlight-reel-maker',
    title: 'Best Free Tools to Edit Youth Sports Highlight Reels (2025)',
    description: 'Compare the top sports highlight reel maker tools for youth athletes. Learn how to turn GameChanger clips into professional-looking highlight videos.',
    publishedAt: '2024-12-01',
    keywords: ['sports highlight reel maker', 'highlight video creator', 'youth sports highlights', 'baseball highlight reel', 'softball highlight video'],
    category: 'guide',
    readingTime: '6 min read',
  },
  {
    slug: 'share-gamechanger-to-instagram-tiktok',
    title: 'How to Share GameChanger Videos to Instagram & TikTok',
    description: 'How to post GameChanger video clips to Instagram Reels and TikTok. Download, convert, and share your youth sports highlights on social media.',
    publishedAt: '2024-12-05',
    keywords: ['share gamechanger to instagram', 'gamechanger tiktok', 'post gamechanger clips', 'gamechanger social media', 'sports videos instagram'],
    category: 'tutorial',
    readingTime: '5 min read',
  },
  {
    slug: 'gamechanger-premium-vs-free-features',
    title: 'GameChanger Premium vs Free: Is Video Worth $99/Year?',
    description: 'Complete breakdown of GameChanger Premium features vs the free version. Learn what you get for $99/year and whether the upgrade is worth it for video access.',
    publishedAt: '2024-12-10',
    keywords: ['gamechanger premium features', 'gamechanger pro plus', 'gamechanger subscription cost', 'gamechanger free vs paid', 'gamechanger premium worth it'],
    category: 'comparison',
    readingTime: '6 min read',
  },
  {
    slug: 'play-ts-file-mac-windows',
    title: 'How to Play .TS Files on Mac & Windows (Easy Guide)',
    description: 'Learn how to open and play .ts video files on Mac, Windows, and iPhone. Free players, conversion tools, and why GameChanger uses this format.',
    publishedAt: '2024-12-15',
    keywords: ['play ts file mac', 'play ts file windows', 'open ts file', 'ts file player', 'what is ts file format'],
    category: 'tutorial',
    readingTime: '4 min read',
  },
  {
    slug: 'sidelinehd-vs-gamechanger',
    title: 'SidelineHD vs GameChanger: Which is Better for Youth Sports? (2025)',
    description: 'Detailed comparison of SidelineHD and GameChanger for youth sports video. Features, pricing, video quality, and download options compared.',
    publishedAt: '2024-12-20',
    keywords: ['sidelinehd vs gamechanger', 'gamechanger alternative', 'sidelinehd review', 'youth sports video app', 'best sports video platform'],
    category: 'comparison',
    readingTime: '7 min read',
  },
  {
    slug: 'convert-ts-to-mp4',
    title: 'Convert TS to MP4 Free: 3 Methods That Work in 2025',
    description: 'Convert .ts files to MP4 in minutes using free tools. 3 proven methods for GameChanger videos - VLC, HandBrake, or online. Step-by-step guide.',
    publishedAt: '2024-12-25',
    updatedAt: '2025-01-15',
    keywords: ['convert ts to mp4', 'ts to mp4 converter', 'free ts converter', 'vlc convert ts', 'gamechanger mp4 conversion'],
    category: 'tutorial',
    readingTime: '5 min read',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  return getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.category === currentPost.category)
    .slice(0, limit);
}
