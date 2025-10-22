'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')

    // Simulate API call (replace with actual newsletter API integration)
    setTimeout(() => {
      setStatus('success')
      setMessage('🎉 Thanks for subscribing! Check your inbox for confirmation.')
      setEmail('')

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }, 1000)
  }

  return (
    <section className="from-primary-500 relative overflow-hidden bg-gradient-to-br via-pink-500 to-purple-600 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-white"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-6 text-6xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              📬
            </motion.div>

            <h2 className="mb-6 text-5xl font-extrabold text-white">
              Stay Updated with AI Insights
            </h2>

            <p className="mb-10 text-xl leading-relaxed text-white/90">
              Join 500+ professionals receiving cutting-edge AI/ML insights, project updates, and
              exclusive content delivered to your inbox every week.
            </p>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-xl px-6 py-4 font-medium text-gray-900 transition-all focus:ring-4 focus:ring-white/50 focus:outline-none"
                  disabled={status === 'loading' || status === 'success'}
                />
                <motion.button
                  type="submit"
                  className="rounded-xl bg-gray-900 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                  whileHover={{ scale: status === 'idle' || status === 'error' ? 1.05 : 1 }}
                  whileTap={{ scale: status === 'idle' || status === 'error' ? 0.95 : 1 }}
                  disabled={status === 'loading' || status === 'success'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        ⏳
                      </motion.span>
                      Subscribing...
                    </span>
                  ) : status === 'success' ? (
                    '✓ Subscribed!'
                  ) : (
                    'Subscribe Now'
                  )}
                </motion.button>
              </div>
            </form>

            {/* Status Message */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`inline-block rounded-xl px-6 py-3 font-medium ${
                    status === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { icon: '🤖', text: 'AI & ML Insights' },
                { icon: '📊', text: 'Project Updates' },
                { icon: '🎁', text: 'Exclusive Content' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl bg-white/10 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-2 text-3xl">{feature.icon}</div>
                  <p className="font-medium text-white">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/70">
              🔒 Your email is safe with me. Unsubscribe anytime. No spam, ever.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
