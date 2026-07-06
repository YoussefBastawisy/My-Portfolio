'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from './Link'
import SectionHeading from './SectionHeading'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'AI agent development with LLMs and RAG, custom ML model development, NLP and text analytics, data analysis and visualization, cloud ML deployment, and AI training and consulting — across healthcare, fintech, and education.',
  },
  {
    question: 'How do you approach a new AI/ML project?',
    answer:
      'I start with your objectives and data landscape, design a solution architecture, develop and train models using best practices, validate against clear metrics, and deploy with proper monitoring — communicating clearly throughout and delivering production-ready systems with documentation.',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'Python, TensorFlow, Keras and PyTorch for ML/DL; LangChain, OpenAI and open models for AI agents; NLTK and spaCy for NLP; Pandas and NumPy for data; SQL and NoSQL databases; AWS and Docker; and modern MLOps tooling for deployment and monitoring.',
  },
  {
    question: 'Can you work remotely across time zones?',
    answer:
      'Yes. I work remotely with international teams and keep communication clear through regular updates, documentation, and calls. I stay flexible with meeting times to keep projects moving.',
  },
  {
    question: 'What is a typical project timeline?',
    answer:
      'It depends on scope. A proof-of-concept can take 2–4 weeks, while a complete ML system might take 2–3 months. I share detailed timelines up front and keep you updated on progress.',
  },
  {
    question: 'Do you provide ongoing support after delivery?',
    answer:
      'Yes — model monitoring, performance optimization, updates as new data arrives, troubleshooting, and team training. We can scope a support arrangement that fits your needs.',
  },
  {
    question: 'How do you handle data privacy and security?',
    answer:
      'With industry best practices: encryption, secure APIs, compliance with relevant regulations (GDPR/HIPAA where applicable), and confidentiality agreements. I can work within your existing security frameworks.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about working together."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="max-w-3xl divide-y divide-gray-200 dark:divide-gray-800">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pr-8 pb-5 leading-relaxed text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:w-64 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
            Still have questions?
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Happy to talk through your project and how I can help.
          </p>
          <Link
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </aside>
      </div>
    </section>
  )
}
