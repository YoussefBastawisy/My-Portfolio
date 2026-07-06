'use client'

import { motion } from 'framer-motion'
import Link from '@/components/Link'

export default function RoadmapPage() {
  const phases = [
    {
      number: 1,
      title: 'Foundations',
      duration: '1-2 Months',
      accent: 'bg-blue-500',
      categories: [
        {
          name: 'Programming',
          difficulty: 'Beginner',
          topics: [
            {
              name: 'Python',
              subtopics: [
                'Data Types & Control Flow',
                'Functions & OOP',
                'Async & Type Hints',
                'Virtual Envs & Packaging',
              ],
              resources: [
                { title: 'Python for Everybody', link: 'https://www.py4e.com/' },
                { title: 'Real Python', link: 'https://realpython.com/' },
              ],
            },
            {
              name: 'Version Control',
              subtopics: ['Git Basics', 'Branches & Pull Requests', 'GitHub Workflow'],
              resources: [
                { title: 'Git Documentation', link: 'https://git-scm.com/doc' },
                { title: 'GitHub Skills', link: 'https://skills.github.com/' },
              ],
            },
          ],
        },
        {
          name: 'Computer Science',
          difficulty: 'Beginner',
          topics: [
            {
              name: 'Data Structures & Algorithms',
              subtopics: ['Arrays & Hashing', 'Big-O Notation', 'Recursion', 'Trees & Graphs'],
              resources: [
                { title: 'NeetCode', link: 'https://neetcode.io/' },
                { title: 'Harvard CS50', link: 'https://cs50.harvard.edu/x/' },
              ],
            },
          ],
        },
        {
          name: 'Math for ML',
          difficulty: 'Intermediate',
          topics: [
            {
              name: 'Core Math',
              subtopics: ['Linear Algebra', 'Calculus & Gradients', 'Probability & Statistics'],
              resources: [
                {
                  title: '3Blue1Brown — Linear Algebra',
                  link: 'https://www.3blue1brown.com/topics/linear-algebra',
                },
                {
                  title: 'Khan Academy — Statistics',
                  link: 'https://www.khanacademy.org/math/statistics-probability',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: 'Data & Machine Learning',
      duration: '3-4 Months',
      accent: 'bg-emerald-500',
      categories: [
        {
          name: 'Data Handling',
          difficulty: 'Intermediate',
          topics: [
            {
              name: 'Python Data Stack',
              subtopics: ['NumPy', 'Pandas', 'Data Cleaning', 'Feature Engineering'],
              resources: [
                { title: 'Pandas Documentation', link: 'https://pandas.pydata.org/docs/' },
                { title: 'Kaggle — Pandas', link: 'https://www.kaggle.com/learn/pandas' },
              ],
            },
            {
              name: 'SQL & Databases',
              subtopics: ['Joins & Aggregations', 'Window Functions', 'PostgreSQL'],
              resources: [
                { title: 'SQLBolt', link: 'https://sqlbolt.com/' },
                { title: 'Mode SQL Tutorial', link: 'https://mode.com/sql-tutorial/' },
              ],
            },
          ],
        },
        {
          name: 'Classical Machine Learning',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Supervised & Unsupervised Learning',
              subtopics: [
                'Regression & Classification',
                'Gradient Boosting (XGBoost)',
                'Clustering & PCA',
                'Model Evaluation',
              ],
              resources: [
                { title: 'scikit-learn Documentation', link: 'https://scikit-learn.org/' },
                {
                  title: 'Andrew Ng — Machine Learning',
                  link: 'https://www.coursera.org/specializations/machine-learning-introduction',
                },
              ],
            },
          ],
        },
        {
          name: 'Deep Learning',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Neural Networks',
              subtopics: ['Backpropagation & Optimizers', 'CNNs', 'RNN / LSTM', 'PyTorch'],
              resources: [
                { title: 'fast.ai — Practical Deep Learning', link: 'https://course.fast.ai/' },
                { title: 'PyTorch Tutorials', link: 'https://pytorch.org/tutorials/' },
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: 'Large Language Models',
      duration: '2-3 Months',
      accent: 'bg-primary-500',
      categories: [
        {
          name: 'Transformers & Foundations',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'How LLMs Work',
              subtopics: [
                'Attention & Transformers',
                'Tokenization',
                'Embeddings',
                'Sampling & Decoding',
              ],
              resources: [
                {
                  title: 'The Illustrated Transformer',
                  link: 'https://jalammar.github.io/illustrated-transformer/',
                },
                {
                  title: 'Karpathy — Neural Nets: Zero to Hero',
                  link: 'https://karpathy.ai/zero-to-hero.html',
                },
                {
                  title: 'Hugging Face LLM Course',
                  link: 'https://huggingface.co/learn/llm-course',
                },
              ],
            },
          ],
        },
        {
          name: 'Working with LLMs',
          difficulty: 'Intermediate',
          topics: [
            {
              name: 'Prompt Engineering',
              subtopics: [
                'Zero / Few-shot',
                'Chain-of-Thought',
                'Structured Outputs',
                'Prompt Caching',
              ],
              resources: [
                {
                  title: 'Anthropic — Prompt Engineering',
                  link: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
                },
                { title: 'OpenAI Cookbook', link: 'https://cookbook.openai.com/' },
              ],
            },
            {
              name: 'LLM APIs & SDKs',
              subtopics: [
                'Claude / OpenAI APIs',
                'Streaming (SSE)',
                'Function & Tool Calling',
                'Token & Cost Management',
              ],
              resources: [
                { title: 'Anthropic API Docs', link: 'https://docs.anthropic.com/' },
                { title: 'OpenAI Platform Docs', link: 'https://platform.openai.com/docs' },
              ],
            },
          ],
        },
        {
          name: 'Fine-tuning & Adaptation',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Customizing Models',
              subtopics: [
                'LoRA / PEFT',
                'Instruction Tuning',
                'Quantization',
                'Open Models (Llama, Qwen)',
              ],
              resources: [
                { title: 'Hugging Face PEFT', link: 'https://huggingface.co/docs/peft' },
                { title: 'Unsloth Documentation', link: 'https://docs.unsloth.ai/' },
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: 'RAG & Retrieval',
      duration: '1-2 Months',
      accent: 'bg-orange-500',
      categories: [
        {
          name: 'Retrieval Foundations',
          difficulty: 'Intermediate',
          topics: [
            {
              name: 'Embeddings & Vector Search',
              subtopics: [
                'Embedding Models',
                'Vector Databases (Qdrant, Chroma)',
                'Similarity Search',
                'Hybrid Search',
              ],
              resources: [
                { title: 'Qdrant Documentation', link: 'https://qdrant.tech/documentation/' },
                { title: 'Pinecone — Learn', link: 'https://www.pinecone.io/learn/' },
              ],
            },
          ],
        },
        {
          name: 'Building RAG',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'RAG Pipelines',
              subtopics: [
                'Chunking Strategies',
                'Reranking (Cross-Encoders)',
                'Query Rewriting',
                'Deduplication',
              ],
              resources: [
                { title: 'LlamaIndex Documentation', link: 'https://docs.llamaindex.ai/' },
                {
                  title: 'LangChain — RAG Tutorial',
                  link: 'https://python.langchain.com/docs/tutorials/rag/',
                },
              ],
            },
            {
              name: 'Advanced RAG',
              subtopics: ['Agentic RAG', 'GraphRAG', 'Multimodal RAG', 'Context Engineering'],
              resources: [
                {
                  title: 'Anthropic — Contextual Retrieval',
                  link: 'https://www.anthropic.com/news/contextual-retrieval',
                },
              ],
            },
          ],
        },
        {
          name: 'Evaluation',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'RAG Evaluation',
              subtopics: [
                'hit@k / MRR / nDCG',
                'Faithfulness & Relevance',
                'Golden Datasets',
                'RAGAS',
              ],
              resources: [{ title: 'RAGAS Documentation', link: 'https://docs.ragas.io/' }],
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: 'AI Agents',
      duration: '2-3 Months',
      accent: 'bg-violet-500',
      categories: [
        {
          name: 'Agent Fundamentals',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Building Agents',
              subtopics: [
                'ReAct & Tool Use',
                'Function Calling',
                'Structured Outputs',
                'Memory & State',
              ],
              resources: [
                {
                  title: 'Anthropic — Building Effective Agents',
                  link: 'https://www.anthropic.com/engineering/building-effective-agents',
                },
                { title: 'Pydantic AI Documentation', link: 'https://ai.pydantic.dev/' },
              ],
            },
          ],
        },
        {
          name: 'Orchestration Frameworks',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Agent Frameworks',
              subtopics: ['LangGraph', 'Pydantic AI', 'LlamaIndex Agents', 'Claude Agent SDK'],
              resources: [
                {
                  title: 'LangGraph Documentation',
                  link: 'https://langchain-ai.github.io/langgraph/',
                },
                {
                  title: 'Claude Agent SDK',
                  link: 'https://docs.anthropic.com/en/api/agent-sdk/overview',
                },
              ],
            },
            {
              name: 'Multi-Agent Systems',
              subtopics: [
                'Orchestrator–Worker',
                'Planning & Delegation',
                'Agent Communication',
                'Human-in-the-Loop',
              ],
              resources: [
                {
                  title: 'Anthropic — Multi-Agent Research System',
                  link: 'https://www.anthropic.com/engineering/multi-agent-research-system',
                },
              ],
            },
          ],
        },
        {
          name: 'Automation & Tooling',
          difficulty: 'Intermediate',
          topics: [
            {
              name: 'Workflow Automation',
              subtopics: [
                'n8n',
                'Model Context Protocol (MCP)',
                'Code Execution & Sandboxes',
                'Web Search & Browsing',
              ],
              resources: [
                { title: 'n8n Documentation', link: 'https://docs.n8n.io/' },
                { title: 'Model Context Protocol', link: 'https://modelcontextprotocol.io/' },
              ],
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: 'Production & LLMOps',
      duration: 'Ongoing',
      accent: 'bg-rose-500',
      categories: [
        {
          name: 'Serving & Deployment',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Model Serving',
              subtopics: [
                'FastAPI',
                'vLLM / TEI',
                'Docker',
                'Modal / Serverless GPU',
                'Reverse Proxy (Caddy)',
              ],
              resources: [
                { title: 'vLLM Documentation', link: 'https://docs.vllm.ai/' },
                { title: 'Modal Documentation', link: 'https://modal.com/docs' },
                { title: 'FastAPI Documentation', link: 'https://fastapi.tiangolo.com/' },
              ],
            },
          ],
        },
        {
          name: 'Evaluation & Reliability',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'LLM Evaluation',
              subtopics: ['LLM-as-a-Judge', 'Eval Datasets', 'Regression Testing', 'Guardrails'],
              resources: [{ title: 'OpenAI Evals', link: 'https://github.com/openai/evals' }],
            },
          ],
        },
        {
          name: 'Observability & Ops',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'LLMOps',
              subtopics: [
                'Tracing (Langfuse / LangSmith)',
                'Cost & Latency Monitoring',
                'Caching',
                'Prompt Versioning',
              ],
              resources: [
                { title: 'Langfuse Documentation', link: 'https://langfuse.com/docs' },
                { title: 'LangSmith Documentation', link: 'https://docs.smith.langchain.com/' },
              ],
            },
          ],
        },
        {
          name: 'Security & Cost',
          difficulty: 'Expert',
          topics: [
            {
              name: 'Safe & Efficient LLMs',
              subtopics: [
                'Prompt Injection Defense',
                'PII & Data Privacy',
                'Token Optimization',
                'Rate Limiting',
              ],
              resources: [
                { title: 'OWASP Top 10 for LLMs', link: 'https://genai.owasp.org/llm-top-10/' },
              ],
            },
          ],
        },
      ],
    },
  ]

  const stats = [
    { number: '6', label: 'Phases' },
    { number: '19', label: 'Categories' },
    { number: '24', label: 'Topics' },
    { number: '40+', label: 'Resources' },
  ]

  const difficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400'
      case 'Intermediate':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
      case 'Advanced':
        return 'bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400'
      default:
        return 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400'
    }
  }

  const tips = [
    {
      title: 'Learning tips',
      items: [
        'Build and ship real agents, not just notebooks',
        'Live in the provider docs & cookbooks (Anthropic, OpenAI)',
        'Reproduce papers and open-source agent repos',
        'Evaluate everything — measure before you optimize',
        'Follow the fast-moving ecosystem (releases, newsletters)',
      ],
    },
    {
      title: 'Essential tools',
      items: [
        'Python, FastAPI & Streamlit',
        'Claude / OpenAI APIs + an agent framework (Pydantic AI, LangGraph)',
        'A vector database (Qdrant, Chroma)',
        'Docker + serverless GPU (Modal)',
        'Tracing & evals (Langfuse, RAGAS)',
      ],
    },
  ]

  return (
    <section className="pt-14 pb-16 md:pt-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase">
          Learning path
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          AI Engineer Roadmap
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          How to become an AI Engineer who ships production agentic systems — from programming
          foundations to LLMs, RAG, autonomous agents, and LLMOps. This is the route I actually walk
          and teach.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="mt-10 flex flex-wrap gap-10 border-y border-gray-200 py-6 dark:border-gray-800">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.number}</div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-14 space-y-6">
        {phases.map((phase, phaseIndex) => (
          <motion.div
            key={phase.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: phaseIndex * 0.05 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-950"
          >
            {/* Phase header */}
            <div className="flex items-center gap-4 border-b border-gray-200 pb-6 dark:border-gray-800">
              <span
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white ${phase.accent}`}
              >
                {phase.number}
              </span>
              <div className="flex flex-1 flex-wrap items-center justify-between gap-2">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {phase.title}
                </h2>
                <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  {phase.duration}
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6 space-y-8">
              {phase.categories.map((category) => (
                <div key={category.name}>
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {category.name}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyStyle(category.difficulty)}`}
                    >
                      {category.difficulty}
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {category.topics.map((topic) => (
                      <div
                        key={topic.name}
                        className="rounded-xl border border-gray-200 p-4 dark:border-gray-800"
                      >
                        <h4 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
                          {topic.name}
                        </h4>
                        {topic.subtopics && (
                          <div className="mb-4 flex flex-wrap gap-1.5">
                            {topic.subtopics.map((subtopic) => (
                              <span
                                key={subtopic}
                                className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-900 dark:text-gray-400"
                              >
                                {subtopic}
                              </span>
                            ))}
                          </div>
                        )}
                        <ul className="space-y-1.5">
                          {topic.resources.map((resource) => (
                            <li key={resource.link}>
                              <Link
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-1.5 text-sm transition-colors"
                              >
                                <span aria-hidden className="text-gray-400">
                                  ↗
                                </span>
                                {resource.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {tips.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-900/40"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400"
                >
                  <svg
                    className="text-primary-500 mt-0.5 h-4 w-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Want to build production agentic AI systems?
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/projects"
            className="bg-primary-600 hover:bg-primary-700 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            View my projects
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-100"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
