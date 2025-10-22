'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import siteMetadata from '@/data/siteMetadata'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    projectType: '',
  })
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      setStatus('error')
      return
    }

    setStatus('sending')

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `Project Inquiry from ${formData.name}${formData.company ? ` (${formData.company})` : ''}`
    )
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}
${formData.projectType ? `Project Type: ${formData.projectType}` : ''}

Message:
${formData.message}
    `)

    window.location.href = `mailto:${siteMetadata.email}?subject=${subject}&body=${body}`

    setStatus('sent')
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '', company: '', projectType: '' })
      setStatus('')
      setErrors({})
    }, 2000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="space-y-8 pt-6 pb-12 text-center md:pt-10 md:pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative inline-block"
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <div className="mb-4 text-6xl">👋</div>
          <div className="bg-primary-500 absolute -top-2 left-1/2 h-32 w-32 -translate-x-1/2 transform animate-pulse rounded-full opacity-20 blur-3xl"></div>
        </motion.div>
        <motion.h1
          className="from-primary-500 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Begin Today, I'm One Message Away
        </motion.h1>
      </motion.div>

      {/* Contact Form Section */}
      <div className="border-t border-gray-200 pt-12 pb-16 dark:border-gray-700">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Info */}
          <div className="animate-slide-in-left space-y-6">
            <h2 className="from-primary-500 bg-gradient-to-r to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
              What's Next?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              My inbox is always open. Whether you have a question or just want to say hello, I'll
              try my best to get back to you! Feel free to message me about any relevant project
              updates.
            </p>

            <div className="space-y-4 pt-6">
              <div className="from-primary-50 flex items-center gap-4 rounded-xl bg-gradient-to-r to-pink-50 p-4 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl">📧</div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Email</div>
                  <a
                    href={`mailto:${siteMetadata.email}`}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    {siteMetadata.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 p-4 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl">🔗</div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</div>
                  <a
                    href={siteMetadata.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="to-primary-50 flex items-center gap-4 rounded-xl bg-gradient-to-r from-purple-50 p-4 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl">💼</div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">GitHub</div>
                  <a
                    href={siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Check my work
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            className="animate-slide-in-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="hover:border-primary-500 space-y-6 rounded-2xl border-2 border-gray-200 bg-gray-50 p-8 transition-all dark:border-gray-700 dark:bg-gray-800"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border-2 px-4 py-3 ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:border-primary-500 focus:ring-primary-500 bg-white text-gray-900 transition-all focus:ring-2 dark:bg-gray-900 dark:text-gray-100`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border-2 px-4 py-3 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:border-primary-500 focus:ring-primary-500 bg-white text-gray-900 transition-all focus:ring-2 dark:bg-gray-900 dark:text-gray-100`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Company/Organization (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:ring-2 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Project Type (Optional)
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all focus:ring-2 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
                >
                  <option value="">Select project type</option>
                  <option value="AI Agent Development">AI Agent Development</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="NLP & Text Analytics">NLP & Text Analytics</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Cloud ML Deployment">Cloud ML Deployment</option>
                  <option value="Training & Consulting">Training & Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full rounded-lg border-2 px-4 py-3 ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:border-primary-500 focus:ring-primary-500 resize-none bg-white text-gray-900 transition-all focus:ring-2 dark:bg-gray-900 dark:text-gray-100`}
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                <p className="mt-1 text-xs text-gray-500">{formData.message.length} characters</p>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="group from-primary-500 relative w-full transform overflow-hidden rounded-xl bg-gradient-to-r to-pink-500 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:from-pink-500 hover:to-purple-500 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                whileHover={{ scale: status === 'idle' || status === 'error' ? 1.05 : 1 }}
                whileTap={{ scale: status === 'idle' || status === 'error' ? 0.95 : 1 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === 'sending' ? (
                    <>🔄 Sending...</>
                  ) : status === 'sent' ? (
                    <>✅ Message Sent!</>
                  ) : (
                    <>🚀 Send Message</>
                  )}
                </span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  )
}
