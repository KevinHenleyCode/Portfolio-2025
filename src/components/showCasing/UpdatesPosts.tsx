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
        <div className='relative h-36 w-full xl:h-56'>
          <Image src={postImage} alt={''} fill className='object-contain' />
        </div>
      ) : null}
      <article className='mt-10 px-2'>
        <h4 className='border-y-2 border-rose-950 text-center text-2xl font-semibold tracking-widest text-rose-600 text-shadow-rose-800 text-shadow-sm xl:text-4xl'>
          {postHeader}
        </h4>
        <div className='mt-6 flex w-full items-end justify-start px-2'>
          {postLink ? (
            <Link
              href={`${postLink}`}
              target='_blank'
              className='mr-2 text-lg text-lime-600 transition-all duration-300 ease-in-out hover:text-lime-500 xl:text-xl'
            >
              <VscGithub />
            </Link>
          ) : null}
          <p className='text-xs tracking-widest text-rose-700 xl:text-sm'>
            {postDate}
          </p>
        </div>
        <div className='text-sm tracking-wider xl:text-lg'>
          {postContent.map((content, index) => (
            <p key={index} className='my-2'>
              {content}
            </p>
          ))}
        </div>
      </article>
      <hr className='mt-6 border-1 border-rose-950 bg-rose-950' />
      <aside className='px-2 tracking-wider'>
        <h5 className='mt-6 tracking-widest text-rose-700 xl:text-xl'>
          {listHeader}
        </h5>
        <ul className='mt-3'>
          {listContent.map((list, index) => (
            <li
              key={index}
              className='mt-1 flex flex-col text-sm xl:text-[16px]'
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
