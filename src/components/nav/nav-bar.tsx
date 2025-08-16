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
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [themeBtn, setThemeBtn] = useState(true)
  const pathname = usePathname()

  const { setTheme } = useTheme()
  const themeToggle = (theme: boolean) => {
    setThemeBtn(!themeBtn)
    setTheme(theme === true ? 'dark' : 'light')
  }

  useEffect(() => {
    setNavOpen(false)
  }, [pathname])
  return (
    <div className='sticky top-0 z-10 w-full'>
      <div className='bg-background flex h-10 items-center justify-between px-4 sm:px-8 md:px-12 lg:hidden'>
        <Link href={'/'} className='font-display tracking-widest'>
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
            className='bg-background/90 min-w-[100vw] rounded-none px-2 tracking-widest backdrop-blur-xs sm:px-6 md:px-10'
          >
            <DropdownMenuItem>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/tech`}
                className='w-full'
              >
                Tech
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/portfolio`}
                className='w-full'
              >
                Portfolio
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/updates`}
                className='w-full'
              >
                Updates
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className='text-lg'>APPS:</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link
                href={'https://books.kevinhenleycode.com'}
                className='w-full'
              >
                Book-Library
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Button
                onClick={() => themeToggle(!themeBtn)}
                variant={'outline'}
                size={'sm'}
                className='w-fit hover:cursor-pointer'
              >
                {themeBtn ? (
                  <Moon className='text-chart-4' />
                ) : (
                  <Sun className='text-chart-4' />
                )}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <NavigationMenu
        viewport={false}
        className='border-accent-foreground bg-background hidden min-w-[100vw] border-b-1 lg:block'
      >
        <NavigationMenuList className='flex w-full tracking-widest'>
          <NavigationMenuItem className='w-1/2 text-start'>
            <NavigationMenuLink asChild className='lg:text-2xl'>
              <Link href={'/'} className='hover:bg-background w-fit'>
                Kevin Henley
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='lg:text-lg'>
              Apps
            </NavigationMenuTrigger>
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
              <Link href={'/tech'} className='lg:text-lg'>
                Tech
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={'/portfolio'} className='lg:text-lg'>
                Portfolio
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={'/updates'} className='lg:text-lg'>
                Updates
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              onClick={() => themeToggle(!themeBtn)}
              variant={'outline'}
              className='w-fit hover:cursor-pointer'
            >
              {themeBtn ? (
                <Moon className='text-chart-4' />
              ) : (
                <Sun className='text-chart-4' />
              )}
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavBar
