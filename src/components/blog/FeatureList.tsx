interface FeatureListProps {
  title?: string;
  features: string[];
}

export default function FeatureList({ title, features }: FeatureListProps) {
  return (
    <div className="bg-green-50 rounded-xl p-6 my-8 border border-green-100">
      {title && <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>}
      <ul className="space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
