'use client'

export default function Footer() {
  return (
    <footer className="w-full px-6 py-10 text-[#8a8a8a] sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs uppercase tracking-[0.3em] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white">StoneFrontier</p>
        <div className="flex flex-wrap items-center gap-6">
          <a href="/legal/privacy-policy" className="transition-colors hover:text-[#4E7DFF]">
            Privacy
          </a>
          <a href="/legal/terms-of-service" className="transition-colors hover:text-[#4E7DFF]">
            Terms
          </a>
          <a href="mailto:contact@stonefrontier.co" className="transition-colors hover:text-[#4E7DFF]">
            contact@stonefrontier.co
          </a>
        </div>
        <p className="text-white">Human intention. AI expansion.</p>
      </div>
    </footer>
  )
}
