'use client';

import Threads from '../Threads';

interface LandingHeroProps {
  headline: React.ReactNode;
  subheadline: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export function LandingHero({ headline, subheadline, ctaText, onCtaClick }: LandingHeroProps) {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const features = document.querySelector('.features') as HTMLElement | null;
      features?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-10 pb-20 bg-[#FBFAFB] dark:bg-[#0f172a] before:absolute before:bottom-[-50%] before:left-[-10%] before:h-full before:w-[80%] before:rounded-full before:bg-gradient-to-br before:from-[rgba(59,130,246,0.03)] dark:before:from-[rgba(59,130,246,0.1)] before:to-transparent before:animate-float-hero after:absolute after:top-[-30%] after:right-[-10%] after:h-[80%] after:w-[70%] after:rounded-full after:bg-gradient-to-bl after:from-[rgba(147,197,253,0.03)] dark:after:from-[rgba(147,197,253,0.1)] after:to-transparent after:animate-float-hero-reverse">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Threads 
          color={[0.2, 0.4, 1.0]} 
          color2={[0.5, 0.0, 0.8]} 
          amplitude={3.8} 
          distance={1.2} 
          enableMouseInteraction={true} 
          style={{ opacity: 0.4 }} 
        />
      </div>
      <div className="relative z-10 max-w-[1000px] text-center">
        <h1 className="mb-8 text-[76px] leading-[101px] tracking-[-1.72px] letter-spacing-[-0.2em] text-black dark:text-white font-normal animate-fade-in-up max-md:text-5xl max-sm:text-4xl" style={{ fontFamily: "'BIZ UDP Mincho', serif" }}>
          {headline}
        </h1>
        <p className="mb-12 text-lg font-normal text-black dark:text-slate-200 animate-fade-in-up-delay-1">
          {subheadline}
        </p>
        <button
          onClick={handleCtaClick}
          className="rounded-lg border-none cursor-pointer bg-[#0060F3] px-10 py-4 text-base text-white font-medium transition-all duration-300 animate-fade-in-up-delay-2 hover:bg-[#1d4ed8] hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(37,99,235,0.2)]"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
}

