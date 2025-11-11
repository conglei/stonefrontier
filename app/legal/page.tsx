import { Metadata } from 'next'
import { CustomMDX } from 'app/components/mdx'
import { getLegalDocuments, formatDate } from 'app/legal/utils'
import { baseUrl } from 'app/sitemap'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Legal Documents | StoneFrontier',
    description: 'Legal documents including privacy policy and terms of service for the StoneFrontier website.',
    openGraph: {
      title: 'Legal Documents | StoneFrontier',
      description: 'Legal documents including privacy policy and terms of service for the StoneFrontier website.',
      type: 'website',
      url: `${baseUrl}/legal`,
    },
    twitter: {
      card: 'summary',
      title: 'Legal Documents | StoneFrontier',
      description: 'Legal documents including privacy policy and terms of service for the StoneFrontier website.',
    },
  }
}

export default function LegalPage() {
  let legalDocuments = getLegalDocuments()

  if (legalDocuments.length === 0) {
    return (
      <div 
        className="min-h-screen bg-slate-50 dark:bg-slate-900"
        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-medium text-slate-900 dark:text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              No Legal Documents Found
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              No legal documents are currently available.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="min-h-screen bg-slate-50 dark:bg-slate-900"
      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-slate-900 dark:text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Legal Documents
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Important legal information for using the StoneFrontier website.
          </p>
        </div>

        <div className="space-y-6">
          {legalDocuments.map((doc) => (
            <article key={doc.slug} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
              <div className="px-8 py-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-medium text-slate-900 dark:text-white" style={{ letterSpacing: '-0.02em' }}>
                    {doc.metadata.title}
                  </h2>
                  <a
                    href={`/legal/${doc.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Read Full Document →
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                  {doc.metadata.summary}
                </p>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 space-x-4">
                  <time dateTime={doc.metadata.publishedAt}>
                    {formatDate(doc.metadata.publishedAt)}
                  </time>
                  {doc.metadata.readTime && (
                    <span>{doc.metadata.readTime}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
