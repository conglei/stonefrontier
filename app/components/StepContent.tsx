import { FeatureTag } from './FeatureTag';

interface StepContentProps {
  title: string;
  description: string;
  features: string[];
}

export function StepContent({ title, description, features }: StepContentProps) {
  return (
    <div className="flex-1 space-y-4">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <FeatureTag key={index}>
            {feature}
          </FeatureTag>
        ))}
      </div>
    </div>
  );
}
