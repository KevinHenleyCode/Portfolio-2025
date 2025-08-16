import BasicPadding from '@/components/containers/basic-padding'
import PageHeaders from '@/components/text/page-headers'
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
import NotFoundImage from '../../../public/images/next-js-icon.svg'

export const metadata = {
  title: 'Portfolio',
}

/**
 * An area to give more detail into each of the projects I've worked on
 */
const Portfolio = () => {
  return (
    <BasicPadding>
      <PageHeaders
        mainHeading={'Portfolio'}
        mainSubHeading={`What I've Done & What I'm Doing...`}
      />

      <section className='mt-20 grid grid-cols-12 gap-4'>
        <Card className='4xl:col-span-4 col-span-12 lg:col-span-6'>
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
            <CardTitle className='mt-2 text-center [&>h2]:text-xl sm:[&>h2]:text-2xl'>
              <h2>Portfolio-2025</h2>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl'>
            <h3>Summary:</h3>
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
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl'>
            <h3>Purpose:</h3>
            <p>
              To highlight my current abilities as a full-stack developer and
              serve as a central hub for all future projects, announcements, and
              experiments.
            </p>
          </CardContent>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl'>
            <h3>Tech Stack:</h3>
            <p>
              Next.js, Tailwind CSS, AWS EC2, and GitHub for version control.
              Future versions may include a content management panel or embedded
              database using Prisma + SQLite.
            </p>
          </CardContent>
          <Separator />
          <CardContent
            className={`[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl [&>ul]:list-inside [&>ul]:list-none [&>ul>li]:relative [&>ul>li]:pl-3 [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:content-['•']`}
          >
            <h3>Next Goals:</h3>
            <ul>
              <li>Add a small dashboard for managing featured projects</li>
              <li>Integrate a lightweight blog/devlog to track progress</li>
              <li>Continue refining performance and accessibility</li>
            </ul>
          </CardContent>
          <Separator />
          <CardFooter className='flex flex-col items-start'>
            <h3 className='text-lg font-semibold md:mb-2 md:text-xl'>Links:</h3>
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
    </BasicPadding>
  )
}

export default Portfolio
