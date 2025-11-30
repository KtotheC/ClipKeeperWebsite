interface NumberBadgeProps {
  number: number;
}

export default function NumberBadge({ number }: NumberBadgeProps) {
  return (
    <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg flex-shrink-0">
      {number}
    </span>
  );
}
