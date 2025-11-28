'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Play, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Own Your Memories Forever
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6"
          >
            Download Your Kids&apos;{' '}
            <span className="text-green-500">GameChanger</span>{' '}
            Video Clips
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            One-click downloads. Smart file naming. Never lose those precious highlights
            again. Back up every clip from youth baseball, softball, and basketball.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
            >
              <Download className="w-5 h-5" />
              Install Free Extension
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors border border-gray-200 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              See How It Works
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Downloads in seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>No account required</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Works on any GameChanger video</span>
            </div>
          </motion.div>
        </div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="max-w-4xl mx-auto">
            <Image
              src="/screenshots/hero.png"
              alt="ClipKeeper extension showing download buttons on GameChanger video clips"
              width={1456}
              height={816}
              className="rounded-xl shadow-2xl"
              priority
            />
          </div>
          {/* Decorative gradient blur */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-green-500/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
