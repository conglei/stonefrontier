'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function LandingHeader() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle smooth scroll on the homepage
    if (pathname === '/' && href.includes('#')) {
      e.preventDefault();
      const hashIndex = href.indexOf('#');
      const targetId = href.substring(hashIndex + 1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80; // Approximate header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[500] bg-[rgba(12,12,12,0.95)] px-6 py-5 text-white transition-colors duration-500 sm:px-10" style={{ paddingTop: 'max(1.25rem, env(safe-area-inset-top))', paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="no-underline text-white transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo/logo-stonefrontier.svg"
            alt="StoneFrontier"
            width={220}
            height={16}
            className="h-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]">
          <div className="hidden sm:flex items-center gap-2">
            <Link 
              href="/#philosophy" 
              onClick={(e) => handleNavClick(e, '/#philosophy')}
              className="px-3 py-2 text-[#8a8a8a] transition-colors hover:text-[#4E7DFF]"
            >
              Philosophy
            </Link>
            <Link 
              href="/#products" 
              onClick={(e) => handleNavClick(e, '/#products')}
              className="px-3 py-2 text-[#8a8a8a] transition-colors hover:text-[#4E7DFF]"
            >
              Work
            </Link>
            <Link 
              href="/#contact" 
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="px-3 py-2 text-[#8a8a8a] transition-colors hover:text-[#4E7DFF]"
            >
              Contact
            </Link>
          </div>
          <Link 
            href="/about" 
            className={`px-3 py-2 transition-colors hover:text-[#4E7DFF] ${pathname === '/about' ? 'text-white' : 'text-[#8a8a8a]'}`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
