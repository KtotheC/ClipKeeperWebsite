import { Metadata } from 'next';
import SuccessContent from './SuccessContent';

export const metadata: Metadata = {
  title: 'Payment Successful - ClipKeeper',
  description: 'Your ClipKeeper Pro purchase was successful. Get your license key here.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return <SuccessContent />;
}
