import Link from 'next/link'
import { VscGithub } from 'react-icons/vsc'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center p-20'>
      <h2 className='text-6xl'>Kevin Henley</h2>
      <p className='mt-10 text-xl font-semibold text-lime-400'>
        Setting Up New Portfolio
      </p>
      <p className='mt-10 text-xl font-medium text-lime-400'>7/14/2025</p>
      <Link
        href={'https://github.com/KevinHenleyCode'}
        target='_blank'
        className='mt-10 text-4xl text-lime-400 transition-all duration-200 ease-in-out hover:text-lime-600'
      >
        <VscGithub />
      </Link>
    </div>
  )
}
