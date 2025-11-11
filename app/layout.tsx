import './global.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Merriweather } from 'next/font/google'
import { LandingHeader } from './components/LandingHeader'
import { DEFAULT_FONT } from './font-config'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })
const merriweather = Merriweather({ 
  subsets: ['latin'], 
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900']
})

const defaultFontVariable = DEFAULT_FONT === 'roboto-mono' ? '--font-roboto-mono' : '--font-inter'
const defaultFontFamily = DEFAULT_FONT === 'roboto-mono' ? "'Roboto Mono', monospace" : "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { PostHogProvider } from './components/PostHogProvider'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Suminos - Your AI-Powered Job Hunting Companion',
    template: '%s | Suminos',
  },
  description: 'Refine your resume, discover opportunities, apply smarter, and prepare with confidence. The complete AI-powered job hunting platform.',
  keywords: [
    'job hunting',
    'resume optimization',
    'AI resume',
    'job search',
    'career development',
    'interview preparation',
    'job application tracker',
    'AI job matching',
    'resume review',
    'career advice',
    'job opportunities',
    'resume builder',
  ],
  authors: [{ name: 'Suminos Team' }],
  creator: 'Suminos',
  publisher: 'Suminos',
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
    title: 'Suminos - Your AI-Powered Job Hunting Companion',
    description: 'Refine your resume, discover opportunities, apply smarter, and prepare with confidence. The complete AI-powered job hunting platform.',
    url: baseUrl,
    siteName: 'Suminos',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Suminos - Your AI-Powered Job Hunting Companion')}`,
        width: 1200,
        height: 630,
        alt: 'Suminos - AI-Powered Job Hunting Companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suminos - Your AI-Powered Job Hunting Companion',
    description: 'Refine your resume, discover opportunities, apply smarter, and prepare with confidence.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Suminos - Your AI-Powered Job Hunting Companion')}`],
    creator: '@suminos',
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
        className={cx(
          'text-black dark:text-white',
          inter.variable,
          robotoMono.variable,
          merriweather.variable
        )}
      >
        <body className="antialiased bg-[#FBFAFB] dark:bg-[#0f172a]" style={{ fontFamily: `var(${defaultFontVariable}), ${defaultFontFamily}` }}>
        <PostHogProvider>
          <LandingHeader />
          <main className="min-h-screen pt-20 bg-[#FBFAFB] dark:bg-[#0f172a]">
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