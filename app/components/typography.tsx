import { ReactNode, CSSProperties } from 'react'
import { FadeInUp } from './animations'

interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  style?: CSSProperties
}

export function Heading({ children, level = 2, className = '', as, style }: HeadingProps) {
  const Component = as || (`h${level}` as 'h1' | 'h2' | 'h3')
  
  const baseStyles = 'font-medium text-white'
  const sizeStyles = {
    1: 'text-4xl sm:text-5xl',
    2: 'text-2xl sm:text-3xl',
    3: 'text-3xl',
  }
  const spacingStyles = {
    1: 'mb-4 sm:mb-6',
    2: 'mb-4 sm:mb-6',
    3: 'mb-6',
  }
  
  const defaultStyle: CSSProperties = { letterSpacing: '-0.02em' }
  const mergedStyle = style ? { ...defaultStyle, ...style } : defaultStyle
  
  return (
    <Component 
      className={`${baseStyles} ${sizeStyles[level]} ${spacingStyles[level]} ${className}`}
      style={mergedStyle}
    >
      {children}
    </Component>
  )
}

interface SectionHeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3
  delay?: number
  className?: string
}

export function SectionHeading({ children, level = 2, delay = 0.1, className = '' }: SectionHeadingProps) {
  return (
    <FadeInUp delay={delay}>
      <Heading level={level} className={className}>
        {children}
      </Heading>
    </FadeInUp>
  )
}

interface BodyTextProps {
  children: ReactNode
  className?: string
  size?: 'base' | 'lg'
}

export function BodyText({ children, className = '', size = 'base' }: BodyTextProps) {
  const sizeStyles = {
    base: 'text-base sm:text-lg',
    lg: 'text-lg',
  }
  
  return (
    <p className={`font-light leading-relaxed text-[#d0d0d0] ${sizeStyles[size]} ${className}`}>
      {children}
    </p>
  )
}

interface LabelProps {
  children: ReactNode
  className?: string
  variant?: 'uppercase' | 'normal'
}

export function Label({ children, className = '', variant = 'uppercase' }: LabelProps) {
  const variantStyles = variant === 'uppercase' 
    ? 'text-xs font-medium uppercase tracking-[0.4em] text-[#8a8a8a]'
    : 'text-xs text-[#8a8a8a]'
  
  return (
    <p className={`${variantStyles} ${className}`} style={variant === 'normal' ? { opacity: 0.6 } : undefined}>
      {children}
    </p>
  )
}

