'use client';

import Link from 'next/link';

export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] border-b border-[#e0e0e0] dark:border-slate-800 bg-[rgba(250,250,250,0.95)] dark:bg-[rgba(15,23,42,0.95)] backdrop-blur-[10px] px-[60px] py-5 max-md:px-[30px]" style={{ fontFamily: "var(--font-roboto-mono), 'Roboto Mono', monospace" }}>
      <div className="flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 font-['Roboto_Mono',monospace] text-xl font-medium text-[#1a1a1a] dark:text-white no-underline hover:opacity-80 transition-opacity">
          <img 
            src="/logo/logo-normal.svg" 
            alt="Suminos" 
            className="dark:hidden h-[30px] w-auto"
          />
          <img 
            src="/logo/logo-darkmode.svg" 
            alt="Suminos" 
            className="hidden dark:block h-[30px] w-auto"
          />
        </Link>
        <div className="inline-flex items-center gap-3">
          <Link href="/learn" className="px-3 py-2 font-['Roboto_Mono',monospace] text-sm text-[#4b5563] dark:text-slate-300 no-underline transition-colors hover:text-[#111827] dark:hover:text-white">
            Learn
          </Link>
          <a href="https://app.suminos.ai" className="px-3 py-2 font-['Roboto_Mono',monospace] text-sm text-[#4b5563] dark:text-slate-300 no-underline transition-colors hover:text-[#111827] dark:hover:text-white">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
