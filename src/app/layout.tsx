import './globals.css'
import { Orbitron } from 'next/font/google'
import type { Metadata } from 'next'
import NavBar from '@/components/nav/NavBar'
import type { ReactNode } from 'react'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kevin Henley Code',
  description: 'My Code Portfolio',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en' className={orbitron.variable}>
      <body className={`flex min-h-screen flex-col antialiased`}>
        <NavBar />
        <main className='bg-custom-dark flex-1 px-20 py-10'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
