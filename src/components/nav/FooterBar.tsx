import Link from 'next/link'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedin } from 'react-icons/fa'

const FooterBar = () => {
  return (
    <footer className='bg-custom-dark relative'>
      <div className='to-custom-dark bg-linear-to-b from-rose-950/40 px-4 py-4'>
        <span className='mx-auto flex w-1/2 justify-around'>
          <Link
            href={'https://github.com/KevinHenleyCode'}
            target='_blank'
            className='text-2xl text-lime-600 transition-all duration-200 ease-in-out hover:text-lime-500 lg:text-3xl'
          >
            <VscGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/kevin-henley/'}
            target='_blank'
            className='text-2xl text-lime-600 transition-all duration-200 ease-in-out hover:text-lime-500 lg:text-3xl'
          >
            <FaLinkedin />
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default FooterBar
