'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '../ui/button'
import { AlignJustify, X } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setNavOpen(false)
  }, [pathname])
  return (
    <div className='bg-background sticky top-0 z-10 w-full'>
      <div className='flex h-10 items-center justify-between px-4 lg:hidden'>
        <Link href={'/'} className='tracking-widest'>
          KEVIN HENLEY
        </Link>
        <DropdownMenu open={navOpen} onOpenChange={setNavOpen}>
          <DropdownMenuTrigger asChild className='relative'>
            <Button
              onClick={() => setNavOpen(!navOpen)}
              className='bg-background hover:bg-background hover:cursor-pointer'
              variant={'default'}
              size={'lg'}
              aria-expanded={navOpen}
              aria-label='Toggle menu'
            >
              <span className=''>
                <AlignJustify
                  className={`text-primary absolute top-3 right-0 transition-all duration-300 ease-in-out ${navOpen ? 'text-primary/0 rotate-180' : ''}`}
                />
                <X
                  className={`text-primary absolute top-3 right-0 transition-all duration-300 ease-in-out ${!navOpen ? 'text-primary/0 -rotate-180' : ''}`}
                />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={0}
            className='bg-background/90 min-w-[100vw] rounded-none tracking-widest backdrop-blur-xs'
          >
            <DropdownMenuItem>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/tech`}>
                Tech
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/portfolio`}>
                Portfolio
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/updates`}>
                Updates
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>APPS:</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href={'https://books.kevinhenleycode.com'}>
                Book-Library
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <NavigationMenu
        viewport={false}
        className='hidden min-w-[100vw] px-[2em] lg:block'
      >
        <NavigationMenuList className='flex w-full tracking-widest'>
          <NavigationMenuItem className='w-1/2 text-start'>
            <NavigationMenuLink
              asChild
              className='text-[clamp(1rem,2vw+0.5rem,2rem)]'
            >
              <Link href={'/'}>Kevin Henley</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Apps</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[200px] gap-4'>
                <li>
                  <NavigationMenuLink asChild className='text-center'>
                    <Link href={'https://books.kevinhenleycode.com'}>
                      Book Library
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={'/tech'}>Tech</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={'/portfolio'}>Portfolio</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={'/updates'}>Updates</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavBar
