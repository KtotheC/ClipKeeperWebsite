'use client';

import { motion } from 'framer-motion';
import { Check, Download, Sparkles } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for occasional downloads',
    features: [
      '5 downloads per week',
      'Smart file naming (player, play, inning)',
      'Works on all GameChanger videos',
      'Chrome extension',
    ],
    cta: 'Install Now',
    ctaLink: '#', // Chrome Web Store link will go here
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$30',
    period: '/yr or $5/mo',
    description: 'For parents who want everything',
    features: [
      'Unlimited downloads',
      'Batch download entire games',
      'Download by player filter',
      'Priority support',
    ],
    cta: 'Join Waitlist',
    ctaLink: null, // Uses waitlist form
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more. Less than $2.50/month for unlimited
            access to your family&apos;s sports memories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-green-500 text-white ring-4 ring-green-500/20'
                  : 'bg-gray-50 text-gray-900'
              }`}
            >
              {plan.highlighted && (
                <div className="flex items-center gap-2 text-green-100 mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Most Popular</span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={plan.highlighted ? 'text-green-100' : 'text-gray-500'}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mb-6 ${
                  plan.highlighted ? 'text-green-100' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 ${
                        plan.highlighted ? 'text-green-200' : 'text-green-500'
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.ctaLink ? (
                <a
                  href={plan.ctaLink}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-green-600 hover:bg-green-50'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  {plan.cta}
                </a>
              ) : (
                <div className="flex justify-center">
                  <WaitlistForm />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Price anchoring */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-500 mt-8 text-sm"
        >
          GameChanger Premium costs $99/year. ClipKeeper Pro is just $30/year to own your
          memories forever.
        </motion.p>
      </div>
    </section>
  );
}
