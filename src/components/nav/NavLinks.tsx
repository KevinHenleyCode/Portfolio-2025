import Link from 'next/link'

interface NavLinksProps {
  links: string[]
  mobile: boolean
}

const NavLinks = ({ links, mobile }: NavLinksProps) => {
  return (
    <ul
      className={`flex items-center justify-end py-2 ${mobile ? 'flex-col bg-linear-to-b from-rose-600/60 to-rose-950' : 'h-full flex-row [&>li]:mx-4'}`}
    >
      {links.map((link) => (
        <li key={link}>
          <Link
            href={`${link.toLowerCase()}`}
            className='border-b-2 border-lime-200/0 tracking-widest italic transition-all duration-300 ease-in-out hover:border-lime-200 hover:text-lime-200'
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
