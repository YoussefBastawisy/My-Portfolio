'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  const pathname = usePathname()

  let headerClass =
    'flex items-center w-full justify-between py-5 border-b border-gray-200/70 dark:border-gray-800/70'
  if (siteMetadata.stickyNav) {
    headerClass +=
      ' sticky top-0 z-50 bg-white/70 backdrop-blur-md dark:bg-gray-950/70 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60'
  }

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center gap-2">
          <span className="bg-primary-600 flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
            YB
          </span>
          <span className="hidden text-lg font-semibold tracking-tight text-gray-900 sm:block dark:text-gray-100">
            {siteMetadata.headerTitle}
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-x-1 sm:gap-x-2">
        <nav className="hidden items-center gap-x-1 sm:flex">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                }`}
              >
                {link.title}
              </Link>
            ))}
        </nav>

        <a
          href="/static/Youssef-Bastawisy-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900 sm:inline-block dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-100 dark:hover:text-gray-100"
        >
          Resume
        </a>

        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
