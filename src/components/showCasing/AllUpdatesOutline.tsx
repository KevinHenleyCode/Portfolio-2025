import Link from 'next/link'
import { MdArrowForwardIos } from 'react-icons/md'

interface AllUpdatesOutlineProps {
  key: string
  postHeader: string
  postDate: string
  slug: string
}

const AllUpdatesOutline = ({
  key,
  postHeader,
  postDate,
  slug,
}: AllUpdatesOutlineProps) => {
  return (
    <section key={key} className='col-span-8 lg:col-span-4'>
      <Link
        href={`updates/${slug}`}
        className='4xl:px-10 4xl:py-6 flex flex-col items-center justify-start border-1 border-rose-800 bg-rose-950/20 px-6 py-2 transition-all duration-300 ease-in-out hover:bg-rose-950 sm:w-fit sm:flex-row hover:[&>svg]:text-rose-400'
      >
        <p className='4xl:text-3xl 5xl:text-5xl 3xl:text-2xl mr-2 text-sm font-semibold tracking-widest text-rose-500 xl:text-lg 2xl:text-xl'>
          {postHeader}:
        </p>
        <p className='4xl:text-2xl 5xl:text-4xl xl:text-md mr-4 text-xs tracking-widest text-gray-300 2xl:text-lg'>
          {new Date(postDate).toLocaleDateString()}
        </p>
        <MdArrowForwardIos className='4xl:text-2xl 5xl:text-4xl xl:text-md hidden text-xs text-rose-600 transition-all duration-300 ease-in-out sm:block 2xl:text-lg' />
      </Link>
    </section>
  )
}

export default AllUpdatesOutline
