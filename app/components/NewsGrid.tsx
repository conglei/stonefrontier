import { NewsCard } from './NewsCard'
import { getNewsPosts } from 'app/news/utils'

export function NewsGrid() {
  let allNews = getNewsPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allNews
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <NewsCard key={post.slug} post={post} />
        ))}
    </div>
  )
}
