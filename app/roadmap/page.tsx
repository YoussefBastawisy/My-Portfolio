'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from '@/components/Link'
import { useRef } from 'react'

export default function RoadmapPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const phases = [
    {
      number: 1,
      title: 'Basics',
      duration: '2-3 Months',
      color: 'from-blue-500 to-cyan-500',
      categories: [
        {
          name: 'Programming Fundamentals',
          difficulty: 'Beginner',
          topics: [
            {
              name: 'Python Programming',
              subtopics: ['Variables & Data Types', 'Control Flow', 'Functions', 'OOP Basics'],
              resources: [
                { title: 'Python for Everybody', link: 'https://www.py4e.com/' },
                { title: 'Automate the Boring Stuff', link: 'https://automatetheboringstuff.com/' },
              ],
            },
          ],
        },
        {
          name: 'Spreadsheet Tools',
          difficulty: 'Beginner',
          topics: [
            {
              name: 'Excel Mastery',
              subtopics: ['Formulas & Functions', 'Pivot Tables', 'Data Cleaning', 'Basic Charts'],
              resources: [
                {
                  title: 'Excel Skills for Business',
                  link: 'https://www.coursera.org/specializations/excel',
                },
              ],
            },
          ],
        },
        {
          name: 'Version Control',
          difficulty: 'Beginner',
          topics: [
            {
              name: 'Git & GitHub',
              subtopics: ['Commits & Branches', 'Pull Requests', 'Collaboration', 'GitHub Pages'],
              resources: [
                { title: 'Git Documentation', link: 'https://git-scm.com/doc' },
                { title: 'GitHub Learning Lab', link: 'https://lab.github.com/' },
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: 'Descriptive Analytics',
      duration: '3-4 Months',
      color: 'from-green-500 to-emerald-500',
      categories: [
        {
          name: 'Statistical Foundations',
          difficulty: 'Intermediate',
          topics: [
            {
              name: 'Core Statistics',
              subtopics: [
                'Descriptive Statistics',
                'Probability Distributions',
                'Hypothesis Testing',
                'Correlation & Regression',
              ],
              resources: [
                {
                  title: 'Khan Academy Statistics',
                  link: 'https://www.khanacademy.org/math/statistics-probability',
                },
                { title: 'Think Stats Book', link: 'https://greenteapress.com/thinkstats/' },
              ],
            },
          ],
        },
        {
          name: 'Data Manipulation',
          difficulty: 'Intermediate',
          topics: [
            {
              name: 'SQL for Data Analysis',
              subtopics: ['SELECT & Joins', 'Aggregations', 'Subqueries', 'Window Functions'],
              resources: [
                { title: 'Mode SQL Tutorial', link: 'https://mode.com/sql-tutorial/' },
                { title: 'SQLBolt Interactive Tutorial', link: 'https://sqlbolt.com/' },
              ],
            },
            {
              name: 'Python Data Libraries',
              subtopics: [
                'Pandas DataFrames',
                'NumPy Arrays',
                'Data Cleaning',
                'Feature Engineering',
              ],
              resources: [
                { title: 'Pandas Documentation', link: 'https://pandas.pydata.org/docs/' },
                {
                  title: '10 Minutes to Pandas',
                  link: 'https://pandas.pydata.org/docs/user_guide/10min.html',
                },
              ],
            },
          ],
        },
        {
          name: 'Data Visualization',
          difficulty: 'Intermediate',
          topics: [
            {
              name: 'BI Tools',
              subtopics: ['Power BI', 'Tableau', 'Dashboard Design', 'Interactive Reports'],
              resources: [
                {
                  title: 'Power BI Documentation',
                  link: 'https://docs.microsoft.com/en-us/power-bi/',
                },
                { title: 'Tableau Public Gallery', link: 'https://public.tableau.com/gallery' },
              ],
            },
            {
              name: 'Python Visualization',
              subtopics: ['Matplotlib', 'Seaborn', 'Plotly', 'Dash Apps'],
              resources: [
                {
                  title: 'Matplotlib Tutorials',
                  link: 'https://matplotlib.org/stable/tutorials/index.html',
                },
                { title: 'Plotly Documentation', link: 'https://plotly.com/python/' },
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: 'Predictive Analytics',
      duration: '4-6 Months',
      color: 'from-purple-500 to-pink-500',
      categories: [
        {
          name: 'Mathematical Foundations',
          difficulty: 'Intermediate',
          topics: [
            {
              name: 'Linear Algebra',
              subtopics: [
                'Vectors & Matrices',
                'Eigenvalues',
                'Matrix Decomposition',
                'Linear Transformations',
              ],
              resources: [
                {
                  title: '3Blue1Brown - Essence of Linear Algebra',
                  link: 'https://www.3blue1brown.com/topics/linear-algebra',
                },
                {
                  title: 'MIT Linear Algebra',
                  link: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
                },
              ],
            },
            {
              name: 'Calculus & Optimization',
              subtopics: [
                'Derivatives',
                'Gradient Descent',
                'Chain Rule',
                'Optimization Techniques',
              ],
              resources: [
                {
                  title: 'Khan Academy Calculus',
                  link: 'https://www.khanacademy.org/math/calculus-1',
                },
                {
                  title: '3Blue1Brown - Calculus',
                  link: 'https://www.3blue1brown.com/topics/calculus',
                },
              ],
            },
            {
              name: 'Probability Theory',
              subtopics: ['Bayes Theorem', 'Distributions', 'Expectation', 'Random Variables'],
              resources: [{ title: 'Seeing Theory', link: 'https://seeing-theory.brown.edu/' }],
            },
          ],
        },
        {
          name: 'Classical Machine Learning',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Supervised Learning',
              subtopics: [
                'Linear Regression',
                'Logistic Regression',
                'Decision Trees',
                'Random Forests',
                'SVM',
                'Gradient Boosting (XGBoost, LightGBM)',
              ],
              resources: [
                {
                  title: 'Andrew Ng - Machine Learning',
                  link: 'https://www.coursera.org/learn/machine-learning',
                },
                { title: 'Scikit-learn Documentation', link: 'https://scikit-learn.org/' },
              ],
            },
            {
              name: 'Unsupervised Learning',
              subtopics: [
                'K-Means Clustering',
                'Hierarchical Clustering',
                'PCA',
                't-SNE',
                'DBSCAN',
              ],
              resources: [
                {
                  title: 'Unsupervised Learning Guide',
                  link: 'https://scikit-learn.org/stable/unsupervised_learning.html',
                },
              ],
            },
            {
              name: 'Model Evaluation',
              subtopics: [
                'Cross-Validation',
                'Confusion Matrix',
                'ROC-AUC',
                'Hyperparameter Tuning',
                'Feature Selection',
              ],
              resources: [
                {
                  title: 'Model Evaluation Guide',
                  link: 'https://scikit-learn.org/stable/model_selection.html',
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
              name: 'Neural Networks Fundamentals',
              subtopics: [
                'Perceptrons',
                'Backpropagation',
                'Activation Functions',
                'Loss Functions',
                'Optimizers',
              ],
              resources: [
                {
                  title: 'Neural Networks & Deep Learning',
                  link: 'http://neuralnetworksanddeeplearning.com/',
                },
                { title: 'Fast.ai Practical Deep Learning', link: 'https://course.fast.ai/' },
              ],
            },
            {
              name: 'CNN & Computer Vision',
              subtopics: [
                'Convolutional Layers',
                'ResNet',
                'Image Classification',
                'Object Detection',
                'Transfer Learning',
              ],
              resources: [{ title: 'CS231n Stanford', link: 'http://cs231n.stanford.edu/' }],
            },
            {
              name: 'RNN & NLP Basics',
              subtopics: [
                'LSTM',
                'GRU',
                'Sequence Models',
                'Text Classification',
                'Word Embeddings',
              ],
              resources: [
                { title: 'RNN Guide', link: 'https://www.tensorflow.org/guide/keras/rnn' },
              ],
            },
          ],
        },
        {
          name: 'Deep Learning Frameworks',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Framework Mastery',
              subtopics: [
                'TensorFlow/Keras',
                'PyTorch',
                'Model Building',
                'Custom Layers',
                'Training Loops',
              ],
              resources: [
                { title: 'TensorFlow Tutorials', link: 'https://www.tensorflow.org/tutorials' },
                { title: 'PyTorch Tutorials', link: 'https://pytorch.org/tutorials/' },
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: 'Prescriptive Analytics',
      duration: '2-3 Months',
      color: 'from-orange-500 to-red-500',
      categories: [
        {
          name: 'Optimization Techniques',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Mathematical Optimization',
              subtopics: [
                'Linear Programming',
                'Convex Optimization',
                'Gradient-Based Methods',
                'Constrained Optimization',
              ],
              resources: [
                {
                  title: 'Convex Optimization (Stanford)',
                  link: 'https://web.stanford.edu/~boyd/cvxbook/',
                },
                {
                  title: 'SciPy Optimization',
                  link: 'https://docs.scipy.org/doc/scipy/reference/optimize.html',
                },
              ],
            },
            {
              name: 'Heuristic Algorithms',
              subtopics: [
                'Genetic Algorithms',
                'Simulated Annealing',
                'Particle Swarm',
                'Ant Colony',
              ],
              resources: [
                {
                  title: 'Optimization Algorithms',
                  link: 'https://en.wikipedia.org/wiki/Metaheuristic',
                },
              ],
            },
          ],
        },
        {
          name: 'Simulation & Modeling',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Simulation Methods',
              subtopics: [
                'Monte Carlo',
                'Discrete Event Simulation',
                'Agent-Based Modeling',
                'System Dynamics',
              ],
              resources: [
                { title: 'SimPy Documentation', link: 'https://simpy.readthedocs.io/' },
                {
                  title: 'Monte Carlo Methods',
                  link: 'https://en.wikipedia.org/wiki/Monte_Carlo_method',
                },
              ],
            },
          ],
        },
        {
          name: 'Decision Science',
          difficulty: 'Advanced',
          topics: [
            {
              name: 'Decision Analysis',
              subtopics: [
                'Decision Trees',
                'Multi-Criteria Decision Making',
                'Risk Analysis',
                'Game Theory Basics',
              ],
              resources: [
                {
                  title: 'Decision Analysis Resources',
                  link: 'https://en.wikipedia.org/wiki/Decision_analysis',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: 'Advanced Topics & Specializations',
      duration: '4-6 Months',
      color: 'from-indigo-500 to-purple-600',
      categories: [
        {
          name: 'Natural Language Processing',
          difficulty: 'Expert',
          topics: [
            {
              name: 'Modern NLP',
              subtopics: [
                'Transformers',
                'BERT',
                'GPT Models',
                'Fine-tuning LLMs',
                'Prompt Engineering',
                'RAG Systems',
              ],
              resources: [
                { title: 'Hugging Face Course', link: 'https://huggingface.co/course' },
                { title: 'Stanford CS224N', link: 'http://web.stanford.edu/class/cs224n/' },
                { title: 'LangChain Documentation', link: 'https://python.langchain.com/' },
              ],
            },
            {
              name: 'Text Processing',
              subtopics: [
                'Tokenization',
                'Named Entity Recognition',
                'Sentiment Analysis',
                'Text Generation',
              ],
              resources: [{ title: 'spaCy Documentation', link: 'https://spacy.io/' }],
            },
          ],
        },
        {
          name: 'MLOps & Production',
          difficulty: 'Expert',
          topics: [
            {
              name: 'Model Deployment',
              subtopics: ['Docker Containers', 'Kubernetes', 'FastAPI', 'Flask', 'Model Serving'],
              resources: [
                { title: 'MLOps Guide', link: 'https://ml-ops.org/' },
                { title: 'Docker Documentation', link: 'https://docs.docker.com/' },
              ],
            },
            {
              name: 'ML Pipeline',
              subtopics: ['MLflow', 'Kubeflow', 'CI/CD for ML', 'Model Monitoring', 'A/B Testing'],
              resources: [{ title: 'MLflow Documentation', link: 'https://mlflow.org/' }],
            },
            {
              name: 'Cloud Platforms',
              subtopics: ['AWS SageMaker', 'Google Cloud AI', 'Azure ML', 'Serverless ML'],
              resources: [
                { title: 'AWS Machine Learning', link: 'https://aws.amazon.com/machine-learning/' },
              ],
            },
          ],
        },
        {
          name: 'Big Data Technologies',
          difficulty: 'Expert',
          topics: [
            {
              name: 'Distributed Computing',
              subtopics: [
                'Apache Spark',
                'PySpark',
                'Hadoop Ecosystem',
                'Data Lakes',
                'Stream Processing',
              ],
              resources: [
                { title: 'Spark Documentation', link: 'https://spark.apache.org/docs/latest/' },
                { title: 'Databricks Learning', link: 'https://www.databricks.com/learn' },
              ],
            },
            {
              name: 'Data Engineering',
              subtopics: ['Airflow', 'Data Pipelines', 'ETL Processes', 'Data Warehousing'],
              resources: [{ title: 'Apache Airflow', link: 'https://airflow.apache.org/' }],
            },
          ],
        },
        {
          name: 'Specialized Domains',
          difficulty: 'Expert',
          topics: [
            {
              name: 'Computer Vision',
              subtopics: ['Object Detection', 'Image Segmentation', 'Face Recognition', 'GANs'],
              resources: [{ title: 'OpenCV Documentation', link: 'https://docs.opencv.org/' }],
            },
            {
              name: 'Time Series Analysis',
              subtopics: ['ARIMA', 'Prophet', 'LSTM for Time Series', 'Forecasting'],
              resources: [
                {
                  title: 'Time Series Guide',
                  link: 'https://www.tensorflow.org/tutorials/structured_data/time_series',
                },
              ],
            },
            {
              name: 'Reinforcement Learning',
              subtopics: ['Q-Learning', 'Policy Gradient', 'DQN', 'Multi-Armed Bandits'],
              resources: [{ title: 'OpenAI Spinning Up', link: 'https://spinningup.openai.com/' }],
            },
          ],
        },
      ],
    },
  ]

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
      {/* Fixed Progress Bar */}
      <motion.div
        className="from-primary-500 fixed top-0 right-0 left-0 z-50 h-1 origin-left bg-gradient-to-r via-pink-500 to-purple-600"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="bg-primary-500/20 absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-40 right-10 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 left-1/2 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.div
          className="relative space-y-6 pt-12 pb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="from-primary-500 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-5xl leading-tight font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data Science Roadmap
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl px-4 text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your complete journey from beginner to expert. Master the essential skills and tools to
            become a successful Data Scientist.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: '5', label: 'Phases' },
              { number: '17', label: 'Categories' },
              { number: '40+', label: 'Topics' },
              { number: '70+', label: 'Resources' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="from-primary-500 bg-gradient-to-r to-pink-500 bg-clip-text text-4xl font-bold text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Roadmap Timeline */}
      <div
        ref={containerRef}
        className="relative border-t border-gray-200 pt-12 pb-16 dark:border-gray-700"
      >
        <div className="mx-auto max-w-5xl">
          {/* Timeline */}
          <div className="relative">
            {/* Animated Vertical Line */}
            <motion.div
              className="from-primary-500 absolute top-0 bottom-0 left-8 hidden w-1 origin-top bg-gradient-to-b via-pink-500 to-purple-600 md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />

            {/* Phases */}
            <div className="space-y-16">
              {phases.map((phase, phaseIndex) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
                  className="relative"
                >
                  {/* Phase Number Circle */}
                  <div className="flex items-start gap-8">
                    <motion.div
                      className="relative z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r text-2xl font-bold text-white shadow-xl md:flex"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      }}
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(236, 72, 153, 0.7)',
                          '0 0 0 15px rgba(236, 72, 153, 0)',
                        ],
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity },
                      }}
                    >
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${phase.color}`}
                      ></div>
                      <span className="relative z-10">{phase.number}</span>
                    </motion.div>

                    {/* Phase Content */}
                    <div className="flex-1">
                      <motion.div
                        className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-2xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
                        whileHover={{ scale: 1.03, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Animated Border Glow */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${phase.color} rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Decorative Corner Elements */}
                        <div className="from-primary-500/10 absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-to-br to-transparent"></div>
                        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-tr-full bg-gradient-to-tr from-pink-500/10 to-transparent"></div>

                        {/* Phase Title */}
                        <motion.div
                          className="relative z-10 mb-8"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
                            <h2
                              className={`bg-gradient-to-r text-4xl font-extrabold ${phase.color} bg-clip-text text-transparent`}
                            >
                              {phase.title}
                            </h2>
                            <motion.span
                              className="from-primary-100 rounded-full bg-gradient-to-r to-pink-100 px-4 py-2 text-sm font-bold text-gray-700 dark:from-gray-700 dark:to-gray-800 dark:text-gray-300"
                              whileHover={{ scale: 1.05 }}
                            >
                              ⏱️ {phase.duration}
                            </motion.span>
                          </div>
                          <motion.div
                            className={`h-1 w-24 bg-gradient-to-r ${phase.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </motion.div>

                        {/* Categories */}
                        <div className="relative z-10 space-y-8">
                          {phase.categories.map((category, categoryIndex) => (
                            <motion.div
                              key={categoryIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                              className="relative"
                            >
                              {/* Category Header */}
                              <div className="border-gradient-to-r border-primary-200 mb-4 flex items-center justify-between border-b-2 pb-3 dark:border-gray-700">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                  {category.name}
                                </h3>
                                <motion.span
                                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                                    category.difficulty === 'Beginner'
                                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                      : category.difficulty === 'Intermediate'
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                        : category.difficulty === 'Advanced'
                                          ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                                          : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                  }`}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {category.difficulty}
                                </motion.span>
                              </div>

                              {/* Topics within Category */}
                              <div className="ml-6 space-y-6">
                                {category.topics.map((topic, topicIndex) => (
                                  <motion.div
                                    key={topicIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: topicIndex * 0.1 }}
                                    className="group/topic relative"
                                  >
                                    <motion.div
                                      className="from-primary-500 absolute top-0 bottom-0 -left-4 w-1 rounded-full bg-gradient-to-b to-pink-500"
                                      initial={{ scaleY: 0 }}
                                      whileInView={{ scaleY: 1 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.5, delay: topicIndex * 0.1 }}
                                    />
                                    <motion.div
                                      className="hover:from-primary-50/50 rounded-xl py-3 pl-6 transition-all duration-300 hover:bg-gradient-to-r hover:to-pink-50/50 dark:hover:from-gray-700/50 dark:hover:to-gray-800/50"
                                      whileHover={{ x: 5 }}
                                    >
                                      <h4 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                                        {topic.name}
                                      </h4>

                                      {/* Subtopics */}
                                      {topic.subtopics && (
                                        <div className="mb-4 flex flex-wrap gap-2">
                                          {topic.subtopics.map((subtopic, idx) => (
                                            <motion.span
                                              key={idx}
                                              initial={{ opacity: 0, scale: 0.8 }}
                                              whileInView={{ opacity: 1, scale: 1 }}
                                              viewport={{ once: true }}
                                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                                              whileHover={{ scale: 1.1, y: -2 }}
                                              className="cursor-default rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:shadow-md dark:from-gray-700 dark:to-gray-800 dark:text-gray-300"
                                            >
                                              {subtopic}
                                            </motion.span>
                                          ))}
                                        </div>
                                      )}

                                      {/* Resources */}
                                      <div className="space-y-3">
                                        {topic.resources.map((resource, idx) => (
                                          <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                            whileHover={{ x: 10, scale: 1.02 }}
                                            className="group/link relative"
                                          >
                                            <div className="hover:from-primary-50 flex items-center gap-3 rounded-lg bg-gradient-to-r from-transparent to-transparent p-3 transition-all duration-300 hover:to-pink-50 dark:hover:from-gray-700/50 dark:hover:to-gray-800/50">
                                              <motion.div
                                                className="from-primary-500 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r to-pink-500 text-sm font-bold text-white"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                              >
                                                {idx + 1}
                                              </motion.div>
                                              <Link
                                                href={resource.link}
                                                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex-1 font-medium transition-all group-hover/link:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                {resource.title}
                                              </Link>
                                              <motion.span
                                                className="text-primary-500 opacity-0 transition-opacity group-hover/link:opacity-100"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                              >
                                                →
                                              </motion.span>
                                            </div>
                                          </motion.div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Resources Section */}
          <motion.div
            className="relative mt-16 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="from-primary-500/10 absolute inset-0 bg-gradient-to-r via-pink-500/10 to-purple-500/10 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="border-primary-200 dark:border-primary-800 relative rounded-3xl border-2 bg-gradient-to-br from-white/80 to-gray-50/80 p-8 shadow-2xl backdrop-blur-xl dark:from-gray-800/80 dark:to-gray-900/80">
              <motion.h2
                className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Essential Tips for Your Journey
              </motion.h2>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    title: 'Learning Tips',
                    color: 'primary',
                    items: [
                      'Practice with real-world datasets (Kaggle, UCI)',
                      'Build a portfolio of 3-5 solid projects',
                      'Contribute to open-source projects',
                      'Join data science communities',
                      'Stay updated with latest research',
                    ],
                  },
                  {
                    title: 'Essential Tools',
                    color: 'pink',
                    items: [
                      'Jupyter Notebook / Google Colab',
                      'Git & GitHub for version control',
                      'Docker for containerization',
                      'Cloud platforms (AWS, GCP, Azure)',
                      'Streamlit / Gradio for deployment',
                    ],
                  },
                ].map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="space-y-4"
                  >
                    <div className="mb-6">
                      <h3
                        className={`bg-gradient-to-r text-2xl font-bold from-${section.color}-600 to-${section.color}-400 bg-clip-text text-transparent`}
                      >
                        {section.title}
                      </h3>
                      <motion.div
                        className={`h-1 w-16 bg-gradient-to-r from-${section.color}-500 to-${section.color}-400 mt-2 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                      />
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <motion.li
                          key={itemIdx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: itemIdx * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="hover:from-primary-50 flex items-start gap-3 rounded-lg p-3 transition-all hover:bg-gradient-to-r hover:to-pink-50 dark:hover:from-gray-700/50 dark:hover:to-gray-800/50"
                        >
                          <motion.div
                            className="from-primary-500 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r to-pink-500 text-xs font-bold text-white"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            ✓
                          </motion.div>
                          <span className="flex-1 text-gray-700 dark:text-gray-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="relative mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="from-primary-500/5 absolute inset-0 rounded-full bg-gradient-to-r via-pink-500/5 to-purple-500/5 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.p
              className="relative z-10 mb-8 text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to start your Data Science journey?
              <br />
              <span className="from-primary-500 bg-gradient-to-r to-pink-500 bg-clip-text font-bold text-transparent">
                Let's build something amazing together!
              </span>
            </motion.p>
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/projects"
                  className="group from-primary-500 relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r via-pink-500 to-purple-600 px-10 py-4 text-lg font-bold text-white shadow-2xl"
                >
                  <span className="relative z-10">View My Projects</span>
                  <motion.div
                    className="to-primary-500 absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="group border-primary-500 text-primary-500 relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border-3 bg-white px-10 py-4 text-lg font-bold shadow-xl transition-colors hover:text-white dark:bg-gray-900"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <motion.div
                    className="from-primary-500 absolute inset-0 bg-gradient-to-r to-pink-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
