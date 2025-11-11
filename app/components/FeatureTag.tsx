interface FeatureTagProps {
  children: React.ReactNode;
}

export function FeatureTag({ children }: FeatureTagProps) {
  return (
    <span className="feature-tag px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
      {children}
    </span>
  );
}
