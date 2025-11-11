import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from 'app/lib/date-utils'

interface NewsCardProps {
  post: {
    slug: string
    metadata: {
      title: string
      publishedAt: string
      summary: string
      image?: string
      category?: string
      author?: string
    }
  }
}

export function NewsCard({ post }: NewsCardProps) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group block bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-[#e0e0e0] dark:border-slate-700 hover:border-[#d0d0d0] dark:hover:border-slate-600"
    >
      {/* Only show image section if image exists */}
      {post.metadata.image && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {post.metadata.category && (
            <div className="absolute top-3 left-3">
              <span className="bg-[#1a1a1a] dark:bg-slate-800 text-white dark:text-slate-200 text-xs font-medium px-2 py-1 rounded-full">
                {post.metadata.category}
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        {/* Category badge - show at top if no image */}
        {!post.metadata.image && post.metadata.category && (
          <div className="mb-3">
            <span className="bg-[#1a1a1a] dark:bg-slate-800 text-white dark:text-slate-200 text-xs font-medium px-2 py-1 rounded-full">
              {post.metadata.category}
            </span>
          </div>
        )}
        
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#6b7280] dark:text-slate-400 mb-3">
          <span className="whitespace-nowrap">{formatDate(post.metadata.publishedAt)}</span>
        </div>
        
        <h3 className="text-xl font-medium text-[#1a1a1a] dark:text-white mb-3 group-hover:opacity-80 transition-opacity duration-200 line-clamp-2" style={{ letterSpacing: '-0.02em' }}>
          {post.metadata.title}
        </h3>
        
        <p className="text-[#4b5563] dark:text-slate-300 text-sm line-clamp-3 leading-relaxed mb-4">
          {post.metadata.summary}
        </p>
        
        <div className="flex items-center text-[#4b5563] dark:text-slate-400 text-sm font-medium group-hover:gap-2 transition-all duration-200">
          Read article
          <svg 
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
