'use client'

import Link from '@/components/Link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-[0.2em] uppercase">
          404 — Not found
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          This page got lost in the network.
        </h1>
        <p className="mx-auto max-w-md text-lg text-gray-600 dark:text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
          on track.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/"
            className="bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-100"
          >
            View projects
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
