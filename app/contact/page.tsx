import { genPageMetadata } from 'app/seo'
import JsonLd, { breadcrumbList } from '@/components/JsonLd'
import ContactContent from './ContactContent'

export const metadata = genPageMetadata({
  title: 'Contact',
  description:
    'Get in touch with Youssef Bastawisy — AI Engineer. Available for agentic AI, RAG, and LLM projects. Tell me about what you are building.',
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <ContactContent />
    </>
  )
}
