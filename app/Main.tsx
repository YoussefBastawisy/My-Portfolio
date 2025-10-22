'use client'

import Link from '@/components/Link'
import Image from '@/components/Image'
import TypingAnimation from '@/components/TypingAnimation'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import Achievements from '@/components/Achievements'
import FAQ from '@/components/FAQ'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="space-y-8 pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          {/* Avatar */}
          <motion.div
            className="perspective-1000 relative flex-shrink-0"
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
          >
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* Avatar Image - 3D with shadows */}
              <motion.div
                className="relative z-10"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  filter:
                    'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 30px rgba(236, 72, 153, 0.3))',
                }}
              >
                <Image
                  src="/static/images/Avatar.png"
                  alt={siteMetadata.author}
                  width={300}
                  height={400}
                  className="relative"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(236, 72, 153, 0.2))',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <motion.h1
              className="text-5xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-gray-100"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hey, I'm {siteMetadata.author.split(' ')[0]} 👋
            </motion.h1>
            <motion.h2
              className="text-3xl leading-9 font-bold tracking-tight sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="from-primary-500 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-transparent">
                <TypingAnimation
                  texts={[
                    'I build intelligent AI solutions.',
                    'I create ML models that drive results.',
                    'I transform data into insights.',
                    'I deploy production-ready systems.',
                  ]}
                />
              </span>
            </motion.h2>
            <motion.p
              className="max-w-3xl text-xl leading-8 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm an Applied AI Engineer passionate about creating innovative machine learning
              solutions. With expertise in LLMs, RAG, NLP, and Deep Learning, I transform complex
              data into actionable insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="group from-primary-500 relative transform overflow-hidden rounded-lg bg-gradient-to-r via-pink-500 to-purple-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Let's Start Your Project
                </span>
                <div className="to-primary-500 absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
              <Link
                href="/about"
                className="group border-primary-500 text-primary-500 relative transform overflow-hidden rounded-lg border-2 px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 hover:text-white"
              >
                <span className="relative z-10">Get To Know Me</span>
                <div className="from-primary-500 absolute inset-0 origin-left scale-x-0 transform bg-gradient-to-r to-pink-500 transition-transform duration-300 group-hover:scale-x-100"></div>
              </Link>
              <Link
                href="/projects"
                className="group relative transform overflow-hidden rounded-lg border-2 border-gray-500 px-8 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:text-white dark:text-gray-300 dark:hover:text-white"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 origin-left scale-x-0 transform bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-x-100"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        className="border-t border-gray-200 py-16 dark:border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Everything you need for a perfect AI solution
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <motion.div
            className="group hover:bg-gray-750 rounded-2xl bg-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-900 dark:hover:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-700 transition-transform group-hover:scale-110 dark:bg-gray-800">
                <svg
                  className="text-primary-400 h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold text-white">Data-Driven Solutions</h3>
                <p className="leading-relaxed text-gray-300">
                  I build intelligent systems backed by data science, ensuring every decision is
                  supported by robust analysis and proven methodologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="group hover:bg-gray-750 rounded-2xl bg-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-900 dark:hover:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-700 transition-transform group-hover:scale-110 dark:bg-gray-800">
                <svg
                  className="h-7 w-7 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold text-white">Remote Collaboration</h3>
                <p className="leading-relaxed text-gray-300">
                  I can understand your business needs and deliver exceptional AI solutions
                  remotely, maintaining clear communication throughout the process.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="group hover:bg-gray-750 rounded-2xl bg-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-900 dark:hover:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-700 transition-transform group-hover:scale-110 dark:bg-gray-800">
                <svg
                  className="h-7 w-7 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold text-white">Time Conscious</h3>
                <p className="leading-relaxed text-gray-300">
                  I deliver high-quality work on time, respecting deadlines and ensuring your
                  project stays on schedule from start to finish.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            className="group hover:bg-gray-750 rounded-2xl bg-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-900 dark:hover:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-700 transition-transform group-hover:scale-110 dark:bg-gray-800">
                <svg
                  className="text-primary-400 h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold text-white">Open for Learning</h3>
                <p className="leading-relaxed text-gray-300">
                  I stay current with the latest AI technologies and techniques, always ready to
                  learn new approaches to solve your unique challenges.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature 5 */}
          <motion.div
            className="group hover:bg-gray-750 rounded-2xl bg-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-900 dark:hover:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-700 transition-transform group-hover:scale-110 dark:bg-gray-800">
                <svg
                  className="h-7 w-7 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold text-white">Tailored Development</h3>
                <p className="leading-relaxed text-gray-300">
                  I build with your specific goals in mind, creating customized AI solutions that
                  align perfectly with your business objectives.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature 6 */}
          <motion.div
            className="group hover:bg-gray-750 rounded-2xl bg-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-900 dark:hover:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gray-700 transition-transform group-hover:scale-110 dark:bg-gray-800">
                <svg
                  className="h-7 w-7 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-bold text-white">Ongoing Synergy</h3>
                <p className="leading-relaxed text-gray-300">
                  I provide continuous support and collaboration, ensuring your AI systems evolve
                  with your needs and remain effective long-term.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <Services />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Achievements Section */}
      <Achievements />

      {/* FAQ Section */}
      <FAQ />
    </>
  )
}
