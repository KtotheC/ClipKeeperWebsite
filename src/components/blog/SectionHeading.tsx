import NumberBadge from './NumberBadge';

interface SectionHeadingProps {
  number: number;
  children: React.ReactNode;
}

export default function SectionHeading({ number, children }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mt-12 mb-4">
      <NumberBadge number={number} />
      {children}
    </h2>
  );
}
