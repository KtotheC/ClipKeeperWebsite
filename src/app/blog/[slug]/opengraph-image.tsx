import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/blog/posts';

export const runtime = 'edge';
export const alt = 'ClipKeeper Blog Post';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const categoryColors: Record<string, { bg: string; text: string }> = {
  tutorial: { bg: '#dcfce7', text: '#166534' },
  comparison: { bg: '#dbeafe', text: '#1e40af' },
  guide: { bg: '#fef3c7', text: '#92400e' },
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: '#22c55e',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'white', fontSize: 48 }}>ClipKeeper Blog</span>
        </div>
      ),
      { ...size }
    );
  }

  const categoryStyle = categoryColors[post.category] || categoryColors.guide;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
          padding: 60,
        }}
      >
        {/* Top bar with logo and category */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                width: 56,
                height: 56,
                backgroundColor: 'white',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <span
              style={{
                color: 'white',
                fontSize: 32,
                fontWeight: 700,
              }}
            >
              ClipKeeper
            </span>
          </div>

          {/* Category badge */}
          <div
            style={{
              display: 'flex',
              backgroundColor: categoryStyle.bg,
              color: categoryStyle.text,
              padding: '8px 20px',
              borderRadius: 999,
              fontSize: 20,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            {post.category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              color: 'white',
              fontSize: post.title.length > 60 ? 48 : 56,
              fontWeight: 700,
              lineHeight: 1.2,
              margin: 0,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            {post.title}
          </h1>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 24,
            }}
          >
            getclipkeeper.com/blog
          </span>
          <span
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 20,
            }}
          >
            {post.readingTime}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
