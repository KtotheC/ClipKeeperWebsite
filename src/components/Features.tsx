'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Zap, FolderOpen } from 'lucide-react';

const features = [
  {
    icon: Download,
    title: 'One-Click Downloads',
    description:
      'Download any GameChanger clip instantly. Just click the green button that appears on each video card.',
  },
  {
    icon: FileText,
    title: 'Smart File Naming',
    description:
      'Files are automatically named with player, play type, and inning. No more "video_001.ts" confusion.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Downloads complete in seconds, not minutes. Our extension grabs videos directly without re-encoding.',
  },
  {
    icon: FolderOpen,
    title: 'Batch Downloads',
    description:
      'Pro users can download entire games with one click. Perfect for end-of-season highlight reels.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Save Your Memories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ClipKeeper makes it simple to download, organize, and keep your family&apos;s
            sports highlights forever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
