'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="from-primary-500 fixed top-0 right-0 left-0 z-50 h-1 origin-left bg-gradient-to-r via-pink-500 to-purple-600"
      style={{ scaleX }}
    />
  )
}
