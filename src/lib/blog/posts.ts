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
    publishedAt: '2025-12-01',
    keywords: ['download gamechanger video', 'gamechanger clips', 'save gamechanger videos', 'gamechanger video download', 'gamechanger backup'],
    category: 'tutorial',
    readingTime: '5 min read',
    featured: true,
  },
  {
    slug: 'save-gamechanger-clips-to-iphone',
    title: 'Save GameChanger Clips to iPhone (2025 Guide)',
    description: 'Learn how to save GameChanger video clips directly to your iPhone camera roll. Step-by-step guide for parents who want their sports memories on mobile.',
    publishedAt: '2025-12-01',
    keywords: ['save gamechanger clips to iphone', 'gamechanger iphone download', 'transfer gamechanger videos', 'gamechanger mobile backup', 'sports clips to phone'],
    category: 'tutorial',
    readingTime: '4 min read',
  },
  {
    slug: 'screen-record-gamechanger-alternative',
    title: 'Stop Screen Recording GameChanger (There\'s a Better Way)',
    description: 'Stop wasting time screen recording GameChanger videos. Learn why it produces poor quality and discover a one-click alternative that saves HD clips instantly.',
    publishedAt: '2025-12-01',
    keywords: ['screen record gamechanger', 'gamechanger screen recording', 'record gamechanger video', 'gamechanger capture', 'gamechanger video quality'],
    category: 'guide',
    readingTime: '4 min read',
  },
  {
    slug: 'baseball-recruiting-video-tips',
    title: 'Baseball Recruiting Video: How to Make One from GameChanger (2025)',
    description: "Create a baseball recruiting video that gets coaches' attention. Use your GameChanger clips to build a highlight reel. Expert tips from college coaches.",
    publishedAt: '2025-12-01',
    keywords: ['baseball recruiting video tips', 'college baseball highlights', 'recruiting video guide', 'baseball showcase video', 'gamechanger recruiting'],
    category: 'tutorial',
    readingTime: '7 min read',
  },
  {
    slug: 'sports-highlight-reel-maker',
    title: 'Best Free Tools to Edit Youth Sports Highlight Reels (2025)',
    description: 'Compare the top sports highlight reel maker tools for youth athletes. Learn how to turn GameChanger clips into professional-looking highlight videos.',
    publishedAt: '2025-12-01',
    keywords: ['sports highlight reel maker', 'highlight video creator', 'youth sports highlights', 'baseball highlight reel', 'softball highlight video'],
    category: 'guide',
    readingTime: '6 min read',
  },
  {
    slug: 'share-gamechanger-to-instagram-tiktok',
    title: 'How to Share GameChanger Videos to Instagram & TikTok',
    description: 'How to post GameChanger video clips to Instagram Reels and TikTok. Download, convert, and share your youth sports highlights on social media.',
    publishedAt: '2025-12-02',
    keywords: ['share gamechanger to instagram', 'gamechanger tiktok', 'post gamechanger clips', 'gamechanger social media', 'sports videos instagram'],
    category: 'tutorial',
    readingTime: '5 min read',
  },
  {
    slug: 'gamechanger-premium-vs-free-features',
    title: 'GameChanger Premium vs Free: Is Video Worth $99/Year?',
    description: 'Complete breakdown of GameChanger Premium features vs the free version. Learn what you get for $99/year and whether the upgrade is worth it for video access.',
    publishedAt: '2025-12-02',
    keywords: ['gamechanger premium features', 'gamechanger pro plus', 'gamechanger subscription cost', 'gamechanger free vs paid', 'gamechanger premium worth it'],
    category: 'comparison',
    readingTime: '6 min read',
  },
  {
    slug: 'play-ts-file-mac-windows',
    title: 'How to Play .TS Files on Mac & Windows (Easy Guide)',
    description: 'Learn how to open and play .ts video files on Mac, Windows, and iPhone. Free players, conversion tools, and why GameChanger uses this format.',
    publishedAt: '2025-12-02',
    keywords: ['play ts file mac', 'play ts file windows', 'open ts file', 'ts file player', 'what is ts file format'],
    category: 'tutorial',
    readingTime: '4 min read',
  },
  {
    slug: 'sidelinehd-vs-gamechanger',
    title: 'SidelineHD vs GameChanger: Which is Better for Youth Sports? (2025)',
    description: 'Detailed comparison of SidelineHD and GameChanger for youth sports video. Features, pricing, video quality, and download options compared.',
    publishedAt: '2025-12-02',
    updatedAt: '2025-12-11',
    keywords: ['sidelinehd vs gamechanger', 'gamechanger alternative', 'sidelinehd review', 'youth sports video app', 'best sports video platform', 'sidelinehd download videos', 'gamechanger vs sidelinehd video quality'],
    category: 'comparison',
    readingTime: '7 min read',
  },
  {
    slug: 'convert-ts-to-mp4',
    title: 'Convert TS to MP4 Free: 3 Methods That Work in 2025',
    description: 'Convert .ts files to MP4 in minutes using free tools. 3 proven methods for GameChanger videos - VLC, HandBrake, or online. Step-by-step guide.',
    publishedAt: '2025-12-02',
    keywords: ['convert ts to mp4', 'ts to mp4 converter', 'free ts converter', 'vlc convert ts', 'gamechanger mp4 conversion'],
    category: 'tutorial',
    readingTime: '5 min read',
  },
  {
    slug: 'why-cant-i-download-gamechanger-videos',
    title: "Why Can't I Download Videos from GameChanger? (2025 Solution)",
    description: "Frustrated you can't download GameChanger videos? Learn why there's no download button, and discover the simple Chrome extension that lets you save your kids' sports clips forever.",
    publishedAt: '2025-12-11',
    keywords: ['why cant i download gamechanger videos', 'download gamechanger videos', 'gamechanger no download button', 'save gamechanger clips', 'gamechanger download problem', 'gamechanger video download not working', 'backup gamechanger videos'],
    category: 'guide',
    readingTime: '4 min read',
  },
  {
    slug: 'download-gamechanger-basketball-clips',
    title: 'How to Download GameChanger Basketball Clips (2025 Guide)',
    description: "Save your kid's basketball highlights from GameChanger. Step-by-step guide to download dunks, three-pointers, and all those amazing plays. Free Chrome extension.",
    publishedAt: '2025-12-11',
    keywords: ['download gamechanger basketball', 'gamechanger basketball clips', 'basketball highlights download', 'save gamechanger basketball video', 'youth basketball video download', 'gamechanger basketball highlights', 'aau basketball video download'],
    category: 'tutorial',
    readingTime: '5 min read',
  },
  {
    slug: 'download-gamechanger-soccer-clips',
    title: 'How to Download GameChanger Soccer Clips (2025 Guide)',
    description: "Save your kid's soccer goals and highlights from GameChanger. Easy guide to download soccer video clips. Works for all youth soccer leagues year-round.",
    publishedAt: '2025-12-11',
    keywords: ['download gamechanger soccer', 'gamechanger soccer video', 'soccer highlights download', 'save gamechanger soccer clips', 'youth soccer video download', 'gamechanger soccer clips', 'travel soccer video backup'],
    category: 'tutorial',
    readingTime: '5 min read',
  },
  {
    slug: 'basketball-recruiting-video-guide',
    title: 'How to Make a Basketball Recruiting Video from GameChanger (2025)',
    description: "Create a standout basketball recruiting video using GameChanger clips. Expert tips on what college coaches want to see in AAU and high school highlight reels.",
    publishedAt: '2025-12-11',
    keywords: ['basketball recruiting video', 'aau highlight reel', 'basketball highlights for coaches', 'college basketball recruiting video', 'how to make basketball highlight video', 'basketball showcase video', 'gamechanger basketball recruiting'],
    category: 'guide',
    readingTime: '7 min read',
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
