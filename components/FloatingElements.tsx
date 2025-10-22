'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Floating circles */}
      <motion.div
        className="from-primary-500/10 absolute top-20 left-10 h-32 w-32 rounded-full bg-gradient-to-br to-pink-500/10 blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6,
          delay: 0,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="to-primary-500/10 absolute top-40 right-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/10 blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 8,
          delay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 h-36 w-36 rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 7,
          delay: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="from-primary-500/10 absolute right-1/3 bottom-40 h-28 w-28 rounded-full bg-gradient-to-br to-pink-500/10 blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 9,
          delay: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
