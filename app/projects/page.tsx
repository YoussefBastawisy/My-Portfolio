import { genPageMetadata } from 'app/seo'
import JsonLd, { breadcrumbList } from '@/components/JsonLd'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'
import ProjectsContent from './ProjectsContent'

export const metadata = genPageMetadata({
  title: 'Projects',
  description:
    'Selected production agentic AI systems by Youssef Bastawisy — RAG assistants, autonomous agents, and structured-output tools across legal, finance, and government domains.',
})

const itemListData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Projects by Youssef Bastawisy',
  itemListElement: projectsData.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      ...(project.tags ? { keywords: project.tags.join(', ') } : {}),
      author: { '@id': `${siteMetadata.siteUrl}/#person` },
    },
  })),
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
        ])}
      />
      <JsonLd data={itemListData} />
      <ProjectsContent />
    </>
  )
}
