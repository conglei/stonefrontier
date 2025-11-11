'use client'

export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 text-[#8a8a8a] sm:px-6 md:px-10 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="text-white whitespace-nowrap">StoneFrontier</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="/legal/privacy-policy" className="transition-colors hover:text-[#4E7DFF] whitespace-nowrap">
              Privacy
            </a>
            <a href="/legal/terms-of-service" className="transition-colors hover:text-[#4E7DFF] whitespace-nowrap">
              Terms
            </a>
          </div>
          <p className="text-white text-center md:text-left whitespace-nowrap">Human intention. AI expansion.</p>
        </div>
      </div>
    </footer>
  )
}
