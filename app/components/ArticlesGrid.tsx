import { ArticleCard } from './ArticleCard'
import { getLearnArticles } from 'app/learn/utils'

export function ArticlesGrid() {
  let allArticles = getLearnArticles()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allArticles
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((article) => (
          <ArticleCard key={article.slug} article={article} basePath="/learn" />
        ))}
    </div>
  )
}
