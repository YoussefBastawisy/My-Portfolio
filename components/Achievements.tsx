'use client'

import { motion } from 'framer-motion'

const certifications = [
  {
    title: 'IBM Data Science Specialization',
    issuer: 'IBM',
    year: '2023',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
    skills: ['Data Science', 'Python', 'Machine Learning'],
  },
  {
    title: 'Machine Learning Using SAS Viya 3.5',
    issuer: 'SAS',
    year: '2023',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
    skills: ['SAS Viya', 'ML Algorithms', 'Model Deployment'],
  },
  {
    title: 'Intermediate SQL Queries',
    issuer: 'Professional Training',
    year: '2023',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    skills: ['SQL', 'Database Management', 'Data Analysis'],
  },
  {
    title: 'Data Science & Advanced Analytics Virtual Experience',
    issuer: 'Virtual Experience Program',
    year: '2023',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),
    skills: ['Advanced Analytics', 'Data Science', 'Business Intelligence'],
  },
]

export default function Achievements() {
  return (
    <section className="border-t border-gray-200 py-20 dark:border-gray-700">
      <div className="container mx-auto px-4">
        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <motion.h3
              className="to-primary-500 mb-4 bg-gradient-to-r from-purple-600 via-pink-500 bg-clip-text text-4xl font-extrabold text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Certificates 📜
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group hover:border-primary-500 relative rounded-2xl border-2 border-transparent bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all hover:shadow-2xl dark:from-gray-800 dark:to-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Icon */}
                <div className="text-primary-500 dark:text-primary-400 mb-4 flex justify-center">
                  {cert.icon}
                </div>

                {/* Title */}
                <h4 className="mb-2 text-center text-lg font-bold text-gray-900 dark:text-gray-100">
                  {cert.title}
                </h4>

                {/* Issuer & Year */}
                <p className="mb-4 text-center text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer} • {cert.year}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg px-2 py-1 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
