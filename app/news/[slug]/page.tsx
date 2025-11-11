import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getNewsPosts } from 'app/news/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  let posts = getNewsPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let post = getNewsPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  const articleUrl = `${baseUrl}/news/${post.slug}`

  return {
    title,
    description,
    keywords: [
      post.metadata.category || '',
      'news',
      'updates',
      'announcements',
    ].filter(Boolean),
    authors: post.metadata.author ? [{ name: post.metadata.author }] : undefined,
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
      authors: post.metadata.author ? [post.metadata.author] : undefined,
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

export default async function NewsDetail({ params }) {
  const { slug } = await params
  let post = getNewsPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBFAFB', fontFamily: "var(--font-merriweather), 'Merriweather', Georgia, serif" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/news" 
          className="inline-flex items-center text-[#6b7280] hover:text-[#111827] mb-8 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to News
        </Link>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsArticle',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/news/${post.slug}`,
              author: {
                '@type': 'Person',
                name: post.metadata.author || 'Suminos Team',
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
                '@id': `${baseUrl}/news/${post.slug}`,
              },
              articleSection: post.metadata.category || 'News',
              wordCount: post.content.split(/\s+/).length,
            }),
          }}
        />

        <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#e0e0e0]">
          {/* Featured Image */}
          {post.metadata.image && (
            <div className="aspect-video relative">
              <Image
                src={post.metadata.image}
                alt={post.metadata.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Category and Date */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center space-x-4 flex-wrap">
                {post.metadata.category && (
                  <span className="bg-[#0060F3] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {post.metadata.category}
                  </span>
                )}
                <span className="text-[#6b7280] text-sm whitespace-nowrap">
                  {formatDate(post.metadata.publishedAt)}
                </span>
              </div>
              {post.metadata.author && (
                <span className="text-[#6b7280] text-sm whitespace-nowrap">
                  By {post.metadata.author}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              {post.metadata.title}
            </h1>

            {/* Summary */}
            <p className="text-lg text-[#4b5563] mb-8 leading-relaxed">
              {post.metadata.summary}
            </p>

            {/* Content */}
            <div 
              className="prose prose-slate max-w-none mb-12 prose-lg prose-headings:font-semibold prose-p:leading-relaxed prose-p:text-[#1a1a1a] prose-p:text-base prose-p:mb-6 prose-headings:text-[#1a1a1a] prose-headings:mb-4 prose-headings:mt-8 prose-a:text-[#0060F3] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1a1a1a] prose-strong:font-semibold prose-ul:text-base prose-ol:text-base prose-li:text-[#1a1a1a] prose-li:mb-2 prose-blockquote:border-l-[#0060F3] prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:bg-[#f9fafb] prose-blockquote:not-italic prose-blockquote:text-[#1a1a1a] prose-blockquote:text-base prose-code:text-sm prose-code:bg-[#f3f4f6] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#1a1a1a] prose-pre:text-white"
              style={{ fontFamily: "var(--font-merriweather), 'Merriweather', Georgia, serif" }}
            >
              <CustomMDX source={post.content} />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
