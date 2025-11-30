import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  message?: string;
}

export default function VideoPlaceholder({ message = 'Tutorial video coming soon' }: VideoPlaceholderProps) {
  return (
    <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center mb-12 border border-gray-200">
      <div className="text-center text-gray-400">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <Play className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
