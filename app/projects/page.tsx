'use client'

import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <motion.div
          className="space-y-4 pt-6 pb-8 md:space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="from-primary-500 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-4xl leading-9 font-extrabold tracking-tight text-transparent sm:text-5xl sm:leading-10 md:text-6xl md:leading-14"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects 🚀
          </motion.h1>
          <motion.p
            className="max-w-3xl text-xl leading-8 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of AI and machine learning projects spanning healthcare, NLP, fintech, and
            production systems. Each project demonstrates practical applications of cutting-edge
            technologies to solve real-world problems.
          </motion.p>
          <motion.div
            className="flex gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/YoussefBastawisy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-2xl dark:from-gray-700 dark:to-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>⭐</span> View All on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="container py-12">
          {/* Stats Overview */}
          <motion.div
            className="mb-12 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="from-primary-50 hover:border-primary-500 rounded-2xl border-2 border-transparent bg-gradient-to-br to-pink-50 p-6 text-center transition-all dark:from-gray-800 dark:to-gray-700"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="from-primary-500 bg-gradient-to-r to-pink-500 bg-clip-text text-4xl font-bold text-transparent">
                {projectsData.length}
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </motion.div>

            <motion.div
              className="rounded-2xl border-2 border-transparent bg-gradient-to-br from-pink-50 to-purple-50 p-6 text-center transition-all hover:border-pink-500 dark:from-gray-800 dark:to-gray-700"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent">
                {projectsData.reduce((acc, p) => acc + (p.tags?.length || 0), 0)}
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </motion.div>

            <motion.div
              className="to-primary-50 rounded-2xl border-2 border-transparent bg-gradient-to-br from-purple-50 p-6 text-center transition-all hover:border-purple-500 dark:from-gray-800 dark:to-gray-700"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="to-primary-500 bg-gradient-to-r from-purple-500 bg-clip-text text-4xl font-bold text-transparent">
                100%
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">Open Source</div>
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projectsData.map((d, index) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>
      </div>
    </>
  )
}
