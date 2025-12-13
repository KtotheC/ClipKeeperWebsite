import { Zap } from 'lucide-react';

interface QuickAnswerProps {
  answer: string;
}

export default function QuickAnswer({ answer }: QuickAnswerProps) {
  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r-lg">
      <div className="flex items-start gap-3">
        <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-green-800 text-sm uppercase tracking-wide mb-1">
            Quick Answer
          </p>
          <p className="text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
}
