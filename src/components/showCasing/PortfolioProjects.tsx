import Image from 'next/image'
import Link from 'next/link'
import { VscGithub, VscGlobe } from 'react-icons/vsc'

interface PortfolioProjectsProps {
  projectImage: string
  firstHeader: string
  summaryContent: string
  purposeHeader: string
  purposeContent: string
  stackHeader: string
  stackContent: string
  nextHeader?: string
  nextListItems?: string[]
  linkHeader?: string
  gitHubLink?: string
  siteLink?: string
}

const PortfolioProjects = ({
  projectImage,
  firstHeader,
  summaryContent,
  purposeHeader,
  purposeContent,
  stackHeader,
  stackContent,
  nextHeader,
  nextListItems,
  linkHeader,
  gitHubLink,
  siteLink,
}: PortfolioProjectsProps) => {
  return (
    <section className='bg-custom-dark 5xl:col-span-2 col-span-6 w-full rounded-2xl border-3 border-lime-400/40 shadow-lg shadow-lime-400/40 xl:col-span-3'>
      <div className='h-fit w-full rounded-t-xl bg-gray-300/60 p-4 shadow-[inset_0_8px_10px_rgba(0,0,0,.8)]'>
        <div className='relative h-36 w-full sm:h-44 md:h-56'>
          <Image src={projectImage} alt={''} fill className='object-contain' />
        </div>
      </div>
      <hr className='border-1 border-lime-400/20 bg-lime-400/20' />
      <article className='my-2 p-1 px-3 text-sm tracking-widest sm:text-lg'>
        <h3 className='rounded-t-2xl text-xl font-semibold tracking-wider text-lime-600 lg:text-2xl'>
          {firstHeader}
        </h3>
        <p>{summaryContent}</p>
      </article>
      <hr className='my-2 border-1 border-lime-400/20 bg-lime-400/20' />
      <article className='my-2 p-1 px-3 tracking-widest'>
        <h4 className='py-1 text-xl font-semibold text-lime-700 sm:text-2xl'>
          {purposeHeader}:
        </h4>
        <p className='text-sm sm:text-xl'>{purposeContent}</p>
      </article>
      <hr className='my-2 border-1 border-lime-400/20 bg-lime-400/20' />
      <article className='my-2 p-1 px-3 tracking-widest'>
        <h4 className='py-1 text-xl font-semibold text-lime-700 lg:text-2xl'>
          {stackHeader}:
        </h4>
        <p className='text-sm sm:text-xl'>{stackContent}</p>
      </article>
      <hr className='my-2 border-1 border-lime-400/20 bg-lime-400/20' />
      <aside className='my-2 p-1 px-3 tracking-widest'>
        <h5 className='py-1 text-xl font-semibold text-lime-700 sm:text-2xl'>
          {nextHeader}:
        </h5>
        <ul className='list-outside list-disc p-2 text-xs'>
          {nextListItems?.map((listItem, index) => (
            <li
              key={index}
              className='mx-2 my-2 text-sm tracking-widest sm:text-xl'
            >
              <b className='text-lime-400'>{listItem}:</b>
            </li>
          ))}
        </ul>
      </aside>
      <hr className='my-2 border-1 border-lime-400/20 bg-lime-400/20' />
      <aside className='my-2 p-1 px-3 tracking-widest'>
        <h5 className='py-1 text-xl font-semibold text-lime-700 sm:text-2xl'>
          {linkHeader}:
        </h5>
        <span className='my-2 flex w-full justify-around text-xl sm:text-2xl lg:text-3xl'>
          <Link
            href={`${gitHubLink}`}
            className='transition-all duration-300 ease-in-out hover:text-lime-300'
            target='_blank'
          >
            <VscGithub />
          </Link>
          {siteLink ? (
            <Link
              href={`${siteLink}`}
              className='transition-all duration-300 ease-in-out hover:text-lime-300'
            >
              <VscGlobe />
            </Link>
          ) : null}
        </span>
      </aside>
    </section>
  )
}

export default PortfolioProjects
