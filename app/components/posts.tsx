import Link from 'next/link'
import { formatDate } from 'app/news/utils'
import { getNewsPosts } from 'app/news/utils'
import { getLearnArticles } from 'app/learn/utils'

export function BlogPosts() {
  let allNews = getNewsPosts()
  let allArticles = getLearnArticles()
  let allPosts = [...allNews, ...allArticles]

  return (
    <div>
      {allPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => {
          const isNews = allNews.includes(post)
          const href = isNews ? `/news/${post.slug}` : `/learn/${post.slug}`
          return (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={href}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <span className={`text-xs px-2 py-1 rounded-full ml-2 ${
                  isNews 
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {isNews ? 'News' : 'Learn'}
                </span>
              </div>
            </Link>
          )
        })}
    </div>
  )
}
