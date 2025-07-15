import Link from 'next/link'
import { VscGithub } from 'react-icons/vsc'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center p-20'>
      <h1 className='text-4xl font-semibold tracking-widest text-gray-300 uppercase sm:text-6xl'>
        Welcome
      </h1>
      <Link
        href={'https://github.com/KevinHenleyCode'}
        target='_blank'
        className='mt-10 text-4xl text-rose-600 transition-all duration-200 ease-in-out hover:text-rose-500'
      >
        <VscGithub />
      </Link>
    </div>
  )
}
