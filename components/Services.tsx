'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'AI Agent Development',
    description:
      'Build sophisticated AI agents using LLMs with RAG implementation, function calling, and tool-use protocols for production environments.',
    features: [
      'Custom LLM Integration',
      'RAG Systems',
      'Function Calling',
      'Scalable Infrastructure',
    ],
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Machine Learning Solutions',
    description:
      'End-to-end ML solutions from data preprocessing to deployment, including model development, fine-tuning, and production monitoring.',
    features: ['Predictive Modeling', 'Deep Learning', 'Model Optimization', 'MLOps Integration'],
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: 'NLP & Text Analytics',
    description:
      'Advanced natural language processing solutions for sentiment analysis, text classification, and information extraction at scale.',
    features: [
      'Sentiment Analysis',
      'Named Entity Recognition',
      'Text Classification',
      'Topic Modeling',
    ],
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Data Analytics & Visualization',
    description:
      'Transform raw data into actionable insights with comprehensive analysis and interactive visualizations using modern tools.',
    features: [
      'Statistical Analysis',
      'Data Pipelines',
      'Interactive Dashboards',
      'Business Intelligence',
    ],
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    title: 'Cloud ML Deployment',
    description:
      'Deploy and scale your machine learning models on cloud platforms with proper monitoring, versioning, and automated pipelines.',
    features: [
      'Cloud Architecture',
      'API Development',
      'CI/CD Pipelines',
      'Performance Monitoring',
    ],
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: 'AI Training & Consulting',
    description:
      'Expert training and consultation on AI/ML technologies, helping teams build capabilities and implement best practices.',
    features: ['Technical Workshops', 'Code Reviews', 'Strategy Consulting', 'Best Practices'],
  },
]

export default function Services() {
  return (
    <section className="border-t border-gray-200 py-20 dark:border-gray-700">
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
            Services & Expertise 🚀
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive AI and machine learning solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group hover:border-primary-500 relative rounded-2xl border-2 border-transparent bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background gradient on hover */}
              <div className="from-primary-50 absolute inset-0 rounded-2xl bg-gradient-to-br to-pink-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-gray-700 dark:to-gray-600" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-primary-500 dark:text-primary-400 mb-6 flex justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <span className="text-primary-500 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="/contact"
            className="from-primary-500 inline-block rounded-xl bg-gradient-to-r via-pink-500 to-purple-600 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Discuss Your Project 💬
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
