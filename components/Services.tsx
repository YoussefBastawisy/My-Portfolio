'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'AI Agent Development',
    description:
      'Production AI agents built on LLMs with Retrieval-Augmented Generation, function calling, and tool use — grounded, reliable, and observable.',
    features: ['LLM integration', 'RAG pipelines', 'Function & tool calling', 'Scalable infra'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Machine Learning Solutions',
    description:
      'End-to-end ML from data preprocessing to deployment — model development, fine-tuning, evaluation, and monitoring in production.',
    features: ['Predictive modeling', 'Deep learning', 'Model optimization', 'MLOps'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: 'NLP & Text Analytics',
    description:
      'Natural language systems for classification, sentiment, and information extraction — from preprocessing pipelines to fine-tuned models.',
    features: ['Sentiment analysis', 'NER', 'Text classification', 'Topic modeling'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Data Analytics & Visualization',
    description:
      'Turning raw data into decisions with rigorous analysis and clear, interactive dashboards teams actually use.',
    features: ['Statistical analysis', 'Data pipelines', 'Dashboards', 'BI reporting'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    title: 'Cloud ML Deployment',
    description:
      'Deploying and scaling models on the cloud with versioning, automated pipelines, and proper performance monitoring.',
    features: ['Cloud architecture', 'API development', 'CI/CD', 'Monitoring'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: 'Training & Consulting',
    description:
      'Hands-on AI/ML training and consultation — helping teams build capability and adopt practical best practices.',
    features: ['Workshops', 'Code reviews', 'Strategy', 'Best practices'],
  },
]

export default function Services() {
  return (
    <section className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="What I do"
        title="Services & expertise"
        description="Comprehensive AI and machine learning work — from first prototype to production system."
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-gray-800 dark:bg-gray-800">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group relative bg-white p-8 transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
          >
            <div className="text-primary-600 dark:text-primary-400 mb-5 inline-flex rounded-lg border border-gray-200 p-2.5 dark:border-gray-800">
              {service.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              {service.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
