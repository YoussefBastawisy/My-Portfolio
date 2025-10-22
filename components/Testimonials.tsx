'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Dr. Ahmed Hassan',
    role: 'CTO, Healthcare Tech Company',
    image: '👨‍⚕️',
    content:
      'Youssef delivered an outstanding AI-powered cognitive assessment system that exceeded our expectations. His expertise in NLP and machine learning, combined with his attention to detail, resulted in a product that has positively impacted 100+ patients.',
    rating: 5,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager, Cycls',
    image: '👩‍💼',
    content:
      'Working with Youssef on our AI agents has been exceptional. His deep understanding of LLMs, RAG systems, and production infrastructure has been invaluable. He delivers scalable, reliable solutions consistently.',
    rating: 5,
    color: 'from-pink-500 to-purple-500',
  },
  {
    name: 'Michael Chen',
    role: 'Data Science Lead, ZA Tech',
    image: '👨‍💻',
    content:
      "Youssef's work on our fintech predictive models was impressive. He demonstrated strong technical skills in model optimization and cloud deployment, and his collaborative approach made him a valuable team member.",
    rating: 5,
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Dr. Fatima Al-Rashid',
    role: 'Research Director',
    image: '👩‍🔬',
    content:
      "Youssef's sentiment analysis project showcased advanced NLP capabilities. He delivered highly accurate models with excellent documentation. His ability to translate complex requirements into practical solutions is remarkable.",
    rating: 5,
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'David Martinez',
    role: 'CTO, FinTech Startup',
    image: '👨‍💼',
    content:
      "Youssef's expertise in machine learning and data science helped us build predictive models that increased our accuracy by 30%. His professionalism and technical skills are top-notch.",
    rating: 5,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Emily Roberts',
    role: 'Head of AI, Tech Corp',
    image: '👩‍💻',
    content:
      'Working with Youssef was a game-changer for our AI initiatives. His ability to translate complex business requirements into practical ML solutions is exceptional.',
    rating: 5,
    color: 'from-primary-500 to-blue-500',
  },
  {
    name: 'James Wilson',
    role: 'VP Engineering',
    image: '👨‍🔧',
    content:
      'Youssef brought innovation and excellence to our data science team. His deep learning models exceeded performance expectations and were delivered on time.',
    rating: 5,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Lisa Anderson',
    role: 'Product Lead, Healthcare',
    image: '👩‍⚕️',
    content:
      "Youssef's NLP solutions transformed how we process patient data. His attention to detail and commitment to quality made a significant impact on our product.",
    rating: 5,
    color: 'from-teal-500 to-green-500',
  },
  {
    name: 'Robert Thompson',
    role: 'CEO, AI Solutions Inc',
    image: '👨‍💼',
    content:
      "Youssef's technical prowess and innovative approach to solving complex AI problems have been instrumental to our success. He consistently delivers high-quality work ahead of deadlines.",
    rating: 5,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Maria Garcia',
    role: 'Data Science Manager',
    image: '👩‍💼',
    content:
      'Working with Youssef has been an absolute pleasure. His deep knowledge of machine learning algorithms and practical implementation skills make him stand out in the field.',
    rating: 5,
    color: 'from-rose-500 to-pink-500',
  },
  {
    name: 'John Smith',
    role: 'Tech Lead, Fortune 500',
    image: '👨‍💻',
    content:
      'Youssef delivered exceptional results on our AI project. His ability to understand business requirements and translate them into effective ML solutions is outstanding.',
    rating: 5,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Dr. Rachel Green',
    role: 'Research Scientist',
    image: '👩‍🔬',
    content:
      "Youssef's research skills and attention to scientific rigor are remarkable. He contributed significantly to our NLP research with innovative solutions and thorough documentation.",
    rating: 5,
    color: 'from-lime-500 to-green-500',
  },
  {
    name: 'Ahmed Ali',
    role: 'Startup Founder',
    image: '👨‍💼',
    content:
      'Youssef helped us build our entire ML infrastructure from scratch. His expertise in cloud deployment and MLOps was exactly what we needed to scale our startup.',
    rating: 5,
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Jennifer Lee',
    role: 'Director of Analytics',
    image: '👩‍💻',
    content:
      "Youssef's analytical thinking and problem-solving abilities are exceptional. He transformed our data pipeline and improved our model accuracy by over 40%.",
    rating: 5,
    color: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Dr. Mohammed Hassan',
    role: 'Medical AI Researcher',
    image: '👨‍⚕️',
    content:
      "Youssef's work in healthcare AI is truly impressive. His models are not only accurate but also interpretable, which is crucial in medical applications.",
    rating: 5,
    color: 'from-sky-500 to-cyan-500',
  },
  {
    name: 'Catherine Brown',
    role: 'VP of Technology',
    image: '👩‍💼',
    content:
      "Youssef is one of the most talented data scientists I've worked with. His combination of theoretical knowledge and practical skills is rare and valuable.",
    rating: 5,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    name: 'Alex Kumar',
    role: 'ML Engineer',
    image: '👨‍💻',
    content:
      "Collaborating with Youssef was a learning experience. His expertise in deep learning and computer vision helped elevate our entire team's capabilities.",
    rating: 5,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Dr. Sophia Wang',
    role: 'AI Research Lead',
    image: '👩‍🔬',
    content:
      "Youssef's research contributions and innovative approaches to NLP problems have been invaluable. He brings both creativity and technical excellence to every project.",
    rating: 5,
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Daniel Miller',
    role: 'Chief Data Officer',
    image: '👨‍💼',
    content:
      'Youssef transformed our data strategy with his advanced analytics and ML solutions. His work directly contributed to a 25% increase in operational efficiency.',
    rating: 5,
    color: 'from-blue-600 to-indigo-500',
  },
  {
    name: 'Olivia Taylor',
    role: 'Product Manager, AI',
    image: '👩‍💻',
    content:
      'Youssef has an incredible ability to bridge the gap between technical complexity and business value. His solutions are always practical and impactful.',
    rating: 5,
    color: 'from-pink-600 to-rose-500',
  },
  {
    name: 'Omar Khalil',
    role: 'Tech Lead, Dubai',
    image: '👨‍💻',
    content:
      'يوسف محترف استثنائي في مجال الذكاء الاصطناعي. عمله معنا كان متميزاً وقدم حلولاً مبتكرة تجاوزت توقعاتنا. Youssef is an exceptional AI professional. His work with us was outstanding and delivered innovative solutions beyond our expectations.',
    rating: 5,
    color: 'from-emerald-600 to-teal-500',
  },
  {
    name: 'Fatima Noor',
    role: 'Data Science Director',
    image: '👩‍💼',
    content:
      "Youssef's expertise in machine learning and NLP is remarkable. He brought significant value to our AI projects and his technical depth is impressive.",
    rating: 5,
    color: 'from-purple-600 to-violet-500',
  },
  {
    name: 'Khaled Mansour',
    role: 'CTO, Riyadh',
    image: '👨‍💼',
    content:
      'Working with Youssef was a great experience. His understanding of complex ML algorithms and ability to implement them in production environments is outstanding.',
    rating: 5,
    color: 'from-orange-600 to-red-500',
  },
  {
    name: 'Layla Ibrahim',
    role: 'AI Research Scientist',
    image: '👩‍🔬',
    content:
      "Youssef's contributions to our NLP research were invaluable. His innovative approaches and thorough methodology resulted in breakthrough results.",
    rating: 5,
    color: 'from-cyan-600 to-blue-500',
  },
  {
    name: 'Tariq Al-Said',
    role: 'VP Engineering, Abu Dhabi',
    image: '👨‍💻',
    content:
      'Youssef delivered exceptional AI solutions for our company. His professionalism, technical skills, and commitment to excellence are truly remarkable.',
    rating: 5,
    color: 'from-indigo-600 to-purple-500',
  },
  {
    name: 'Amira Haddad',
    role: 'Head of Data Science',
    image: '👩‍💻',
    content:
      "Youssef's work on our deep learning models exceeded all expectations. His expertise in neural networks and optimization techniques is world-class.",
    rating: 5,
    color: 'from-rose-600 to-pink-500',
  },
  {
    name: 'Hassan Mahmoud',
    role: 'Startup Founder, Cairo',
    image: '👨‍💼',
    content:
      'Youssef helped us build our AI infrastructure from the ground up. His knowledge of MLOps and cloud deployment was exactly what we needed.',
    rating: 5,
    color: 'from-lime-600 to-green-500',
  },
  {
    name: 'Nadia Aziz',
    role: 'Product Manager, Tech',
    image: '👩‍💼',
    content:
      "Youssef's ability to translate complex AI concepts into business solutions is exceptional. He's a true asset to any AI project.",
    rating: 5,
    color: 'from-amber-600 to-yellow-500',
  },
  {
    name: 'Youssef Kamal',
    role: 'ML Engineer Lead',
    image: '👨‍💻',
    content:
      'Working alongside Youssef was an incredible learning experience. His deep learning expertise and mentorship helped our entire team grow.',
    rating: 5,
    color: 'from-violet-600 to-purple-500',
  },
  {
    name: 'Salma Fathi',
    role: 'AI Solutions Architect',
    image: '👩‍💻',
    content:
      "Youssef's architectural decisions and ML implementations were spot-on. His solutions are scalable, efficient, and production-ready.",
    rating: 5,
    color: 'from-fuchsia-600 to-pink-500',
  },
  {
    name: 'Ibrahim Saeed',
    role: 'Chief Data Scientist',
    image: '👨‍🔬',
    content:
      'Youssef brought innovation and technical excellence to our data science team. His predictive models improved our accuracy by 35%.',
    rating: 5,
    color: 'from-sky-600 to-cyan-500',
  },
  {
    name: 'Mariam Yousef',
    role: 'Director of AI, Dubai',
    image: '👩‍💼',
    content:
      "Youssef's AI solutions transformed our business operations. His combination of technical skill and business acumen is rare and valuable.",
    rating: 5,
    color: 'from-teal-600 to-emerald-500',
  },
]

// Generate positions for each bubble
const generateBubbleProps = (index: number) => {
  const positions = [
    { x: '10%', y: '12%' },
    { x: '75%', y: '8%' },
    { x: '20%', y: '45%' },
    { x: '80%', y: '55%' },
    { x: '45%', y: '20%' },
    { x: '15%', y: '70%' },
    { x: '70%', y: '35%' },
    { x: '40%', y: '65%' },
    { x: '60%', y: '15%' },
    { x: '25%', y: '30%' },
    { x: '85%', y: '40%' },
    { x: '5%', y: '50%' },
    { x: '50%', y: '60%' },
    { x: '35%', y: '5%' },
    { x: '65%', y: '75%' },
    { x: '30%', y: '85%' },
    { x: '90%', y: '25%' },
    { x: '55%', y: '3%' },
    { x: '12%', y: '40%' },
    { x: '78%', y: '80%' },
    { x: '42%', y: '48%' },
    { x: '68%', y: '62%' },
    { x: '18%', y: '58%' },
    { x: '88%', y: '18%' },
    { x: '52%', y: '38%' },
    { x: '8%', y: '28%' },
    { x: '72%', y: '52%' },
    { x: '28%', y: '92%' },
    { x: '62%', y: '88%' },
    { x: '38%', y: '82%' },
    { x: '82%', y: '68%' },
    { x: '48%', y: '78%' },
  ]

  return positions[index % positions.length]
}

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null)

  return (
    <section className="relative min-h-[800px] overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative z-10 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="from-primary-500 mb-4 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What People Say 💬
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by teams and professionals worldwide
          </motion.p>
        </motion.div>

        {/* Floating Name Bubbles */}
        <div className="relative mt-12 h-[600px]">
          {testimonials.map((testimonial, index) => {
            const position = generateBubbleProps(index)
            return (
              <motion.button
                key={index}
                onClick={() => setSelectedTestimonial(index)}
                className={`absolute bg-gradient-to-r ${testimonial.color} cursor-pointer rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap text-white shadow-lg transition-shadow hover:shadow-2xl md:text-base`}
                style={{
                  left: position.x,
                  top: position.y,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  transition: {
                    y: {
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    x: {
                      duration: 4 + index * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  },
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {testimonial.name}
              </motion.button>
            )
          })}
        </div>

        {/* Testimonial Modal */}
        <AnimatePresence>
          {selectedTestimonial !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTestimonial(null)}
              />

              {/* Modal */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTestimonial(null)}
              >
                <motion.div
                  className="relative mx-auto w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl md:p-12 dark:bg-gray-800"
                  initial={{ scale: 0.8, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 50 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedTestimonial(null)}
                    className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-2xl transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    ×
                  </button>

                  {/* Decorative quote */}
                  <div className="text-primary-200 dark:text-primary-900 absolute top-8 left-8 text-8xl opacity-50">
                    "
                  </div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="mb-6 flex justify-center gap-2">
                      {[...Array(testimonials[selectedTestimonial].rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="text-3xl"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="mb-8 text-center text-xl leading-relaxed text-gray-700 italic md:text-2xl dark:text-gray-300">
                      {testimonials[selectedTestimonial].content}
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-6xl">{testimonials[selectedTestimonial].image}</div>
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {testimonials[selectedTestimonial].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {testimonials[selectedTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
