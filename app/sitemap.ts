import { getNewsPosts } from 'app/news/utils'
import { getLearnArticles } from 'app/learn/utils'

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://suminos.ai'

export const dynamic = 'force-static'

export default async function sitemap() {
  let news = getNewsPosts().map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  let learnArticles = getLearnArticles().map((post) => ({
    url: `${baseUrl}/learn/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  let routes = [
    { url: '', priority: 1.0 },
    { url: '/learn', priority: 0.9 },
    { url: '/news', priority: 0.7 },
    { url: '/articles', priority: 0.7 },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))

  return [...routes, ...learnArticles, ...news]
}
