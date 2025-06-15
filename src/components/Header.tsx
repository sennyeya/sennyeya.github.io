'use client'

import Link from 'next/link'
import Container from './Container'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  return (
    <Container>
      <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center justify-between'>
        <div>
          <Link
            href='/blog/posts'
            className={`text-gray-900 dark:text-gray-100 hover:underline mr-4 ${pathname === '/blog/posts' ? 'underline' : ''}`}
          >
            Blog.
          </Link>
          <Link
            href='/projects'
            className={`text-gray-900 dark:text-gray-100 hover:underline mr-4 ${pathname === '/projects' ? 'underline' : ''}`}
          >
            Projects.
          </Link>
        </div>
        <Link
          href='/about'
          className={`text-gray-900 dark:text-gray-100 hover:underline mr-4 ${pathname === '/about' ? 'underline' : ''}`}
        >
          About.
        </Link>
      </h2>
    </Container>
  )
}

export default Header
