'use client'

import { useState, useMemo } from 'react'
import { Category, CATEGORY_DESCRIPTIONS } from './types'
import { ArticleCard } from '../components/ArticleCard'
import Link from 'next/link'

interface LearnPageClientProps {
  articles: Array<{
    slug: string
    metadata: {
      title: string
      publishedAt: string
      summary: string
      image?: string
      category?: Category
      author?: string
      readTime?: string
      tags?: string[]
    }
  }>
}

export function LearnPageClient({ articles }: LearnPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All')

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') {
      return articles
    }
    return articles.filter(article => article.metadata.category === selectedCategory)
  }, [selectedCategory, articles])

  const categories: (Category | 'All')[] = ['All', ...Object.keys(CATEGORY_DESCRIPTIONS) as Category[]]

  return (
    <>
      {/* Category Filters */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#0060F3] text-white shadow-md'
                  : 'bg-white text-[#4b5563] border border-[#e0e0e0] hover:bg-[#f9fafb]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {selectedCategory !== 'All' && (
          <div className="mt-6 text-center">
            <p className="text-[#6b7280] text-sm mb-4">
              {CATEGORY_DESCRIPTIONS[selectedCategory].description}
            </p>
            <Link
              href={CATEGORY_DESCRIPTIONS[selectedCategory].linkTarget}
              className="inline-block px-6 py-2 bg-[#0060F3] text-white rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors"
            >
              Try {selectedCategory === 'Resume & Profile' ? 'Resume Revision' : selectedCategory} →
            </Link>
          </div>
        )}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles
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
      ) : (
        <div className="text-center py-12">
          <p className="text-[#6b7280] text-lg">No articles found in this category.</p>
        </div>
      )}
    </>
  )
}
