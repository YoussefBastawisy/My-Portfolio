'use client'

import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  period?: string
  imgSrc?: string
  href?: string
  tags?: string[]
  achievements?: string[]
}

const Card = ({ title, description, period, imgSrc, href, tags, achievements }: CardProps) => (
  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
    {imgSrc && (
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          alt={title}
          src={imgSrc}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          width={544}
          height={306}
        />
      </div>
    )}

    <div className="flex flex-1 flex-col p-6">
      {period && (
        <div className="mb-2 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
          {period}
        </div>
      )}

      <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        {href ? (
          <Link
            href={href}
            aria-label={`Link to ${title}`}
            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>

      {achievements && achievements.length > 0 && (
        <ul className="mt-5 space-y-2">
          {achievements.slice(0, 4).map((achievement) => (
            <li
              key={achievement}
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
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}

      {tags && tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-900 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {href && (
        <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-800">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            aria-label={`Link to ${title}`}
          >
            View on GitHub
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      )}
    </div>
  </div>
)

export default Card
