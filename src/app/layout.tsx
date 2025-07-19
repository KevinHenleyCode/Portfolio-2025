import './globals.css'
import { Orbitron } from 'next/font/google'
import type { Metadata } from 'next'
import NavBar from '@/components/nav/NavBar'
import FooterBar from '@/components/nav/FooterBar'
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
  icons: [
    { rel: 'icon', url: '/favicon.svg' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
  ],
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en' className={orbitron.variable}>
      <body className={`flex min-h-screen flex-col antialiased`}>
        <NavBar />
        <main className='bg-custom-dark flex flex-1 flex-col items-center py-20 text-gray-300'>
          {children}
        </main>
        <FooterBar />
      </body>
    </html>
  )
}

export default RootLayout
