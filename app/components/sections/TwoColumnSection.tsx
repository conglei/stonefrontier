import { ReactNode } from 'react';
import { FadeInUp, StaggerContainer } from '../animations';

interface TwoColumnSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'light' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | 'full';
  id?: string;
  reverse?: boolean;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  verticalAlign?: 'start' | 'center' | 'end';
  animate?: boolean;
  stagger?: boolean;
}

export default function TwoColumnSection({ 
  children, 
  className = '', 
  background = 'default',
  padding = 'lg',
  maxWidth = '7xl',
  id,
  reverse = false,
  gap = 'lg',
  verticalAlign = 'center',
  animate = true,
  stagger = false
}: TwoColumnSectionProps) {
  const backgroundClasses = {
    default: 'bg-white dark:bg-slate-900',
    light: 'bg-slate-50 dark:bg-slate-800',
    dark: 'bg-slate-900 dark:bg-slate-950'
  };

  const paddingClasses = {
    sm: 'py-12 px-4 sm:px-6 lg:px-8',
    md: 'py-16 px-4 sm:px-6 lg:px-8',
    lg: 'py-20 px-4 sm:px-6 lg:px-8',
    xl: 'py-24 px-4 sm:px-6 lg:px-8'
  };

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  const verticalAlignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end'
  };

  return (
    <section 
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className={`mx-auto ${maxWidthClasses[maxWidth]}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${gapClasses[gap]} ${verticalAlignClasses[verticalAlign]} ${
          reverse ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {animate ? (
            stagger ? (
              <StaggerContainer staggerDelay={0.2}>
                {children}
              </StaggerContainer>
            ) : (
              <FadeInUp delay={0.1} duration={0.6}>
                {children}
              </FadeInUp>
            )
          ) : (
            children
          )}
        </div>
      </div>
    </section>
  );
}
