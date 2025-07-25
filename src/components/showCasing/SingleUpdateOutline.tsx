import Image from 'next/image'
import { VscGithub } from 'react-icons/vsc'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { MdArrowBackIos } from 'react-icons/md'

interface SingleUpdateOutlineProps {
  postImage?: string
  postLink?: string
  mainBody: string
  additionalHeader: string
  additionalBody: string
}

const SingleUpdateOutline = ({
  postImage,
  postLink,
  mainBody,
  additionalHeader,
  additionalBody,
}: SingleUpdateOutlineProps) => {
  return (
    <section className='col-span-4 w-full md:col-span-2'>
      <Link
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}updates`}
        className='flex w-fit items-center border-b-1 border-rose-700 text-lg text-rose-700 transition-all duration-300 ease-in-out hover:border-rose-600 hover:text-rose-600'
      >
        <MdArrowBackIos />
        <p>BACK</p>
      </Link>
      {postImage ? (
        <div className='4xl:h-72 5xl:h-96 relative h-36 w-full xl:h-56'>
          <Image src={postImage} alt={''} fill className='object-contain' />
        </div>
      ) : null}
      <hr className='mt-6 border-1 border-rose-950 bg-rose-950' />
      <article className='px-2'>
        <div className='mt-2 flex w-full items-end justify-start px-2'>
          {postLink ? (
            <Link
              href={`${postLink}`}
              target='_blank'
              className='4xl:text-4xl 5xl:text-6xl 5xl:mr-4 mr-2 text-lg text-lime-600 transition-all duration-300 ease-in-out hover:text-lime-500 xl:text-xl 2xl:text-3xl'
            >
              <VscGithub />
            </Link>
          ) : null}
        </div>
        <div className='4xl:text-2xl 4xl:leading-10 5xl:text-4xl 5xl:leading-12 4xl:mt-4 text-sm tracking-wider sm:text-lg 2xl:text-xl 2xl:leading-8 [&>p]:my-2'>
          {Array.isArray(mainBody) && <PortableText value={mainBody} />}
        </div>
      </article>
      <hr className='mt-6 border-1 border-rose-950 bg-rose-950' />
      <aside className='px-2 tracking-widest'>
        <h5 className='4xl:text-3xl 5xl:text-5xl mt-6 text-rose-500 xl:text-xl 2xl:text-2xl'>
          {additionalHeader}
        </h5>
        <div className='4xl:text-2xl 5xl:text-4xl 4xl:mt-3 5xl:mt-4 mt-1 flex flex-col text-sm sm:text-lg 2xl:mt-2 2xl:text-xl [&>p]:ml-4 [&>p>strong]:-ml-4'>
          {Array.isArray(additionalBody) && (
            <PortableText value={additionalBody} />
          )}
        </div>
      </aside>
      <hr className='mt-6 border-1 border-rose-950 bg-rose-950' />
    </section>
  )
}

export default SingleUpdateOutline
