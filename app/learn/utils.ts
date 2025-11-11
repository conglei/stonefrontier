import fs from 'fs'
import path from 'path'
import { Category, FunnelStage } from './types'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  category?: Category
  author?: string
  readTime?: string
  tags?: string[]
  funnelStage?: FunnelStage
  linkTarget?: string // e.g., '/resume-revision', 'https://app.suminos.ai'
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    
    // Handle array values (like tags)
    if (key.trim() === 'tags' && value.startsWith('[') && value.endsWith(']')) {
      (metadata as any)[key.trim()] = value.slice(1, -1).split(',').map(tag => tag.trim().replace(/['"]/g, ''))
    } else {
      (metadata as any)[key.trim()] = value
    }
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

// Get all learn articles (from both /articles/posts and /learn/posts)
export function getLearnArticles(): Array<{ metadata: Metadata; slug: string; content: string }> {
  const articlesDir = path.join(process.cwd(), 'app', 'articles', 'posts')
  const learnDir = path.join(process.cwd(), 'app', 'learn', 'posts')
  
  let articles: Array<{ metadata: Metadata; slug: string; content: string }> = []
  
  // Get articles from /articles/posts
  if (fs.existsSync(articlesDir)) {
    articles = [...articles, ...getMDXData(articlesDir)]
  }
  
  // Get articles from /learn/posts if directory exists
  if (fs.existsSync(learnDir)) {
    articles = [...articles, ...getMDXData(learnDir)]
  }
  
  return articles
}

export function getArticlesByCategory(category: Category): Array<{ metadata: Metadata; slug: string; content: string }> {
  return getLearnArticles().filter(article => article.metadata.category === category)
}

// Re-export formatDate for backward compatibility with server components
export { formatDate } from 'app/lib/date-utils'
