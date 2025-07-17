'use client'

interface SubHeaderProps {
  content: string
}

const SubHeader = ({ content }: SubHeaderProps) => {
  return (
    <div className='relative'>
      <span
        aria-hidden='true'
        className='absolute top-2 z-20 w-full pl-6 sm:pl-24 xl:pl-48'
      >
        <span
          aria-hidden='true'
          className='to-custom-dark block h-8 w-full bg-linear-to-r from-lime-100/10 sm:h-9'
        ></span>
      </span>
      <span className='absolute z-10 mt-2 flex h-8 items-center px-6 sm:h-9 sm:px-24 xl:px-48'>
        <h2 className='pl-2 text-sm font-semibold text-lime-400 italic sm:text-lg lg:text-xl'>
          {content}
        </h2>
      </span>
      <span
        aria-hidden='true'
        className='absolute top-2 w-full pl-6 sm:pl-24 xl:pl-48'
      >
        <span
          aria-hidden='true'
          className='block h-8 w-full border-y-4 border-double border-lime-200 bg-lime-800/20 sm:h-9'
        ></span>
      </span>
    </div>
  )
}

export default SubHeader
