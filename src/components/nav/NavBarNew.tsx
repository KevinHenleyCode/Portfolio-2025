'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'

const NavBar = () => {
  // const [navOpen, setNavOpen] = useState(false)
  // const pathname = usePathname()

  // useEffect(() => {
  //   setNavOpen(false)
  // }, [pathname])
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className='grid w-full grid-cols-5'>
        <NavigationMenuItem className='col-span-5 text-center'>
          <NavigationMenuLink asChild>
            <Link href={'/'}>Kevin Henley</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className='col-span-2'>
          <NavigationMenuTrigger>Apps</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[200px] gap-4'>
              <li>
                <NavigationMenuLink asChild>
                  <Link href={'https://books.kevinhenleycode.com'}>
                    Book Library
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className='col-span-1'>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={'/tech'}>Tech</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className='col-span-1'>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={'/portfolio'}>Portfolio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className='col-span-1'>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={'/updates'}>Updates</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavBar
