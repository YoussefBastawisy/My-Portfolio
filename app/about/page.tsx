import { genPageMetadata } from 'app/seo'
import JsonLd, { breadcrumbList } from '@/components/JsonLd'
import AboutContent from './AboutContent'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    'Youssef Bastawisy — AI Engineer building production-ready agentic AI systems. Experience, skills, and background across LLMs, RAG, and machine learning.',
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <AboutContent />
    </>
  )
}
