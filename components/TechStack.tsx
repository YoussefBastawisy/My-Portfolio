'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const techCategories = [
  {
    category: 'Languages',
    items: ['Python', 'R', 'SQL'],
  },
  {
    category: 'Agentic & LLM Frameworks',
    items: ['Pydantic AI', 'LangGraph', 'LangChain', 'LlamaIndex', 'Claude Agent SDK', 'Cycls SDK'],
  },
  {
    category: 'GenAI / LLMs',
    items: [
      'RAG',
      'Function Calling',
      'Multi-Agent Orchestration',
      'Structured Outputs',
      'Embeddings & Reranking',
      'Semantic Search',
    ],
  },
  {
    category: 'Retrieval & Serving',
    items: ['Qdrant', 'ChromaDB', 'vLLM', 'TEI', 'Tesseract OCR', 'SSE Streaming'],
  },
  {
    category: 'Backend & MLOps',
    items: ['FastAPI', 'Streamlit', 'n8n', 'Docker', 'Modal', 'Google Cloud', 'Git', 'Linux'],
  },
  {
    category: 'ML & Deep Learning',
    items: ['scikit-learn', 'TensorFlow', 'Keras', 'Transformers', 'NLTK', 'SpaCy'],
  },
]

export default function TechStack() {
  return (
    <section className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Toolbox"
        title="Technologies I work with"
        description="The stack I reach for to build production-grade agentic AI systems."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.category}
            className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
          >
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
              <span className="bg-primary-500 h-1.5 w-1.5 rounded-full" />
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="hover:border-primary-400 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition-colors dark:border-gray-800 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
