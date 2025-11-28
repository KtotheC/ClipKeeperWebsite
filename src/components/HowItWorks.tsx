'use client';

import { motion } from 'framer-motion';
import { Download, Chrome, MousePointer, FolderCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Chrome,
    title: 'Install the Extension',
    description:
      'Add ClipKeeper to Chrome from the Web Store. Takes less than 10 seconds.',
  },
  {
    number: '02',
    icon: MousePointer,
    title: 'Go to GameChanger',
    description:
      'Navigate to any video clips page on web.gc.com. ClipKeeper automatically detects videos.',
  },
  {
    number: '03',
    icon: Download,
    title: 'Click Download',
    description:
      'See the green download button on each clip? Click it to save the video to your computer.',
  },
  {
    number: '04',
    icon: FolderCheck,
    title: 'Enjoy Forever',
    description:
      'Your videos are saved locally. Share them, edit them, create highlight reels - they\'re yours.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From install to download in under a minute. No technical skills required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line (hidden on mobile, shown between items) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-green-200" />
              )}

              <div className="bg-white rounded-2xl p-6 shadow-sm relative">
                <span className="text-5xl font-bold text-green-100 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
