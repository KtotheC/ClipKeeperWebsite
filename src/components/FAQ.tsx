'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What file format are the downloads?',
    answer:
      'Videos are downloaded as .ts (MPEG Transport Stream) files. This format plays in VLC Media Player, Windows Media Player, and most modern video players. For social media sharing, you can easily convert to MP4 using free tools like VLC or online converters.',
  },
  {
    question: 'Why .ts instead of .mp4?',
    answer:
      "Chrome Extension security policies prevent in-browser video conversion. The .ts format is actually what GameChanger uses internally - we're just giving you direct access to the original quality. The files play just fine in most players.",
  },
  {
    question: 'Is this legal?',
    answer:
      "You're downloading videos of your own children that you already have viewing access to through your GameChanger subscription. ClipKeeper simply helps you exercise your right to backup your personal family memories.",
  },
  {
    question: 'What if GameChanger changes something?',
    answer:
      "We actively monitor GameChanger's video delivery system and update the extension when needed. If you encounter any issues, our support team is here to help.",
  },
  {
    question: 'Do I need a GameChanger subscription?',
    answer:
      'Yes, ClipKeeper works with videos you already have access to through GameChanger. It helps you download and backup clips from your existing subscription.',
  },
  {
    question: 'How do I get support?',
    answer:
      'Free users can reach us via email. Pro users get priority support with faster response times. Just reach out and we\'ll help you troubleshoot any issues.',
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
