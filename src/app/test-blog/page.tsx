import Link from 'next/link'
import { type SanityDocument } from 'next-sanity'
import { client } from '@/sanity/client'
import PaddingContainer from '@/components/containers/PaddingContainer'
import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`
const options = { next: { revalidate: 30 } }

const AllBlogPosts = async () => {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
  return (
    <div className='w-full'>
      <PaddingContainer>
        <Title content={'Test Blog'} />
      </PaddingContainer>
      <SubHeader content={'All the updates test...'} />
      <PaddingContainer>
        <ul className='mt-20 flex flex-col gap-y-4'>
          {posts.map((post) => (
            <li className='hover:underline' key={post._id}>
              <Link
                href={`/test-blog/${post.slug.current}`}
                className='flex items-end'
              >
                <h2 className='mr-2 text-xl font-semibold'>{post.title}</h2>
                <p className='tracking-widest text-rose-800'>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </PaddingContainer>
    </div>
  )
}

export default AllBlogPosts
