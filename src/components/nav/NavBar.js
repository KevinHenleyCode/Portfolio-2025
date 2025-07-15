'use client'
import Link from 'next/link'
import { useState } from 'react'

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
          <p className='text-2xl font-bold tracking-wider text-rose-600'>
            Kevin Henley
          </p>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className='text-rose-600 lg:hidden'
          >
            {navOpen ? <p>X</p> : <p>O</p>}
          </button>
        </span>
        <span
          className={`${navOpen ? 'absolute top-12' : 'absolute -top-130'} w-full transition-all duration-500 ease-in-out lg:hidden`}
        >
          <ul
            className={`flex flex-col items-center justify-between bg-rose-950 px-4 py-2`}
          >
            <li>
              <Link href={'/'}>About</Link>
            </li>
            <li>
              <Link href={'/'}>Tech</Link>
            </li>
            <li>
              <Link href={'/'}>Portfolio</Link>
            </li>
            <li>
              <Link href={'/'}>Contact</Link>
            </li>
          </ul>
        </span>
        <span className='bg-custom-dark hidden w-1/2 lg:block'>
          <ul
            className={`flex flex-row items-center justify-between px-4 py-2`}
          >
            <li>
              <Link href={'/'}>About</Link>
            </li>
            <li>
              <Link href={'/'}>Tech</Link>
            </li>
            <li>
              <Link href={'/'}>Portfolio</Link>
            </li>
            <li>
              <Link href={'/'}>Contact</Link>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  )
}

export default NavBar
