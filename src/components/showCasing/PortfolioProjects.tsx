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
    <section className='bg-custom-dark col-span-4 w-full rounded-2xl border-3 border-lime-400/40 shadow-lg shadow-lime-400/40 md:col-span-2'>
      <div className='h-fit w-full rounded-t-xl bg-gray-300/60 p-4 shadow-[inset_0_8px_10px_rgba(0,0,0,.8)]'>
        <div className='relative h-36 w-full sm:h-44 md:h-56'>
          <Image src={projectImage} alt={''} fill className='object-contain' />
        </div>
      </div>
      <hr className='border-1 border-lime-400/20 bg-lime-400/20' />
      <article className='my-2 p-1 px-3 text-xs tracking-widest sm:text-sm'>
        <h3 className='rounded-t-2xl text-xl font-semibold tracking-wider text-lime-600 lg:text-2xl'>
          {firstHeader}
        </h3>
        {summaryContent}
      </article>
      <hr className='my-2 border-1 border-lime-400/20 bg-lime-400/20' />
      <article className='my-2 p-1 px-3 text-xs tracking-widest sm:text-sm'>
        <h4 className='py-1 text-lg font-semibold text-lime-700 lg:text-xl'>
          {purposeHeader}:
        </h4>
        {purposeContent}
      </article>
      <hr className='my-2 border-1 border-lime-400/20 bg-lime-400/20' />
      <article className='my-2 p-1 px-3 text-xs tracking-widest sm:text-sm'>
        <h4 className='py-1 text-lg font-semibold text-lime-700 lg:text-xl'>
          {stackHeader}:
        </h4>
        {stackContent}
      </article>
      <hr className='my-2 border-1 border-lime-400/20 bg-lime-400/20' />
      <aside className='my-2 p-1 px-3 text-xs tracking-widest sm:text-sm'>
        <h5 className='py-1 text-lg font-semibold text-lime-700 lg:text-xl'>
          {nextHeader}:
        </h5>
        <ul className='list-outside list-disc p-2 text-xs'>
          {nextListItems?.map((listItem, index) => (
            <li
              key={index}
              className='mx-2 my-2 text-xs tracking-widest sm:text-sm'
            >
              <b className='text-lime-400'>{listItem}:</b>
            </li>
          ))}
        </ul>
      </aside>
      <hr className='my-2 border-1 border-lime-400/20 bg-lime-400/20' />
      <aside className='my-2 p-1 px-3 text-xs tracking-widest sm:text-sm'>
        <h5 className='py-1 text-lg font-semibold text-lime-700 lg:text-xl'>
          {linkHeader}:
        </h5>
        <span className='my-2 flex w-full justify-around text-xl'>
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
