'use client'

import { motion } from 'framer-motion'
import Image from '@/components/Image'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import CountUpAnimation from '@/components/CountUpAnimation'
import siteMetadata from '@/data/siteMetadata'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'R', 'SQL'],
  },
  {
    label: 'Agentic & LLM Frameworks',
    skills: [
      'Pydantic AI',
      'LangGraph',
      'LangChain',
      'LlamaIndex',
      'Claude Agent SDK',
      'Cycls SDK',
    ],
  },
  {
    label: 'GenAI / LLMs',
    skills: [
      'RAG',
      'Function Calling',
      'Multi-Agent',
      'Structured Outputs',
      'Prompt Engineering',
      'Embeddings & Reranking',
    ],
  },
  {
    label: 'Retrieval & Serving',
    skills: ['Qdrant', 'ChromaDB', 'vLLM', 'TEI', 'Tesseract OCR', 'SSE'],
  },
  {
    label: 'Backend & MLOps',
    skills: ['FastAPI', 'Streamlit', 'n8n', 'Docker', 'Modal', 'Google Cloud', 'Git', 'Linux'],
  },
  {
    label: 'ML & Data',
    skills: ['scikit-learn', 'TensorFlow', 'Keras', 'PostgreSQL', 'MongoDB', 'Power BI'],
  },
]

const experiences = [
  {
    title: 'Agentic AI Instructor',
    company: 'Kayfa Academy',
    period: 'Jun 2026 — Present',
    location: 'Cairo, Egypt',
    description:
      'Deliver hands-on training in Agentic AI — RAG, multi-agent systems, AI workflows, and production deployment — and mentor learners building and deploying AI-powered applications and autonomous agents.',
  },
  {
    title: 'AI Engineer',
    company: 'Restart Technology (Laam)',
    period: 'Apr 2026 — Present',
    location: 'Egypt',
    description:
      'Build and ship production LLM systems end-to-end — RAG pipelines, function calling and tool-use, model serving, vector databases, deployment, observability, and reliability — taking AI agents from prototype to live, production-grade services and owning the full lifecycle.',
  },
  {
    title: 'Applied AI Engineer',
    company: 'Cycls',
    period: 'Aug 2025 — Present',
    location: 'Egypt',
    description:
      "Build and ship LLM-powered conversational and agentic applications on the company's platform, from prototype to production. Implement function calling and tool-use to connect agents with external APIs and data sources, and deploy to scalable serverless infrastructure (Modal) with a focus on reliability, fast iteration, and end-user experience.",
  },
  {
    title: 'Data Science Instructor',
    company: 'Arabian Academy',
    period: 'Aug 2025 — Present',
    location: 'Egypt',
    description:
      'Deliver hands-on training in Python, data analysis, and machine learning, designing real-world, project-based curricula that build industry-ready, data-driven problem-solving skills.',
  },
  {
    title: 'Machine Learning Intern',
    company: 'ZA Tech',
    period: 'Jul 2024 — Sep 2024',
    location: 'Egypt',
    description:
      'Designed and evaluated predictive models for insurance and fintech use cases; preprocessed real-world datasets and optimized performance via cross-validation and hyperparameter tuning, deploying models with Python and cloud tools.',
  },
  {
    title: 'Data Science Intern',
    company: 'WorldQuant University',
    period: 'Jan 2023 — 2024',
    location: 'Remote',
    description:
      'Built end-to-end ML pipelines — data cleaning, feature engineering, model development, and evaluation — using Pandas, scikit-learn, and TensorFlow across finance and health datasets.',
  },
  {
    title: 'Data Science Instructor',
    company: 'PES — Programmers Elite School',
    period: 'Sep 2022 — Mar 2023',
    location: 'Egypt',
    description:
      'Taught Python, data analysis, and machine learning through live coding sessions and hands-on projects; designed lesson plans and mentored students on real-world datasets.',
  },
]

export default function Page() {
  return (
    <section className="pt-14 pb-10 md:pt-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
        {/* Sidebar */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="h-56 w-56 overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
              <Image
                src="/static/images/avatar2.jpg"
                alt={siteMetadata.author}
                width={280}
                height={280}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h1 className="mt-5 text-xl font-bold text-gray-900 dark:text-gray-100">
              {siteMetadata.author}
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">AI Engineer</p>
            <div className="mt-4 flex gap-4">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
              <SocialIcon kind="github" href={siteMetadata.github} size={5} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
            </div>
            <a
              href="/static/Youssef-Bastawisy-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-gray-900 lg:w-auto dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-100"
            >
              Download resume
            </a>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase">
              About
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
              Building production-ready agentic AI.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                I&apos;m an AI Engineer specializing in production-ready agentic AI systems. I build
                autonomous, stateful, tool-aware agents end-to-end — multi-agent orchestration,
                Retrieval-Augmented Generation, structured outputs, and function calling / tool-use
                — and ship them as reliable, observable LLM products.
              </p>
              <p>
                I work with{' '}
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  Pydantic AI, LangGraph, LlamaIndex, FastAPI, and Streamlit
                </span>
                , and automate real-world workflows with n8n. Recently I built and deployed an
                Arabic RAG assistant reaching hit@8 of 0.96 on a self-hosted vLLM + Qdrant stack,
                and shipped a range of agentic tools — a market analyst covering 400+ TASI stocks, a
                legal assistant over a guarded SQL database, and structured-output evaluation
                agents.
              </p>
              <p>
                My foundation is in Python, machine learning, and token-efficient agent design,
                backed by a B.Sc. in Computer Science &amp; AI (Data Science major). I care about
                taking systems from prototype to live, production-grade services with strong
                reliability and observability.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid max-w-md grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                <CountUpAnimation end={6} suffix="+" />
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                AI systems shipped
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                <CountUpAnimation end={3} suffix="+" />
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Years in AI / ML</div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Skills & technologies
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <div className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 dark:border-gray-800 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Experience
            </h3>
            <div className="mt-6 border-l border-gray-200 dark:border-gray-800">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                  className="relative pb-10 pl-8 last:pb-0"
                >
                  <span className="bg-primary-500 absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full ring-4 ring-white dark:ring-gray-950" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                      {exp.title}{' '}
                      <span className="text-primary-600 dark:text-primary-400">
                        @ {exp.company}
                      </span>
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Education
            </h3>
            <div className="mt-6 rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Pharos University in Alexandria
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">Alexandria, Egypt</span>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                B.Sc. in Computer Science &amp; Artificial Intelligence — Major: Data Science
                <span className="text-primary-600 dark:text-primary-400"> · GPA 3.8 / 4.0</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-10 dark:border-gray-800">
            <Link
              href="/projects"
              className="bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              View my projects
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-100"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
