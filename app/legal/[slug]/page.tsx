import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getLegalDocuments, formatDate } from 'app/legal/utils'
import { baseUrl } from 'app/sitemap'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  let legalDocuments = getLegalDocuments()

  return legalDocuments.map((doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let { slug } = await params
  let legalDocument = getLegalDocuments().find((doc) => doc.slug === slug)

  if (!legalDocument) {
    return {
      title: 'Legal Document Not Found | StoneFrontier',
      description: 'The requested legal document could not be found.',
    }
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = legalDocument.metadata
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title: `${title} | StoneFrontier`,
    description,
    openGraph: {
      title: `${title} | StoneFrontier`,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/legal/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | StoneFrontier`,
      description,
      images: [ogImage],
    },
  }
}

export default async function LegalDocumentPage({ params }: Props) {
  let { slug } = await params
  let legalDocument = getLegalDocuments().find((doc) => doc.slug === slug)

  if (!legalDocument) {
    notFound()
  }

  return (
    <div 
      className="min-h-screen bg-slate-50 dark:bg-slate-900"
      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
          <div className="px-8 pb-8">
            {/* Content */}
            <div 
              className="prose prose-slate dark:prose-invert max-w-none"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              <CustomMDX source={legalDocument.content} />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
