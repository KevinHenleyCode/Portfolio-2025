import Link from 'next/link'
import { VscGithub } from 'react-icons/vsc'

const FooterBar = () => {
  return (
    <footer className='bg-custom-dark relative w-full px-4 py-2'>
      <Link
        href={'https://github.com/KevinHenleyCode'}
        target='_blank'
        className='mt-10 text-2xl text-lime-600 transition-all duration-200 ease-in-out hover:text-lime-500'
      >
        <VscGithub />
      </Link>
    </footer>
  )
}

export default FooterBar
