import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-24 sm:px-10 lg:px-0 ${className}`}>
      <div className="mx-auto max-w-5xl flex flex-col gap-6">
        {children}
      </div>
    </section>
  )
}

