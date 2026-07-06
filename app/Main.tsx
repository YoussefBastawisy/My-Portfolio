'use client'

import { motion } from 'framer-motion'
import Link from '@/components/Link'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import TypingAnimation from '@/components/TypingAnimation'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import Achievements from '@/components/Achievements'
import FAQ from '@/components/FAQ'
import Card from '@/components/Card'
import SectionHeading from '@/components/SectionHeading'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'

const stats = [
  { value: '6+', label: 'AI systems shipped' },
  { value: '3+', label: 'Years in AI / ML' },
  { value: '5+', label: 'Industry domains' },
]

const companies = ['Cycls', 'Restart Technology', 'Kayfa Academy', 'Arabian Academy']

export default function Home() {
  const featuredProjects = projectsData.slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]" />
        <div className="grid grid-cols-1 items-center gap-12 pt-14 pb-16 md:grid-cols-[1.4fr_1fr] md:pt-20 md:pb-24">
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-sm text-gray-600 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for select AI projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100"
            >
              Hi, I&apos;m {siteMetadata.author.split(' ')[0]}.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-2xl font-semibold tracking-tight text-gray-500 sm:text-3xl dark:text-gray-400"
            >
              <TypingAnimation
                texts={[
                  'I build production agentic AI systems.',
                  'I ship RAG and multi-agent apps.',
                  'I take LLM agents from prototype to production.',
                ]}
                className="text-primary-600 dark:text-primary-400"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400"
            >
              AI Engineer specializing in production-ready agentic AI systems — multi-agent
              orchestration, RAG, structured outputs, and tool-use. I build autonomous, tool-aware
              agents end-to-end and ship them as reliable, observable LLM products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors"
              >
                View my work
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-100"
              >
                Get in touch
              </Link>
              <div className="ml-1 flex items-center gap-4 pl-1">
                <SocialIcon kind="github" href={siteMetadata.github} size={5} />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
              </div>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xs sm:max-w-sm md:ml-auto"
          >
            <div className="bg-primary-500/10 absolute -inset-4 -z-10 rounded-3xl blur-2xl" />
            <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
              <Image
                src="/static/images/avatar2.jpg"
                alt={siteMetadata.author}
                width={560}
                height={560}
                priority
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats + companies strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 border-y border-gray-200 py-8 sm:grid-cols-[auto_1fr] sm:items-center dark:border-gray-800"
        >
          <div className="flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:justify-end">
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase dark:text-gray-400">
              Experience
            </span>
            {companies.map((company) => (
              <span key={company} className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What I do */}
      <Services />

      {/* Selected projects */}
      <section className="py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="Production agentic AI systems — RAG assistants, autonomous agents, and structured-output tools."
          />
          <Link
            href="/projects"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap transition-colors"
          >
            All projects
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card
                title={project.title}
                description={project.description}
                period={project.period}
                imgSrc={project.imgSrc}
                href={project.href}
                tags={project.tags}
                achievements={project.achievements}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <TechStack />

      {/* Certifications */}
      <Achievements />

      {/* FAQ */}
      <FAQ />

      {/* Contact CTA */}
      <section className="py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-950 px-8 py-16 text-center dark:border-gray-800">
          <div className="bg-primary-600/20 pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something intelligent.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
              Have an agentic AI or LLM project in mind? I&apos;d love to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-500 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors"
              >
                Start a conversation
                <span aria-hidden>→</span>
              </Link>
              <a
                href="/static/Youssef-Bastawisy-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 transition-colors hover:border-gray-400"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
