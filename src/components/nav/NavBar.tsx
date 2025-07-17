'use client'
import { useState } from 'react'
import NavButton from './NavButton'
import NavLinks from './NavLinks'
import Link from 'next/link'

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className='sticky top-0 z-50'>
      <div
        className={`flex w-full flex-col font-semibold text-gray-100 shadow-rose-600 lg:flex-row ${!navOpen ? 'shadow-2xl' : 'shadow-sm'} transition-all duration-500 ease-in-out`}
      >
        <span
          className={`bg-custom-dark z-60 flex w-full justify-between px-4 py-2 text-left lg:w-1/2`}
        >
          <Link
            href={'/'}
            className='text-2xl font-bold tracking-wider text-rose-600'
          >
            Kevin Henley
          </Link>
          <NavButton navOpen={navOpen} setNavOpen={setNavOpen} />
        </span>
        <span
          className={`${navOpen ? 'absolute top-12' : 'absolute -top-130'} w-full transition-all duration-500 ease-in-out lg:hidden`}
        >
          <NavLinks links={['Tech', 'Portfolio', 'Updates']} mobile={true} />
        </span>
        <span className='bg-custom-dark hidden w-1/2 lg:block'>
          <NavLinks links={['Tech', 'Portfolio', 'Updates']} mobile={false} />
        </span>
      </div>
    </nav>
  )
}

export default NavBar
