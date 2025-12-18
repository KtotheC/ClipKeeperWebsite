'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Download, Sparkles, Loader2 } from 'lucide-react';

const SUPABASE_URL = 'https://usvlgqtbvsnuiefvpoda.supabase.co/functions/v1';

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
    ctaLink: 'https://chromewebstore.google.com/detail/clipkeeper-download-gamec/beelllgidjaklbnacknjkghfibfpjhac',
    highlighted: false,
    plan: null,
  },
  {
    name: 'Pro Monthly',
    price: '$5',
    period: '/month',
    description: 'Flexible month-to-month',
    features: [
      'Unlimited downloads',
      'Batch download entire games',
      'Download by player filter',
      'Priority support',
    ],
    cta: 'Get Pro Monthly',
    ctaLink: null,
    highlighted: false,
    plan: 'monthly',
  },
  {
    name: 'Pro Yearly',
    price: '$29',
    period: '/year',
    badge: 'Save 52%',
    description: 'Best value for the season',
    features: [
      'Unlimited downloads',
      'Batch download entire games',
      'Download by player filter',
      'Priority support',
    ],
    cta: 'Get Pro Yearly',
    ctaLink: null,
    highlighted: true,
    plan: 'yearly',
  },
];

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (plan: string) => {
    setLoading(plan);
    try {
      const response = await fetch(`${SUPABASE_URL}/create-checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error creating checkout session. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Error creating checkout session. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 relative ${
                plan.highlighted
                  ? 'bg-green-500 text-white ring-4 ring-green-500/20 scale-105'
                  : 'bg-gray-50 text-gray-900'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

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
                <button
                  onClick={() => handleCheckout(plan.plan!)}
                  disabled={loading !== null}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors disabled:opacity-70 ${
                    plan.highlighted
                      ? 'bg-white text-green-600 hover:bg-green-50'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {loading === plan.plan ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      {plan.cta}
                    </>
                  )}
                </button>
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
          GameChanger Premium costs $99/year. ClipKeeper Pro is just $29/year to own your
          memories forever.
        </motion.p>
      </div>
    </section>
  );
}
