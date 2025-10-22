'use client'

import Image from './Image'
import Link from './Link'
import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  tags?: string[]
  achievements?: string[]
}

const Card = ({ title, description, imgSrc, href, tags, achievements }: CardProps) => (
  <motion.div className="group h-full" whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
    <div className="hover:border-primary-500 dark:hover:border-primary-500 relative h-full overflow-hidden rounded-2xl border-2 border-gray-200/60 bg-white transition-all duration-300 hover:shadow-2xl dark:border-gray-700/60 dark:bg-gray-800">
      {/* Gradient Overlay on Hover */}
      <div className="from-primary-500/0 group-hover:from-primary-500/10 pointer-events-none absolute inset-0 z-10 bg-gradient-to-br via-pink-500/0 to-purple-600/0 transition-all duration-500 group-hover:via-pink-500/10 group-hover:to-purple-600/10"></div>

      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="relative overflow-hidden">
              <Image
                alt={title}
                src={imgSrc}
                className="transform object-cover object-center transition-transform duration-500 group-hover:scale-110 md:h-36 lg:h-48"
                width={544}
                height={306}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </Link>
        ) : (
          <div className="relative overflow-hidden">
            <Image
              alt={title}
              src={imgSrc}
              className="transform object-cover object-center transition-transform duration-500 group-hover:scale-110 md:h-36 lg:h-48"
              width={544}
              height={306}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        ))}
      <div className="relative z-20 space-y-4 p-6">
        <h2 className="group-hover:text-primary-500 text-2xl leading-8 font-bold tracking-tight transition-colors duration-300">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="from-primary-500 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-transparent"
            >
              {title}
            </Link>
          ) : (
            <span className="from-primary-500 bg-gradient-to-r via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          )}
        </h2>
        <p className="prose line-clamp-3 max-w-none leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="from-primary-500 cursor-default rounded-full bg-gradient-to-r to-pink-500 px-3 py-1 text-xs font-medium text-white shadow-sm transition-shadow hover:shadow-md"
              >
                {tag}
              </motion.span>
            ))}
            {tags.length > 4 && (
              <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                +{tags.length - 4} more
              </span>
            )}
          </div>
        )}

        {achievements && achievements.length > 0 && (
          <div className="space-y-2 border-t border-gray-200 pt-2 dark:border-gray-700">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <span className="text-yellow-500">⭐</span>
              Highlights
            </h3>
            <ul className="space-y-1.5">
              {achievements.slice(0, 2).map((achievement, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span className="flex-1">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {href && (
          <motion.div whileHover={{ x: 5 }} className="pt-2">
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 group inline-flex items-center gap-2 text-base leading-6 font-bold transition-colors"
              aria-label={`Link to ${title}`}
            >
              <span>View on GitHub</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Bottom Glow Effect */}
      <div className="from-primary-500 absolute right-0 bottom-0 left-0 h-1 origin-left scale-x-0 transform bg-gradient-to-r via-pink-500 to-purple-600 transition-transform duration-500 group-hover:scale-x-100"></div>
    </div>
  </motion.div>
)

export default Card
