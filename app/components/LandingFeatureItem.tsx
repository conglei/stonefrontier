'use client';

import { ReactNode } from 'react';

interface LandingFeatureItemProps {
  number: number;
  title: string;
  description: string;
  tags: string[];
  illustration: ReactNode;
  isReversed?: boolean;
}

export function LandingFeatureItem({
  number,
  title,
  description,
  tags,
  illustration,
  isReversed = false,
}: LandingFeatureItemProps) {
  return (
    <div className="feature-item-transition mx-auto mb-[120px] grid max-w-[1200px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
      <div className={`feature-content ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] dark:bg-blue-600 text-lg font-semibold text-white">
          {number}
        </div>
        <h3 className="mb-5 text-[32px] font-semibold text-[#1a1a1a] dark:text-white">
          {title}
        </h3>
        <p className="mb-6 text-[15px] font-normal leading-[1.7] text-[#1a1a1a] dark:text-slate-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-[20px] bg-[#eff6ff] dark:bg-slate-800 px-4 py-2 text-[13px] font-medium text-[#2563eb] dark:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={`relative flex min-h-[400px] w-full items-center justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        {illustration}
      </div>
    </div>
  );
}
