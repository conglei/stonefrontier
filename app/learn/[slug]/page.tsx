import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getLearnArticles } from 'app/learn/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  let articles = getLearnArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let article = getLearnArticles().find((article) => article.slug === slug)
  if (!article) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = article.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  const articleUrl = `${baseUrl}/learn/${article.slug}`
  const tags = article.metadata.tags || []

  return {
    title,
    description,
    keywords: [
      ...tags,
      article.metadata.category || '',
      'job search',
      'career advice',
      'resume tips',
    ].filter(Boolean),
    authors: article.metadata.author ? [{ name: article.metadata.author }] : undefined,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: articleUrl,
      siteName: 'Suminos',
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      authors: article.metadata.author ? [article.metadata.author] : undefined,
      tags: tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@suminos',
    },
    alternates: {
      canonical: articleUrl,
    },
  }
}

function getCTAContent(category?: string, linkTarget?: string) {
  if (!category || !linkTarget) return null

  const ctaConfigs: Record<string, { title: string; description: string }> = {
    'Resume & Profile': {
      title: 'Improve your resume with AI',
      description: 'Get AI-powered resume feedback tailored to your target roles',
    },
    'Job Discovery': {
      title: 'See how AI finds your perfect role',
      description: 'Let AI discover opportunities that match your experience and goals',
    },
    'Application Management': {
      title: 'Track your applications effortlessly',
      description: 'Stay organized with our comprehensive application tracker',
    },
    'Interview Prep': {
      title: 'Prepare for interviews with confidence',
      description: 'Practice with AI-generated questions and get personalized tips',
    },
    'Career Insights': {
      title: 'Start your career journey',
      description: 'Join Suminos and take control of your job search',
    },
  }

  const config = ctaConfigs[category]
  if (!config) return null

  return {
    ...config,
    linkTarget: linkTarget || 'https://app.suminos.ai',
  }
}

export default async function LearnArticleDetail({ params }) {
  const { slug } = await params
  let article = getLearnArticles().find((article) => article.slug === slug)

  if (!article) {
    notFound()
  }

  const ctaContent = getCTAContent(article.metadata.category, article.metadata.linkTarget)

  return (
    <div className="min-h-screen bg-[#FBFAFB] dark:bg-[#0f172a]" style={{ fontFamily: "var(--font-merriweather), 'Merriweather', Georgia, serif" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/learn" 
          className="inline-flex items-center text-[#6b7280] dark:text-slate-400 hover:text-[#111827] dark:hover:text-white mb-8 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Learn
        </Link>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.metadata.title,
              datePublished: article.metadata.publishedAt,
              dateModified: article.metadata.publishedAt,
              description: article.metadata.summary,
              image: article.metadata.image
                ? `${baseUrl}${article.metadata.image}`
                : `${baseUrl}/og?title=${encodeURIComponent(article.metadata.title)}`,
              url: `${baseUrl}/learn/${article.slug}`,
              author: {
                '@type': 'Person',
                name: article.metadata.author || 'Suminos Career Expert',
                url: baseUrl,
              },
              publisher: {
                '@type': 'Organization',
                name: 'Suminos',
                url: baseUrl,
                logo: {
                  '@type': 'ImageObject',
                  url: `${baseUrl}/images/icon-120.png`,
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${baseUrl}/learn/${article.slug}`,
              },
              articleSection: article.metadata.category || 'Career Advice',
              keywords: article.metadata.tags?.join(', ') || '',
              wordCount: article.content.split(/\s+/).length,
              timeRequired: article.metadata.readTime || 'PT5M',
            }),
          }}
        />

        <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-[#e0e0e0] dark:border-slate-700">
          {/* Featured Image */}
          {article.metadata.image && (
            <div className="aspect-video relative">
              <Image
                src={article.metadata.image}
                alt={article.metadata.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Category and Date */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center space-x-4 flex-wrap">
                {article.metadata.category && (
                  <span className="bg-[#0060F3] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {article.metadata.category}
                  </span>
                )}
                {article.metadata.funnelStage && (
                  <span className="bg-[#f3f4f6] dark:bg-slate-700 text-[#6b7280] dark:text-slate-300 text-xs font-medium px-2 py-1 rounded-full">
                    {article.metadata.funnelStage}
                  </span>
                )}
                <span className="text-[#6b7280] dark:text-slate-400 text-sm">
                  {formatDate(article.metadata.publishedAt)}
                </span>
                {article.metadata.readTime && (
                  <span className="text-[#6b7280] dark:text-slate-400 text-sm">
                    {article.metadata.readTime}
                  </span>
                )}
              </div>
              {article.metadata.author && (
                <span className="text-[#6b7280] dark:text-slate-400 text-sm">
                  By {article.metadata.author}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-medium text-[#1a1a1a] dark:text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              {article.metadata.title}
            </h1>

            {/* Summary */}
            <p className="text-lg text-[#4b5563] dark:text-slate-300 mb-8 leading-relaxed">
              {article.metadata.summary}
            </p>

            {/* Tags */}
            {article.metadata.tags && article.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {article.metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f3f4f6] dark:bg-slate-700 text-[#6b7280] dark:text-slate-300 text-sm px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            <div 
              className="prose prose-slate dark:prose-invert max-w-none mb-12 prose-lg prose-headings:font-medium prose-p:leading-relaxed prose-p:text-[#1a1a1a] dark:prose-p:text-slate-200 prose-p:text-base prose-p:mb-6 prose-headings:text-[#1a1a1a] dark:prose-headings:text-white prose-headings:mb-4 prose-headings:mt-8 prose-a:text-[#0060F3] dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1a1a1a] dark:prose-strong:text-slate-200 prose-strong:font-medium prose-ul:text-base prose-ol:text-base prose-li:text-[#1a1a1a] dark:prose-li:text-slate-300 prose-li:mb-2 prose-blockquote:border-l-[#0060F3] dark:prose-blockquote:border-l-blue-500 prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:bg-[#f9fafb] dark:prose-blockquote:bg-slate-900 prose-blockquote:not-italic prose-blockquote:text-[#1a1a1a] dark:prose-blockquote:text-slate-200 prose-blockquote:text-base prose-code:text-sm prose-code:bg-[#f3f4f6] dark:prose-code:bg-slate-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[#1a1a1a] dark:prose-code:text-slate-200 prose-pre:bg-[#1a1a1a] dark:prose-pre:bg-slate-900 prose-pre:text-white dark:prose-pre:text-slate-200"
              style={{ fontFamily: "var(--font-merriweather), 'Merriweather', Georgia, serif" }}
            >
              <CustomMDX source={article.content} />
            </div>

            {/* CTA Section */}
            {ctaContent && (
              <div className="mt-12 pt-8 border-t border-[#e0e0e0] dark:border-slate-700">
                <h3 className="text-lg font-medium text-[#1a1a1a] dark:text-white mb-2">
                  {ctaContent.title}
                </h3>
                <p className="text-[#6b7280] dark:text-slate-400 text-sm mb-4">
                  {ctaContent.description}
                </p>
                <Link
                  href={ctaContent.linkTarget}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-[#0060F3] text-white text-sm rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors"
                >
                  Try Suminos Free →
                </Link>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}
