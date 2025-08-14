import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Github, Globe } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import NotFoundImage from '../../../../public/images/next-js-icon.svg'

export const metadata = {
  title: 'Portfolio',
}

/**
 * An area to give more detail into each of the projects I've worked on
 */
const Portfolio = () => {
  return (
    <div className='w-full px-4 py-10'>
      <header>
        <h1>Portfolio</h1>
        <p>
          What {`I've`} Done & What {`I'm`} Doing...
        </p>
      </header>

      <section className='mt-20 grid grid-cols-12 gap-4'>
        <Card className='4xl:col-span-3 col-span-12 lg:col-span-6 2xl:col-span-4'>
          <CardHeader className='w-full'>
            <div className='relative'>
              <Image
                src={NotFoundImage}
                alt='Not Found SVG'
                width={100}
                height={100}
                className='w-full object-contain'
              />
            </div>
            <CardTitle className='text-center'>
              <h2>Portfolio-2025</h2>
            </CardTitle>
            <Separator />
          </CardHeader>
          <CardContent>
            <h3 className='font-semibold'>Summary:</h3>
            <p>
              This site {`you're`} on right now is one of my core projects,
              built not just to showcase my work, but to grow alongside me.{' '}
              {`It’s`}
              designed as a living portfolio that evolves as I do, with the goal
              of giving potential employers or collaborators a clear picture of
              what {`I’m`} learning, building, and aiming toward.
            </p>
          </CardContent>
          <Separator />
          <CardContent>
            <h3 className='font-semibold'>Purpose:</h3>
            <p>
              To highlight my current abilities as a full-stack developer and
              serve as a central hub for all future projects, announcements, and
              experiments.
            </p>
          </CardContent>
          <Separator />
          <CardContent>
            <h3 className='font-semibold'>Tech Stack:</h3>
            <p>
              Next.js, Tailwind CSS, AWS EC2, and GitHub for version control.
              Future versions may include a content management panel or embedded
              database using Prisma + SQLite.
            </p>
          </CardContent>
          <Separator />
          <CardContent>
            <h3 className='font-semibold'>Next Goals:</h3>
            <ul className='list-inside list-disc px-4'>
              <li>Add a small dashboard for managing featured projects</li>
              <li>Integrate a lightweight blog/devlog to track progress</li>
              <li>Continue refining performance and accessibility</li>
            </ul>
          </CardContent>
          <Separator />
          <CardFooter className='flex flex-col items-start'>
            <h3 className='font-semibold'>Links:</h3>
            <span className='mt-4 flex w-full justify-evenly'>
              <Button asChild size={'lg'}>
                <Link
                  href={'https://github.com/KevinHenleyCode/Portfolio-2025'}
                  target={'_blank'}
                >
                  <Github />
                </Link>
              </Button>
              <Button asChild size={'lg'}>
                <Link href={'https://kevinhenleyinfo.com'} target={'_blank'}>
                  <Globe />
                </Link>
              </Button>
            </span>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

export default Portfolio
