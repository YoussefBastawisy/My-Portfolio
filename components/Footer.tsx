import Link from './Link'
import SocialIcon from './social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  const year = 2025

  return (
    <footer className="mt-24 border-t border-gray-200 pt-10 pb-12 dark:border-gray-800">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <div className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {siteMetadata.author}
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            AI Engineer · Building agentic AI systems with LLMs, RAG & multi-agent orchestration.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2 text-sm text-gray-500 sm:flex-row sm:justify-between dark:text-gray-400">
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100">
            Home
          </Link>
          <span aria-hidden>·</span>
          <Link href="/projects" className="hover:text-gray-900 dark:hover:text-gray-100">
            Projects
          </Link>
          <span aria-hidden>·</span>
          <Link href="/contact" className="hover:text-gray-900 dark:hover:text-gray-100">
            Contact
          </Link>
        </div>
        <div>
          © {year} {siteMetadata.author}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
