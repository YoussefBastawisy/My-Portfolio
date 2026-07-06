'use client'

import { motion } from 'framer-motion'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'

export default function Projects() {
  const technologies = new Set(projectsData.flatMap((p) => p.tags ?? []))

  const stats = [
    { value: projectsData.length, label: 'Projects' },
    { value: technologies.size, label: 'Technologies' },
    { value: '5+', label: 'Domains' },
  ]

  return (
    <section className="pt-14 pb-16 md:pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase">
          Selected work
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          Projects
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Production agentic AI systems — RAG assistants, autonomous agents, and structured-output
          tools — spanning legal, financial markets, government, and enterprise domains.
        </p>
        <a
          href="https://github.com/YoussefBastawisy"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-100"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
          </svg>
          View all on GitHub
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex gap-10 border-y border-gray-200 py-6 dark:border-gray-800"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((d, index) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
          >
            <Card
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              tags={d.tags}
              achievements={d.achievements}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
