import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ClipKeeper - Download GameChanger Video Clips',
  description:
    'Download and backup your kids\' GameChanger sports videos. One-click downloads, smart file naming, and batch export for baseball, softball, and basketball clips.',
  keywords: [
    'gamechanger video download',
    'download gamechanger clips',
    'gamechanger backup',
    'youth sports video download',
    'baseball clips download',
    'softball video backup',
  ],
  authors: [{ name: 'ClipKeeper' }],
  openGraph: {
    title: 'ClipKeeper - Download GameChanger Video Clips',
    description:
      'Download and backup your kids\' GameChanger sports videos. One-click downloads, smart file naming, and batch export.',
    url: 'https://clipkeeper.app',
    siteName: 'ClipKeeper',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClipKeeper - Download GameChanger Video Clips',
    description:
      'Download and backup your kids\' GameChanger sports videos. One-click downloads, smart file naming, and batch export.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
