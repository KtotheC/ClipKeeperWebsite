import type { LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export default function StepCard({ icon: Icon, title, children }: StepCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 my-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
          <div className="text-gray-600">{children}</div>
        </div>
      </div>
    </div>
  );
}
