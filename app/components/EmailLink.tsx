import { Mail } from 'lucide-react'

interface EmailLinkProps {
  email: string
  className?: string
}

export function EmailLink({ email, className = '' }: EmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={`mt-6 inline-flex items-center gap-2 text-base font-medium text-white transition-colors duration-300 hover:text-[#4E7DFF] no-underline ${className}`}
    >
      <Mail size={18} className="flex-shrink-0" />
      {email}
    </a>
  )
}

