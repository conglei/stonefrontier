import './global.css'
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { LandingHeader } from './components/LandingHeader'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '500'], // Only regular and medium weights, no bold
  display: 'swap'
})
const merriweather = Merriweather({ 
  subsets: ['latin'], 
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900']
})

const defaultFontVariable = '--font-inter'
const defaultFontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { PostHogProvider } from './components/PostHogProvider'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'StoneFrontier',
    template: '%s | StoneFrontier',
  },
  description: 'StoneFrontier builds calm, contextual AI that supports human thinking, decision making, and day-to-day work.',
  keywords: [
    'StoneFrontier',
    'AI studio',
    'calm technology',
    'human-centered AI',
    'Suminos',
    'product studio',
    'decision intelligence',
  ],
  authors: [{ name: 'Conglei Shi' }],
  creator: 'StoneFrontier',
  publisher: 'StoneFrontier',
  icons: {
    icon: [
      { url: '/images/icon.ico', sizes: 'any' },
      { url: '/images/icon-120.png', sizes: '120x120', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icon-120.png', sizes: '120x120', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'StoneFrontier',
    description: 'StoneFrontier builds calm, contextual AI that supports human thinking and decision making.',
    url: baseUrl,
    siteName: 'StoneFrontier',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('StoneFrontier')}`,
        width: 1200,
        height: 630,
        alt: 'StoneFrontier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StoneFrontier',
    description: 'Calm, contextual AI products that keep people in control.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('StoneFrontier')}`],
    creator: '@stonefrontier',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html
        lang="en"
        suppressHydrationWarning
        className={cx(
          'text-black dark:text-white',
          inter.variable,
          merriweather.variable
        )}
      >
        <body className="antialiased bg-[#0C0C0C]" style={{ fontFamily: `var(${defaultFontVariable}), ${defaultFontFamily}` }}>
        <PostHogProvider>
          <LandingHeader />
          <main className="min-h-screen pt-20 bg-[#0C0C0C] flex flex-col">
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </PostHogProvider>
      </body>
    </html>
  )
}
