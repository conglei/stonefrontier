'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 text-[#8a8a8a] sm:px-6 md:px-10 md:py-10" style={{ paddingBottom: 'max(2.5rem, calc(2.5rem + env(safe-area-inset-bottom)))' }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="text-white text-center md:text-left whitespace-nowrap order-1 md:order-3">Human intention. AI expansion.</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6 order-2 md:order-1">
            <div className="hidden md:block">
              <Image
                src="/logo/logo-stonefrontier.svg"
                alt="StoneFrontier"
                width={180}
                height={16}
                className="h-auto"
              />
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:justify-start">
              <a href="/legal/privacy-policy" className="transition-colors hover:text-[#4E7DFF] whitespace-nowrap">
                Privacy
              </a>
              <a href="/legal/terms-of-service" className="transition-colors hover:text-[#4E7DFF] whitespace-nowrap">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
