'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './nav'

export default function NavOnNonHome() {
  const pathname = usePathname()
  if (pathname === '/') return null
  return <Navbar />
}


