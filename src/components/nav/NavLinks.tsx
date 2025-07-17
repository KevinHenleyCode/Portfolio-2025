import Link from 'next/link'

const NavLinks = ({ links, mobile }: { links: string[]; mobile: boolean }) => {
  return (
    <ul
      className={`flex items-center justify-end py-2 ${mobile ? 'flex-col bg-rose-950' : 'h-full flex-row [&>li]:mx-4'}`}
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
