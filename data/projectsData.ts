interface Project {
  title: string
  description: string
  period?: string
  href?: string
  imgSrc?: string
  tags?: string[]
  achievements?: string[]
}

const projectsData: Project[] = [
  {
    title: 'Laam — Arabic RAG Assistant',
    period: 'May 2026 · Restart Technology',
    description:
      "An end-to-end Arabic RAG assistant grounded in the platform's knowledge base. Engineered the full retrieval pipeline — semantic chunking, embeddings, cross-encoder reranking, and deduplication — and self-hosted the entire serving stack in production.",
    tags: ['RAG', 'vLLM', 'Qdrant', 'TEI Embeddings', 'FastAPI', 'Tesseract OCR', 'GCP'],
    achievements: [
      'Reached hit@8 of 0.96 on the evaluation set',
      'Self-hosted vLLM + TEI + Qdrant on an NVIDIA Tesla T4 (GCP), streaming Arabic over SSE',
      'OCR ingestion: 47 Ministry-of-Education PDFs → 2,800 indexed chunks',
      'JWT-secured function calling, daily vector-store backups, HubSpot human-handoff',
    ],
  },
  {
    title: 'Super Agent',
    period: 'Mar 2026 · Cycls',
    description:
      'A general-purpose agentic loop with isolated code execution, file creation/editing, and web search — spanning research, business, and reasoning tasks. RAG and deep-search components let the agent plan, retrieve, and act autonomously across multi-step objectives.',
    tags: ['Cycls SDK', 'Agentic Orchestration', 'Code Execution', 'Web Search', 'RAG'],
    achievements: [
      'Autonomous multi-step planning and execution',
      'Isolated code execution with file creation and editing',
      'RAG + deep search integrated into the orchestrator',
    ],
  },
  {
    title: 'Bid Evaluation Expert',
    period: 'Jan 2026 · Cycls',
    description:
      'A structured-output, function-calling agent that evaluates technical and financial bids using a weighted scoring formula validated to sum to 100%, producing a documented evaluation per approved standards.',
    tags: ['Cycls SDK', 'Claude Sonnet', 'Function Calling', 'Structured Output', 'openpyxl'],
    achievements: [
      'Weighted scoring formula validated to sum to 100%',
      'Typed tool emitting ready-to-fill, multi-sheet Excel workbooks',
      'Covers the five official local-content mechanisms',
    ],
  },
  {
    title: 'TasiBot — Saudi Market Analyst',
    period: 'Dec 2025 · Cycls',
    description:
      'An agentic stock analyst covering 400+ TASI-listed stocks with live quotes, technical signals, scoring, gainers/losers, dividends, social sentiment, watchlists, and breaking disclosures.',
    tags: ['Cycls SDK', 'Claude Skills', 'Live Data', 'QuickChart'],
    achievements: [
      'Coverage of 400+ TASI-listed stocks with live data',
      'Interactive bar / line / pie / doughnut charts via QuickChart',
      'Skills-based market-data layer with a clarifying-question tool',
    ],
  },
  {
    title: 'Haseef — Saudi Legal Assistant',
    period: 'Oct 2025 · Cycls',
    description:
      'A specialized legal assistant that retrieves over a structured Postgres legal database (laws + court cases) through a guarded, read-only SQL tool — with always-ranked full-text search and Hijri/Gregorian date handling.',
    tags: ['Cycls SDK', 'Text-to-SQL RAG', 'Postgres FTS', 'Tool Use'],
    achievements: [
      'Guarded read-only SQL (SELECT/WITH only, row caps, statement timeouts)',
      'Always-ranked full-text search with payload capping and file-spill',
      'Hijri/Gregorian date handling and per-workspace template sync',
    ],
  },
  {
    title: 'Local Content Expert',
    period: 'Aug 2025 · Cycls',
    description:
      'An Arabic-first agent answering local-content regulatory questions via index-first RAG over a curated source index — consulting the index before exploratory search to keep retrieval grounded and accurate.',
    tags: ['Cycls SDK', 'Source-Index RAG', 'Structured UI Tools', 'Sandbox Tools'],
    achievements: [
      'Index-first RAG over a curated source index',
      'Per-turn conversation-history sanitization for stable retrieval',
      'Rich table / step / callout rendering via JSON-Schema UI tools',
    ],
  },
]

export default projectsData
