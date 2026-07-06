'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const certifications = [
  {
    title: 'IBM Data Science Specialization',
    issuer: 'IBM',
    skills: ['Python', 'SQL', 'Machine Learning'],
  },
  {
    title: 'Machine Learning Using SAS Viya 3.5',
    issuer: 'SAS',
    skills: ['Supervised & Unsupervised', 'Model Assessment'],
  },
  {
    title: 'Intermediate SQL Queries',
    issuer: 'DataCamp',
    skills: ['SQL', 'Aggregation', 'Data Manipulation'],
  },
  {
    title: 'Data Science & Advanced Analytics',
    issuer: 'Forage',
    skills: ['Applied Analytics', 'Data Science'],
  },
]

export default function Achievements() {
  return (
    <section className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        description="Formal training that backs the hands-on work."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <div className="text-primary-600 dark:text-primary-400 mb-4">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {cert.title}
            </h3>
            <p className="mt-1 mb-4 text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-900 dark:text-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
