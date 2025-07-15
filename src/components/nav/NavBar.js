import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-around bg-purple-500 px-4 py-2 font-semibold text-gray-100'>
      <p className='text-2xl'>Kevin Henley</p>
      <ul className='flex w-1/2 items-center justify-between'>
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
    </nav>
  )
}

export default NavBar
