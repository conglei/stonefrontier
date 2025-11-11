'use client'

import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface ProductCardProps {
  label?: string
  title: string
  description: string
  details?: string
  features?: string[]
  link?: {
    href: string
    text: string
  }
  className?: string
}

export function ProductCard({ 
  label, 
  title, 
  description, 
  details,
  features = [],
  link,
  className = ''
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`border rounded-[6px] p-6 sm:p-8 md:p-10 backdrop-blur-[6px] transition-all duration-300 focus-within:outline-none ${className}`}
      style={{
        borderColor: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.07)',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
    >
      {label && (
        <div className="text-white mb-4 sm:mb-5 text-xs uppercase tracking-wider opacity-70">
          {label}
        </div>
      )}
      {link ? (
        <div className="mb-2 sm:mb-1">
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 sm:gap-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-transparent rounded-sm opacity-90 hover:opacity-100"
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.3)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Image
              src="/logo/logo-darkmode.svg"
              alt={title}
              width={125}
              height={30}
              className="h-auto"
            />
            <ExternalLink 
              size={16} 
              className="flex-shrink-0 opacity-70 text-white" 
              aria-hidden="true"
            />
          </a>
        </div>
      ) : (
        <h3 className="text-white mb-2 sm:mb-1 text-2xl sm:text-[28px] font-[450] tracking-[-0.02em] leading-tight">
          {title}
        </h3>
      )}
      <p className="text-white mb-4 sm:mb-6 md:mb-7 text-base opacity-[0.88] leading-relaxed">
        {description}
      </p>
      {details && (
        <p className="text-white mb-4 sm:mb-6 md:mb-7 text-sm sm:text-sm leading-relaxed sm:leading-[1.55] opacity-[0.80]">
          {details}
        </p>
      )}
      {features.length > 0 && (
        <ul className="text-white mb-4 sm:mb-6 md:mb-7 space-y-2 sm:space-y-3 text-sm sm:text-[15px] leading-relaxed sm:leading-normal opacity-[0.88] list-none pl-0">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 sm:mr-3 opacity-[0.6] flex-shrink-0 mt-0.5">•</span>
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

