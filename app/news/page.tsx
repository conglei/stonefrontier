import { NewsGrid } from 'app/components/NewsGrid'
import { Metadata } from 'next'
import { baseUrl } from '../sitemap'

export const metadata: Metadata = {
  title: 'News',
  description: 'Stay updated with the latest news and insights from Suminos.',
  keywords: [
    'news',
    'updates',
    'announcements',
    'job search news',
    'career news',
    'industry updates',
  ],
  openGraph: {
    title: 'News | Suminos',
    description: 'Stay updated with the latest news and insights from Suminos.',
    url: `${baseUrl}/news`,
    siteName: 'Suminos',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('News')}`,
        width: 1200,
        height: 630,
        alt: 'News - Suminos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News | Suminos',
    description: 'Stay updated with the latest news and insights from Suminos.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('News')}`],
  },
  alternates: {
    canonical: `${baseUrl}/news`,
  },
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#FBFAFB] dark:bg-[#0f172a]">
      {/* Simple Hero Section */}
      <section className="px-[60px] pt-[100px] pb-[80px] max-md:px-[30px] text-center bg-[#FBFAFB] dark:bg-[#0f172a]">
        <h1 className="mb-4 text-[76px] leading-[101px] tracking-[-1.72px] letter-spacing-[-0.2em] text-black dark:text-white font-normal max-md:text-5xl" style={{ fontFamily: "'BIZ UDP Mincho', serif" }}>
          News
        </h1>
        <p className="text-lg font-normal text-black dark:text-slate-200 max-w-2xl mx-auto">
          Stay informed with the latest updates, insights, and stories from our team
        </p>
      </section>

      {/* News Grid */}
      <section className="px-[60px] pb-[80px] max-md:px-[30px] bg-[#FBFAFB] dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <NewsGrid />
        </div>
      </section>
    </div>
  )
}
