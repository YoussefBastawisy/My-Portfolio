'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'I specialize in AI and machine learning solutions including AI agent development with LLMs and RAG, custom ML model development, NLP and text analytics, data analysis and visualization, cloud ML deployment, and AI training and consulting. I work across various domains including healthcare, fintech, and education.',
  },
  {
    question: 'How do you approach a new AI/ML project?',
    answer:
      'I start with understanding your business objectives and data landscape. Then I design a solution architecture, develop and train models using best practices, validate performance metrics, and deploy with proper monitoring. I emphasize clear communication throughout and deliver production-ready solutions with documentation.',
  },
  {
    question: 'What technologies and tools do you work with?',
    answer:
      'I work with Python, TensorFlow, Keras, PyTorch for ML/DL; LangChain, OpenAI, and custom LLMs for AI agents; NLTK, SpaCy for NLP; Pandas, NumPy for data processing; SQL and NoSQL databases; cloud platforms (AWS, Azure, GCP); and modern MLOps tools for deployment and monitoring.',
  },
  {
    question: 'Can you work remotely and across time zones?',
    answer:
      "Absolutely! I have extensive experience working remotely with international teams. I maintain clear communication through regular updates, documentation, and video calls. I'm flexible with meeting times to accommodate different time zones and ensure project success.",
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Timeline varies based on project scope. A small proof-of-concept might take 2-4 weeks, while a complete ML system could take 2-3 months. I provide detailed project timelines upfront and maintain regular progress updates. Quick turnaround is possible for urgent projects.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'Yes! I offer ongoing support including model monitoring, performance optimization, updates based on new data, troubleshooting, and training for your team. We can discuss support packages that fit your needs during project planning.',
  },
  {
    question: 'What makes your approach to AI/ML unique?',
    answer:
      'I focus on delivering production-ready solutions, not just prototypes. I emphasize scalability, maintainability, and real business impact. My background in teaching helps me explain complex concepts clearly. I stay current with latest AI developments and apply ethical AI principles in all projects.',
  },
  {
    question: 'How do you ensure data privacy and security?',
    answer:
      'Data privacy and security are paramount. I follow industry best practices including data encryption, secure API development, compliance with relevant regulations (GDPR, HIPAA when applicable), and confidentiality agreements. I can work with your existing security frameworks and requirements.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      "Pricing depends on project scope, complexity, and duration. I offer both project-based and hourly rates. After an initial consultation to understand your needs, I provide a detailed proposal with clear pricing. I'm transparent about costs and committed to delivering value.",
  },
  {
    question: 'Can you help train our existing team?',
    answer:
      "Yes! I provide training services including technical workshops on AI/ML concepts, hands-on coding sessions, code reviews and best practices, strategy consulting for AI adoption, and ongoing mentorship. I can customize training to your team's skill level and goals.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="from-primary-500 mb-4 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions 💡
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about working together
          </motion.p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="hover:border-primary-500 w-full rounded-2xl border-2 border-transparent bg-white p-6 text-left shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-gray-100">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="from-primary-500 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br to-pink-500 font-bold text-white"
                  >
                    {openIndex === index ? '−' : '+'}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Still have questions? Let's talk!
          </p>
          <motion.a
            href="/contact"
            className="from-primary-500 inline-block rounded-xl bg-gradient-to-r via-pink-500 to-purple-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch 💬
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
