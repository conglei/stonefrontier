import { getLearnArticles } from './utils'
import { ArticleCard } from '../components/ArticleCard'
import { Metadata } from 'next'
import { baseUrl } from '../sitemap'

export const metadata: Metadata = {
  title: 'Learn & Resources',
  description: 'Expert insights, guides, and resources to help you succeed in your job search journey. Learn about resume optimization, job discovery, application management, and interview preparation.',
  keywords: [
    'career resources',
    'job search tips',
    'resume writing guide',
    'interview preparation',
    'career advice',
    'job hunting strategies',
    'application management',
    'career development',
  ],
  openGraph: {
    title: 'Learn & Resources | Suminos',
    description: 'Expert insights, guides, and resources to help you succeed in your job search journey.',
    url: `${baseUrl}/learn`,
    siteName: 'Suminos',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Learn & Resources')}`,
        width: 1200,
        height: 630,
        alt: 'Learn & Resources - Suminos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn & Resources | Suminos',
    description: 'Expert insights, guides, and resources to help you succeed in your job search journey.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Learn & Resources')}`],
  },
  alternates: {
    canonical: `${baseUrl}/learn`,
  },
}

export default function LearnPage() {
  const articles = getLearnArticles()

  return (
    <div className="min-h-screen bg-[#FBFAFB] dark:bg-[#0f172a]">
      {/* Simple Hero Section */}
      <section className="px-[60px] pt-[100px] pb-[80px] max-md:px-[30px] text-center bg-[#FBFAFB] dark:bg-[#0f172a]">
        <h1 className="mb-4 text-[76px] leading-[101px] tracking-[-1.72px] letter-spacing-[-0.2em] text-black dark:text-white font-normal max-md:text-5xl" style={{ fontFamily: "'BIZ UDP Mincho', serif" }}>
          Learn & Resources
        </h1>
        <p className="text-lg font-normal text-black dark:text-slate-200 max-w-2xl mx-auto">
          Expert insights and guides to help you succeed in your job search journey
        </p>
      </section>

      {/* Articles Grid */}
      <section className="px-[60px] pb-[80px] max-md:px-[30px] bg-[#FBFAFB] dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .sort((a, b) => {
                if (
                  new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                ) {
                  return -1
                }
                return 1
              })
              .map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
