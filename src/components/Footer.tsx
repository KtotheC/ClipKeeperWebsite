import { Download, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-xl text-white">ClipKeeper</span>
            </a>
            <p className="text-sm">Own your sports memories forever.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Chrome Web Store
            </a>
            <a
              href="/contact"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Mail className="w-4 h-4" />
              Support
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} ClipKeeper. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Not affiliated with or endorsed by GameChanger or Dick&apos;s Sporting Goods.
          </p>
        </div>
      </div>
    </footer>
  );
}
