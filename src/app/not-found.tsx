'use client'
import Link from 'next/link'
import Image from 'next/image'
import NotFoundImg from '../../public/images/not-found.svg'

/**
 * Defaults to if page doesn't exist
 */
export default function NotFound() {
  return (
    <section className='mt-36 text-gray-300'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-3xl font-semibold tracking-wider sm:text-5xl md:text-6xl xl:text-7xl'>
          Page Not Found
        </h2>
        <p className='mt-6 text-center text-sm font-medium tracking-wider sm:text-lg xl:text-2xl [&>span]:text-lime-400'>
          Could not find requested page
        </p>
        <Link
          href='/'
          className='mt-10 w-full text-center text-lg font-semibold tracking-widest text-rose-600 underline transition-all duration-300 ease-in-out hover:text-red-500 sm:text-2xl'
        >
          Return Home
        </Link>
        <span className='4xl:h-72 5xl:h-96 relative mt-20 h-36 w-full sm:h-56 xl:h-56'>
          <Image
            src={NotFoundImg}
            alt={'Not Found SVG'}
            fill
            className='object-contain'
          />
        </span>
      </div>
    </section>
  )
}
