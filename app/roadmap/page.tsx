import { genPageMetadata } from 'app/seo'
import JsonLd, { breadcrumbList } from '@/components/JsonLd'
import RoadmapContent from './RoadmapContent'

export const metadata = genPageMetadata({
  title: 'AI Engineer Roadmap',
  description:
    'A modern AI Engineer roadmap — from programming foundations to LLMs, RAG, AI agents, and LLMOps. The path to building production-ready agentic AI systems.',
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Roadmap', path: '/roadmap' },
        ])}
      />
      <RoadmapContent />
    </>
  )
}
