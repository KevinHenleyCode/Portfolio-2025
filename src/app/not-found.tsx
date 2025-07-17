'use client'
import Link from 'next/link'
import Image from 'next/image'
import NotFoundImg from '../../public/images/not-found.svg'

export default function NotFound() {
  return (
    <section className='mt-36 text-gray-300'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-3xl font-semibold tracking-wider sm:text-4xl md:text-6xl'>
          Page Not Found
        </h2>
        <p className='mt-6 text-center text-sm font-medium tracking-wider md:text-lg [&>span]:text-lime-400'>
          <span>(</span>
          Could not find requested page
          <span>)</span>
        </p>
        <Link
          href='/'
          className='mt-10 w-full text-center text-lg font-semibold tracking-widest text-rose-600 underline transition-all duration-300 ease-in-out hover:text-red-500'
        >
          Return Home
        </Link>
        <span className='relative mt-20 flex justify-center'>
          <Image
            src={NotFoundImg}
            alt={'Not Found SVG'}
            style={{ width: '30vw' }}
          />
        </span>
      </div>
    </section>
  )
}
