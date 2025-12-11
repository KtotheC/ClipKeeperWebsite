'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What file format are the downloads?',
    answer:
      '.ts (MPEG Transport Stream) files. This format plays in VLC, Windows Media Player, and most modern video players. Convert to MP4 using free tools like VLC or HandBrake if needed.',
  },
  {
    question: 'Why .ts instead of .mp4?',
    answer:
      "Chrome security policies prevent in-browser conversion. The .ts format is GameChanger's native format, giving you the original quality without re-encoding.",
  },
  {
    question: 'Is this legal?',
    answer:
      'Yes. You are downloading videos of your own children that you already have access to through GameChanger. ClipKeeper helps you backup personal family memories you already own.',
  },
  {
    question: 'What if GameChanger changes something?',
    answer:
      'ClipKeeper is actively maintained and updated when needed. Contact support@getclipkeeper.com if you encounter any issues.',
  },
  {
    question: 'Do I need a GameChanger subscription?',
    answer:
      'Yes. ClipKeeper downloads videos you already have access to through your GameChanger account. It does not grant access to new content.',
  },
  {
    question: 'How do I get support?',
    answer:
      'Email support@getclipkeeper.com. Pro users receive priority support with faster response times.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-gray-900 pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about ClipKeeper
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl px-6 sm:px-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
