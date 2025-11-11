'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems: Record<string, { name: string }> = {
  // '/news': {
  //   name: 'News',
  // }
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <img
                src="/images/logo.png"
                alt="Suminos Logo"
                className="h-6 dark:hidden"
              />
              <img
                src="/images/logo-dark.png"
                alt="Suminos Logo"
                className="h-6 hidden dark:block"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="https://app.suminos.ai"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Sign In
              </a>
              <a
                href="https://app.suminos.ai"
                className="btn-primary text-sm px-4 py-2"
              >
                Get Started
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-t border-slate-200 dark:border-slate-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                {/* Navigation items */}
                {Object.entries(navItems).map(([path, { name }]) => (
                  <Link
                    key={path}
                    href={path}
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    {name}
                  </Link>
                ))}
                
                {/* Auth buttons */}
                <div className="pt-4 pb-2 border-t border-slate-200 dark:border-slate-700">
                  <a
                    href="https://app.suminos.ai"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    Sign In
                  </a>
                  <a
                    href="https://app.suminos.ai"
                    onClick={closeMobileMenu}
                    className="block mt-2 mx-3 btn-primary text-sm px-4 py-2 text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
