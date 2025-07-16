import Link from 'next/link'

const NavLinks = ({ links, mobile }: { links: string[]; mobile: boolean }) => {
  return (
    <ul
      className={`flex items-center justify-between px-4 py-2 ${mobile ? 'flex-col bg-rose-950' : 'flex-row'}`}
    >
      {links.map((link) => (
        <li key={link}>
          <Link href={`${link.toLowerCase()}`}>{link}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
