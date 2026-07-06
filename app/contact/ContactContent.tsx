'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import siteMetadata from '@/data/siteMetadata'

const inputBase =
  'w-full rounded-lg border bg-white px-4 py-2.5 text-gray-900 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 focus:outline-none dark:bg-gray-900 dark:text-gray-100'

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
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const borderFor = (field: string) =>
    errors[field] ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'

  return (
    <section className="pt-14 pb-16 md:pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase">
          Contact
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          Let&apos;s work together
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Have a question or a project in mind? My inbox is always open — tell me a little about
          what you&apos;re building and I&apos;ll get back to you.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr]">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <a
            href={`mailto:${siteMetadata.email}`}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
          >
            <span className="text-primary-600 dark:text-primary-400 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span>
              <span className="block text-xs text-gray-500 dark:text-gray-400">Email</span>
              <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 block text-sm font-medium text-gray-900 dark:text-gray-100">
                {siteMetadata.email}
              </span>
            </span>
          </a>

          <a
            href={siteMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
          >
            <span className="text-primary-600 dark:text-primary-400 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H10V9Z" />
              </svg>
            </span>
            <span>
              <span className="block text-xs text-gray-500 dark:text-gray-400">LinkedIn</span>
              <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 block text-sm font-medium text-gray-900 dark:text-gray-100">
                Connect with me
              </span>
            </span>
          </a>

          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
          >
            <span className="text-primary-600 dark:text-primary-400 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </span>
            <span>
              <span className="block text-xs text-gray-500 dark:text-gray-400">GitHub</span>
              <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 block text-sm font-medium text-gray-900 dark:text-gray-100">
                See my work
              </span>
            </span>
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-5 rounded-2xl border border-gray-200 bg-gray-50/50 p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-900/40"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputBase} ${borderFor('name')}`}
                placeholder="Jane Doe"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputBase} ${borderFor('email')}`}
                placeholder="jane@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="company"
                className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Company <span className="text-gray-500 dark:text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`${inputBase} border-gray-300 dark:border-gray-700`}
                placeholder="Acme Inc."
              />
            </div>
            <div>
              <label
                htmlFor="projectType"
                className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Project type <span className="text-gray-500 dark:text-gray-400">(optional)</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`${inputBase} border-gray-300 dark:border-gray-700`}
              >
                <option value="">Select a type</option>
                <option value="AI Agent Development">AI Agent Development</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="NLP & Text Analytics">NLP &amp; Text Analytics</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Cloud ML Deployment">Cloud ML Deployment</option>
                <option value="Training & Consulting">Training &amp; Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`${inputBase} ${borderFor('message')} resize-none`}
              placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {formData.message.length} characters
            </p>
          </div>

          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="bg-primary-600 hover:bg-primary-700 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === 'sending'
              ? 'Sending…'
              : status === 'sent'
                ? 'Message ready ✓'
                : 'Send message'}
            {status === '' && <span aria-hidden>→</span>}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
