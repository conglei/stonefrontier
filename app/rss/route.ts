import { baseUrl } from 'app/sitemap'
import { getNewsPosts } from 'app/news/utils'
import {getLearnArticles } from 'app/learn/utils'

export const dynamic = 'force-static'

export async function GET() {
  let allNews = await getNewsPosts()
  let allArticles = await getLearnArticles()
  let allPosts = [...allNews, ...allArticles]

  const itemsXml = allPosts
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .map(
      (post) => {
        const isNews = allNews.includes(post)
        const link = isNews ? `${baseUrl}/news/${post.slug}` : `${baseUrl}/articles/${post.slug}`
        return `<item>
          <title>${post.metadata.title}</title>
          <link>${link}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>`
      }
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Suminos - News & Articles</title>
        <link>${baseUrl}</link>
        <description>Latest news and career articles from Suminos</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
