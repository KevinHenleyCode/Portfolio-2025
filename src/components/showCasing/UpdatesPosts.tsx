import Image from 'next/image'
import Link from 'next/link'
import { VscGithub } from 'react-icons/vsc'

interface UpdatesPostsProps {
  postImage?: string
  postHeader: string
  postDate: string
  postContent: string[]
  listHeader: string
  listContent: Array<{
    bold: string
    text: string
  }>
  postLink?: string
}

const UpdatesPosts = ({
  postImage,
  postHeader,
  postDate,
  postContent,
  listHeader,
  listContent,
  postLink,
}: UpdatesPostsProps) => {
  return (
    <section className='col-span-4 w-full md:col-span-2'>
      {postImage ? (
        <div className='4xl:h-72 5xl:h-96 relative h-36 w-full xl:h-56'>
          <Image src={postImage} alt={''} fill className='object-contain' />
        </div>
      ) : null}
      <article className='mt-10 px-2'>
        <h4 className='4xl:text-6xl 5xl:text-8xl border-y-2 border-rose-950 text-center text-2xl font-semibold tracking-widest text-rose-600 text-shadow-rose-800 text-shadow-sm sm:text-3xl xl:text-4xl 2xl:text-5xl'>
          {postHeader}
        </h4>
        <div className='mt-6 flex w-full items-end justify-start px-2'>
          {postLink ? (
            <Link
              href={`${postLink}`}
              target='_blank'
              className='4xl:text-4xl 5xl:text-6xl 5xl:mr-4 mr-2 text-lg text-lime-600 transition-all duration-300 ease-in-out hover:text-lime-500 xl:text-xl 2xl:text-3xl'
            >
              <VscGithub />
            </Link>
          ) : null}
          <p className='4xl:text-3xl 5xl:text-5xl text-sm tracking-widest text-rose-500 xl:text-lg 2xl:text-2xl'>
            {postDate}
          </p>
        </div>
        <div className='4xl:text-2xl 4xl:leading-10 5xl:text-4xl 5xl:leading-12 4xl:mt-4 text-sm tracking-wider sm:text-lg 2xl:text-xl 2xl:leading-8'>
          {postContent.map((content, index) => (
            <p key={index} className='my-2'>
              {content}
            </p>
          ))}
        </div>
      </article>
      <hr className='mt-6 border-1 border-rose-950 bg-rose-950' />
      <aside className='px-2 tracking-widest'>
        <h5 className='4xl:text-3xl 5xl:text-5xl mt-6 text-rose-500 xl:text-xl 2xl:text-2xl'>
          {listHeader}
        </h5>
        <ul className='mt-3'>
          {listContent.map((list, index) => (
            <li
              key={index}
              className='4xl:text-2xl 5xl:text-4xl 4xl:mt-3 5xl:mt-4 mt-1 flex flex-col text-sm sm:text-lg 2xl:mt-2 2xl:text-xl'
            >
              <b>{list.bold}:</b>
              <p className='ml-4'>{list.text}</p>
            </li>
          ))}
        </ul>
      </aside>
      <hr className='mt-6 border-1 border-rose-950 bg-rose-950' />
    </section>
  )
}

export default UpdatesPosts
