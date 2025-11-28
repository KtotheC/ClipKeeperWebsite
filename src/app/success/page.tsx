'use client';

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle, Copy, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const SUPABASE_URL = 'https://usvlgqtbvsnuiefvpoda.supabase.co/functions/v1';

interface LicenseData {
  license_key: string;
  status: string;
  valid_until: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [license, setLicense] = useState<LicenseData | null>(null);
  const [copied, setCopied] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const fetchLicense = useCallback(async () => {
    if (!sessionId) {
      setError('No session ID found. Please contact support.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${SUPABASE_URL}/get-license-status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId }),
      });

      const data = await response.json();

      if (data.license_key) {
        setLicense(data);
        setLoading(false);
      } else if (data.pending) {
        // License not ready yet, retry
        setAttempts(prev => prev + 1);
        if (attempts < 15) {
          setTimeout(fetchLicense, 2000);
        } else {
          setError('License generation is taking longer than expected. Please check your email or contact support.');
          setLoading(false);
        }
      } else {
        setError(data.error || 'Failed to retrieve license');
        setLoading(false);
      }
    } catch (err) {
      console.error('Error fetching license:', err);
      setAttempts(prev => prev + 1);
      if (attempts < 15) {
        setTimeout(fetchLicense, 2000);
      } else {
        setError('Network error. Please refresh the page or contact support.');
        setLoading(false);
      }
    }
  }, [sessionId, attempts]);

  useEffect(() => {
    fetchLicense();
  }, [fetchLicense]);

  const copyToClipboard = async () => {
    if (license?.license_key) {
      await navigator.clipboard.writeText(license.license_key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8"
      >
        {loading ? (
          <div className="text-center py-8">
            <Loader2 className="w-12 h-12 text-green-500 animate-spin mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Generating Your License...
            </h1>
            <p className="text-gray-600">
              This usually takes a few seconds.
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <Link
              href="/"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Return to homepage
            </Link>
          </div>
        ) : license ? (
          <>
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to ClipKeeper Pro!
              </h1>
              <p className="text-gray-600">
                Your payment was successful. Here&apos;s your license key.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your License Key
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={license.license_key}
                  readOnly
                  className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-lg font-mono text-gray-900 select-all"
                />
                <button
                  onClick={copyToClipboard}
                  className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              {copied && (
                <p className="text-green-600 text-sm mt-2">Copied to clipboard!</p>
              )}
            </div>

            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <h2 className="font-semibold text-gray-900 mb-3">
                How to Activate Your License:
              </h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="font-bold text-green-600">1.</span>
                  Click the ClipKeeper extension icon in Chrome
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-green-600">2.</span>
                  Paste your license key in the &quot;License Key&quot; field
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-green-600">3.</span>
                  Click &quot;Activate&quot; to unlock Pro features
                </li>
              </ol>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>
                Valid until: {new Date(license.valid_until).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="mt-2">
                Questions? Contact us at{' '}
                <a href="mailto:support@getclipkeeper.com" className="text-green-600 hover:underline">
                  support@getclipkeeper.com
                </a>
              </p>
            </div>
          </>
        ) : null}
      </motion.div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center py-8">
          <Loader2 className="w-12 h-12 text-green-500 animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Loading...
          </h1>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SuccessContent />
    </Suspense>
  );
}
