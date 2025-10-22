'use client'

import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import CountUpAnimation from '@/components/CountUpAnimation'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

export default function Page() {
  const skills = [
    'Python',
    'R',
    'SQL',
    'TensorFlow',
    'Keras',
    'LLMs',
    'RAG',
    'NLP',
    'NLTK',
    'SpaCy',
    'CNN',
    'RNN',
    'LSTM',
    'Machine Learning',
    'Deep Learning',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Tableau',
    'Power BI',
    'MongoDB',
    'Firebase',
    'Cloud Computing',
  ]

  const experiences = [
    {
      title: 'Applied AI Engineer',
      company: 'Cycls',
      period: '08/2025 - Present',
      location: 'Remote',
      description: `Engineered sophisticated AI agents by leveraging Large Language Models (LLMs) with a focus on Retrieval Augmented Generation (RAG) to ground outputs in factual data and reduce model hallucination. Extended agent functionalities by implementing function calling and tool-use protocols to enable real-time programmatic actions and interaction with external data sources. Designed, built, and maintained the scalable and reliable infrastructure supporting these agents in a production environment.`,
    },
    {
      title: 'Data Science Instructor',
      company: 'Arabian Academy',
      period: '08/2025 - Present',
      location: 'Egypt',
      description: `Empowered aspiring data scientists by delivering hands-on training in Python, data analysis, and machine learning. Designed real-world projects to build industry-ready skills and inspire data-driven problem-solving.`,
    },
    {
      title: 'Machine Learning Intern',
      company: 'ZA Tech',
      period: '07/2024 – 09/2024',
      location: 'Egypt',
      description: `Designed and evaluated predictive models to support insurance and fintech solutions. Preprocessed real-world datasets, applied supervised and unsupervised learning techniques, and fine-tuned model performance using cross-validation and hyperparameter optimization. Contributed to deploying models in a scalable environment using Python and cloud-based tools, while collaborating closely with data scientists and product teams to align technical work with business objectives.`,
    },
    {
      title: 'Data Science Intern',
      company: 'WorldQuant University',
      period: '01/2023 - 2024',
      location: 'Remote',
      description: `Participated in hands-on projects that deepened my understanding of statistical modeling, data analysis, and machine learning. Worked on end-to-end pipelines involving data cleaning, feature engineering, model development, and evaluation using Python libraries such as Pandas, Scikit-learn, and TensorFlow. Gained experience in working with real-world datasets across finance and health domains, and presented insights and results through interactive dashboards and written reports.`,
    },
    {
      title: 'Data Science Instructor',
      company: 'PES - Programmers Elite School',
      period: '09/2022 – 03/2023',
      location: 'Egypt',
      description: `Taught foundational concepts in Python programming, data analysis, and machine learning to students and early-career professionals. Designed lesson plans, delivered live coding sessions, and guided students through practical projects involving real datasets. Provided personalized feedback, helped troubleshoot code, and ensured students developed both technical and problem-solving skills aligned with industry standards.`,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="space-y-8 pt-6 pb-12 md:pt-10 md:pb-16">
        <div className="space-y-4 text-center">
          <h1 className="from-primary-500 animate-fade-in bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Let Passion Lead Your Purpose 🔥
          </h1>
          <div className="flex justify-center">
            <div className="from-primary-500 h-1 w-24 animate-pulse rounded-full bg-gradient-to-r to-purple-600"></div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="border-t border-gray-200 pt-12 pb-12 dark:border-gray-700">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Sidebar with Avatar and Info */}
          <div className="lg:col-span-1">
            <div className="animate-slide-in-left sticky top-20 space-y-6">
              <div className="flex justify-center lg:justify-start">
                <div
                  className="perspective-1000 relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Avatar Image - 3D */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 },
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      filter:
                        'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4)) drop-shadow(0 8px 20px rgba(236, 72, 153, 0.3))',
                    }}
                  >
                    <Image
                      src="/static/images/Avatar.png"
                      alt="Youssef Bastawisy"
                      width={240}
                      height={320}
                      className="relative"
                      style={{
                        filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.2))',
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="animate-fade-in text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Youssef Bastawisy
                </h2>
                <p
                  className="animate-slide-in-left mt-2 text-gray-600 dark:text-gray-400"
                  style={{ animationDelay: '100ms' }}
                >
                  Applied AI Engineer
                </p>
              </div>
              <div
                className="animate-slide-in-left flex justify-center space-x-4 lg:justify-start"
                style={{ animationDelay: '300ms' }}
              >
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
                <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Biography */}
            <div className="animate-slide-in-right" style={{ animationDelay: '200ms' }}>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                <span className="text-3xl">📖</span>
                BIOGRAPHY
              </h2>
              <div className="prose dark:prose-invert max-w-none space-y-4 text-gray-600 dark:text-gray-400">
                <p className="animate-fade-in leading-relaxed" style={{ animationDelay: '300ms' }}>
                  I'm Youssef Bastawisy, an Applied AI Engineer specializing in building
                  sophisticated AI agents that leverage Large Language Models (LLMs) with Retrieval
                  Augmented Generation (RAG). I design and implement scalable AI systems that reduce
                  hallucination, ground outputs in factual data, and enable real-time programmatic
                  actions through function calling and tool-use protocols.
                </p>
                <p className="animate-fade-in leading-relaxed" style={{ animationDelay: '400ms' }}>
                  I engineer end-to-end machine learning solutions across multiple domains including{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    healthcare, fintech, and education
                  </span>
                  . My work includes developing AI-powered cognitive assessment systems, building
                  predictive models for insurance and financial services, and creating
                  production-ready infrastructure that supports AI agents in scalable environments.
                  I've successfully delivered projects combining AI, VR, and mobile technologies
                  that serve 100+ users with measurable impact.
                </p>
                <p className="animate-fade-in leading-relaxed" style={{ animationDelay: '500ms' }}>
                  My expertise spans the complete ML lifecycle: data preprocessing and feature
                  engineering, model development and fine-tuning, hyperparameter optimization,
                  deployment to production, and ongoing monitoring. I work with cutting-edge
                  technologies including{' '}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Python, TensorFlow, NLP frameworks, cloud platforms, and modern MLOps tools
                  </span>
                  . I'm driven by creating impactful, ethical AI solutions that solve real-world
                  problems and deliver measurable business value.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid max-w-2xl grid-cols-2 gap-6 py-8">
              <motion.div
                className="group from-primary-50 hover:border-primary-500 relative overflow-hidden rounded-xl border-2 border-transparent bg-gradient-to-br to-pink-50 p-6 text-center dark:from-gray-800 dark:to-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="from-primary-500/10 absolute inset-0 bg-gradient-to-br to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="from-primary-500 bg-gradient-to-r to-pink-500 bg-clip-text text-5xl font-bold text-transparent">
                    <CountUpAnimation end={3} suffix="+" />
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Years of Experience
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group relative overflow-hidden rounded-xl border-2 border-transparent bg-gradient-to-br from-pink-50 to-purple-50 p-6 text-center hover:border-pink-500 dark:from-gray-800 dark:to-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-5xl font-bold text-transparent">
                    <CountUpAnimation end={100} suffix="+" />
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Users Impacted
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  💡
                </motion.span>
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.3 },
                    }}
                    className="from-primary-500 cursor-default rounded-lg bg-gradient-to-r to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:from-pink-500 hover:to-purple-500 hover:shadow-xl"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                <motion.span
                  className="text-3xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  💼
                </motion.span>
                Professional Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="border-primary-500 group relative border-l-2 pb-8 pl-8 last:pb-0"
                  >
                    {/* Animated Timeline dot */}
                    <motion.div
                      className="from-primary-500 absolute top-0 left-0 h-4 w-4 -translate-x-[9px] rounded-full bg-gradient-to-r to-pink-500"
                      whileHover={{ scale: 2 }}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(236, 72, 153, 0.7)',
                          '0 0 0 10px rgba(236, 72, 153, 0)',
                        ],
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity },
                      }}
                    />

                    <motion.div
                      className="-ml-2 space-y-2 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
                      whileHover={{
                        scale: 1.02,
                        boxShadow:
                          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        borderColor: 'rgb(236, 72, 153)',
                        transition: { duration: 0.3 },
                      }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {exp.title}{' '}
                        <span className="from-primary-500 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-transparent">
                          @{exp.company}
                        </span>
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">📅 {exp.period}</span>
                        <span className="flex items-center gap-1">📍 {exp.location}</span>
                      </div>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 border-t-2 border-gray-200 pt-8 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="group from-primary-500 relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r via-pink-500 to-purple-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <span className="relative z-10">🚀 View My Projects</span>
                  <motion.div
                    className="to-primary-500 absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/static/Youssef-Bastawisy-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-primary-500 text-primary-500 relative inline-flex items-center gap-2 overflow-hidden rounded-xl border-2 px-8 py-3 text-base font-medium shadow-md transition-all duration-300 hover:text-white hover:shadow-xl"
                >
                  <span className="relative z-10">📄 Download Resume</span>
                  <motion.div
                    className="from-primary-500 absolute inset-0 bg-gradient-to-r to-pink-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border-2 border-purple-500 px-8 py-3 text-base font-medium text-purple-500 shadow-md transition-all duration-300 hover:text-white hover:shadow-xl"
                >
                  <span className="relative z-10">📧 Contact Me</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
