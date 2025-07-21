'use client'

interface SubHeaderProps {
  content: string
}

const SubHeader = ({ content }: SubHeaderProps) => {
  return (
    <div className='relative'>
      <span
        aria-hidden='true'
        className='3xl:pl-72 4xl:pl-80 5xl:pl-96 absolute top-2 z-20 w-full pl-6 sm:pl-24 md:pl-36 xl:pl-48 2xl:pl-60'
      >
        <span
          aria-hidden='true'
          className='to-custom-dark 5xl:h-12 3xl:h-10 block h-8 w-full bg-linear-to-r from-lime-100/10 sm:h-9'
        ></span>
      </span>
      <span className='3xl:pl-72 5xl:h-12 3xl:h-10 4xl:pl-80 5xl:pl-96 absolute z-10 mt-2 flex h-8 items-center pl-6 sm:h-9 sm:pl-24 md:pl-36 xl:pl-48 2xl:pl-60'>
        <h2 className='3xl:text-2xl 5xl:text-3xl pl-2 text-sm font-semibold text-lime-400 italic sm:text-lg lg:text-xl'>
          {content}
        </h2>
      </span>
      <span
        aria-hidden='true'
        className='3xl:pl-72 4xl:pl-80 5xl:pl-96 absolute top-2 w-full pl-6 sm:pl-24 md:pl-36 xl:pl-48 2xl:pl-60'
      >
        <span
          aria-hidden='true'
          className='3xl:h-10 5xl:h-12 block h-8 w-full border-y-4 border-double border-lime-200 bg-lime-800/20 sm:h-9'
        ></span>
      </span>
    </div>
  )
}

export default SubHeader
