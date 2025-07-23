import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'
import PaddingContainer from '@/components/containers/PaddingContainer'
import Link from 'next/link'
import { type SanityDocument } from 'next-sanity'
import { client } from '@/sanity/client'
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`
const options = { next: { revalidate: 30 } }

const TestBlog = async () => {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
  return (
    <div className='w-full'>
      <PaddingContainer>
        <Title content={'Test Blog'} />
      </PaddingContainer>
      <SubHeader content={'Where I Test The Blog'} />
      <PaddingContainer>
        <div className='mt-20'>
          <h3 className='mb-8 text-4xl font-bold'>Posts</h3>
          <ul className='flex flex-col gap-y-4'>
            {posts.map((post) => (
              <li className='hover:underline' key={post._id}>
                <Link href={`/test-blog/${post.slug.current}`}>
                  <h2 className='text-xl font-semibold'>{post.title}</h2>
                  <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PaddingContainer>
    </div>
  )
}

export default TestBlog
