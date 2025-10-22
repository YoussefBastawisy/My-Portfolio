interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tags?: string[]
  achievements?: string[]
}

const projectsData: Project[] = [
  {
    title: 'Mind Care - AI-Powered Alzheimer\'s Support System',
    description: `A comprehensive multi-platform system combining AI, VR, and Mobile Health to support Alzheimer's patients and caregivers. Features an AI-powered Avatar for cognitive assessment using NLP and Speech Recognition with 94% accuracy. Includes VR-based cognitive training with adaptive difficulty and a Flutter mobile app with real-time location tracking integrated with Firebase and Google Maps API.`,
    imgSrc: '/static/images/projects/mind-care.jpg',
    href: 'https://github.com/YoussefBastawisy',
    tags: ['NLP', 'VR', 'Flutter', 'Firebase', 'Google Maps API', 'TensorFlow', 'Speech Recognition'],
    achievements: [
      '🏆 1st Place - Faculty of Computer Science & AI Graduation Project',
      '🎯 94% accuracy in MMSE response interpretation',
      '📈 35% boost in cognitive engagement scores',
      '👥 Supported 100+ patients during pilot trials',
      '⚡ 40% reduction in emergency response times'
    ]
  },
  {
    title: 'Sentiment Analysis on TechCrunch News Articles',
    description: `Advanced NLP project analyzing sentiment in 1,000+ technology news articles from TechCrunch. Implemented web scraping with BeautifulSoup and NewsAPI, applied comprehensive text preprocessing with NLTK, and performed feature extraction using TF-IDF. Utilized KMeans clustering with PCA dimensionality reduction for thematic grouping and developed a high-accuracy sentiment classification model.`,
    imgSrc: '/static/images/projects/sentiment-analysis.jpg',
    href: 'https://github.com/YoussefBastawisy',
    tags: ['NLP', 'Python', 'BeautifulSoup', 'NLTK', 'TF-IDF', 'KMeans', 'PCA', 'Machine Learning'],
    achievements: [
      '🎯 96% model accuracy in sentiment classification',
      '📊 Analyzed 1,000+ articles from TechCrunch',
      '🔍 Applied advanced text preprocessing techniques',
      '📈 Effective thematic clustering with PCA',
      '💡 Generated WordClouds and visualizations'
    ]
  },
  {
    title: 'RAG-Based AI Agents',
    description: `Production-ready AI agent system leveraging Large Language Models with Retrieval Augmented Generation to ground outputs in factual data. Implemented function calling and tool-use protocols for real-time programmatic actions and external data integration. Designed scalable infrastructure supporting multiple AI agents in production environments with reduced hallucination rates.`,
    imgSrc: '/static/images/projects/rag-agents.jpg',
    href: 'https://github.com/YoussefBastawisy',
    tags: ['LLMs', 'RAG', 'Python', 'LangChain', 'Vector Databases', 'API Integration', 'MLOps'],
    achievements: [
      '🤖 Sophisticated AI agents with RAG implementation',
      '⚡ Real-time function calling and tool use',
      '🎯 Reduced model hallucination significantly',
      '🏗️ Scalable production infrastructure',
      '🔧 External data source integration'
    ]
  },
  {
    title: 'Predictive Models for Fintech & Insurance',
    description: `Machine learning models for insurance and fintech solutions during internship at ZA Tech. Designed and evaluated predictive models using supervised and unsupervised learning techniques. Preprocessed real-world datasets and fine-tuned model performance using cross-validation and hyperparameter optimization. Deployed models in scalable cloud environments.`,
    imgSrc: '/static/images/projects/fintech-ml.jpg',
    href: 'https://github.com/YoussefBastawisy',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Cloud', 'Cross-validation', 'Hyperparameter Tuning'],
    achievements: [
      '💼 Production ML models for fintech domain',
      '🔄 Cross-validation and optimization',
      '☁️ Cloud-based deployment',
      '📊 Real-world dataset preprocessing',
      '🤝 Collaborated with product teams'
    ]
  },
]

export default projectsData
