'use client'

import Link from '@/components/Link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="mb-8"
      >
        <div className="from-primary-500 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-9xl font-extrabold text-transparent">
          404
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl space-y-4"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Oops! Page Not Found 🤖
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Looks like this page got lost in the neural network. Even our AI couldn't find it!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="from-primary-500 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r via-pink-500 to-purple-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:shadow-2xl"
          >
            🏠 Go Home
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/projects"
            className="border-primary-500 text-primary-500 hover:bg-primary-50 inline-flex items-center gap-2 rounded-lg border-2 px-8 py-3 text-base font-medium transition-all dark:hover:bg-gray-800"
          >
            🚀 View Projects
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-purple-500 px-8 py-3 text-base font-medium text-purple-500 transition-all hover:bg-purple-50 dark:hover:bg-gray-800"
          >
            📧 Contact Me
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 10, -10, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="mt-16 text-6xl"
      >
        🤷‍♂️
      </motion.div>
    </div>
  )
}
