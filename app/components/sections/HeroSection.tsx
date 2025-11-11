import { ReactNode } from 'react';
import { FadeInUp } from '../animations';

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'gradient' | 'dark';
  animate?: boolean;
}

export default function HeroSection({ 
  children, 
  className = '', 
  background = 'default',
  animate = true
}: HeroSectionProps) {
  const backgroundClasses = {
    default: 'bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900',
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    dark: 'bg-slate-900 dark:bg-slate-950'
  };

  return (
    <section 
      className={`relative overflow-hidden min-h-screen flex items-center px-4 py-20 sm:px-6 lg:px-8 ${backgroundClasses[background]} ${className}`}
    >
      {/* Minimalist Abstract Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
          {/* Main flowing wave shapes */}
          <div className="absolute top-0 left-0 w-full h-full"> 
            {/* Large flowing wave - top */}
            <div className="absolute -top-32 -left-32 w-[120%] h-96 bg-gradient-to-r from-blue-200/30 via-blue-100/20 to-pink-200/30 dark:from-blue-400/20 dark:via-blue-300/15 dark:to-purple-400/20 rounded-full transform rotate-12 blur-sm"></div>
            
            {/* Medium wave - center left */}
            <div className="absolute top-1/3 -left-16 w-80 h-64 bg-gradient-to-r from-pink-200/25 via-white/15 to-blue-200/25 dark:from-purple-400/20 dark:via-slate-300/10 dark:to-blue-400/20 rounded-full transform -rotate-6 blur-sm"></div>
            
            {/* Small wave - center right */}
            <div className="absolute top-1/2 right-0 w-72 h-48 bg-gradient-to-l from-blue-300/20 via-pink-100/15 to-white/10 dark:from-blue-400/15 dark:via-purple-300/10 dark:to-slate-200/8 rounded-full transform rotate-3 blur-sm"></div>
            
            {/* Bottom flowing wave */}
            <div className="absolute -bottom-24 -right-24 w-[110%] h-80 bg-gradient-to-l from-pink-200/25 via-blue-100/20 to-white/15 dark:from-purple-400/20 dark:via-blue-300/15 dark:to-slate-200/10 rounded-full transform -rotate-12 blur-sm"></div>
          </div>
          
          {/* Layered wave elements for depth */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Subtle overlay waves */}
            <div className="absolute top-1/4 left-1/4 w-64 h-40 bg-gradient-to-br from-blue-300/15 to-pink-200/20 dark:from-blue-400/12 dark:to-purple-300/15 rounded-full transform rotate-45 blur-sm"></div>
            <div className="absolute top-2/3 right-1/4 w-56 h-32 bg-gradient-to-bl from-pink-300/15 to-blue-100/20 dark:from-purple-400/12 dark:to-blue-300/15 rounded-full transform -rotate-30 blur-sm"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-36 bg-gradient-to-tr from-white/20 to-blue-200/15 dark:from-slate-200/15 dark:to-blue-300/12 rounded-full transform rotate-60 blur-sm"></div>
          </div>
          
          {/* Gentle accent curves */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/6 left-1/6 w-32 h-24 bg-gradient-to-r from-blue-200/20 to-transparent dark:from-blue-400/15 dark:to-transparent rounded-full transform rotate-12 blur-sm"></div>
            <div className="absolute top-3/4 right-1/6 w-28 h-20 bg-gradient-to-l from-pink-200/20 to-transparent dark:from-purple-400/15 dark:to-transparent rounded-full transform -rotate-12 blur-sm"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-16 bg-gradient-to-br from-white/25 to-blue-100/15 dark:from-slate-200/20 dark:to-blue-300/12 rounded-full transform rotate-45 blur-sm"></div>
          </div>
        </div>
      
      <div className="relative mx-auto max-w-7xl w-full z-10">
        {animate ? (
          <FadeInUp delay={0.2} duration={0.8}>
            {children}
          </FadeInUp>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
