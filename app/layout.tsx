import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingElements from '@/components/FloatingElements'
import CursorGlow from '@/components/CursorGlow'
import ScrollToTop from '@/components/ScrollToTop'
import ParticleBackground from '@/components/ParticleBackground'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Youssef Bastawisy',
    url: siteMetadata.siteUrl,
    image: `${siteMetadata.siteUrl}/static/images/Avatar.png`,
    jobTitle: 'Applied AI Engineer & Data Scientist',
    worksFor: {
      '@type': 'Organization',
      name: 'Cycls',
    },
    sameAs: [
      siteMetadata.linkedin,
      siteMetadata.github,
      siteMetadata.email ? `mailto:${siteMetadata.email}` : '',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Large Language Models',
      'RAG Systems',
      'Data Science',
      'Python',
      'TensorFlow',
      'MLOps',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Faculty of Computer Science & AI',
    },
    award: [
      '1st Place - Faculty of Computer Science & AI Graduation Project',
      '94% Accuracy in MMSE Response Interpretation',
    ],
  }

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${basePath}/static/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/static/favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/static/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Youssef Bastawisy" />
        <meta
          name="keywords"
          content="AI Engineer, Data Scientist, Machine Learning, NLP, LLMs, RAG, Python, TensorFlow, Deep Learning, Applied AI"
        />
      </head>
      <body className="overflow-x-hidden bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <ScrollProgress />
          <CursorGlow />
          <FloatingElements />
          <ParticleBackground />
          <ScrollToTop />
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header />
              <main className="relative z-10 mb-auto overflow-hidden">
                <PageTransition>{children}</PageTransition>
              </main>
            </SearchProvider>
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
