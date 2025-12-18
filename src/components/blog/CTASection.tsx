import Link from 'next/link';
import { Download } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = 'Ready to Save Your Memories?',
  description = 'Install ClipKeeper free and start downloading your GameChanger clips today.',
  buttonText = 'Get ClipKeeper Free',
  buttonHref = 'https://chromewebstore.google.com/detail/clipkeeper-download-gamec/beelllgidjaklbnacknjkghfibfpjhac',
}: CTASectionProps) {
  return (
    <div className="bg-green-500 rounded-xl p-8 my-12 text-center text-white">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-green-100 mb-6">{description}</p>
      <Link
        href={buttonHref}
        className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
      >
        <Download className="w-5 h-5" />
        {buttonText}
      </Link>
    </div>
  );
}
