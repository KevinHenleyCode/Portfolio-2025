import { PortableText, type SanityDocument } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from '@/sanity/client'
import Link from 'next/link'
import Image from 'next/image'
import PaddingContainer from '@/components/containers/PaddingContainer'
import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`
const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null
const options = { next: { revalidate: 30 } }

interface SingleBlogPostProps {
  params: Promise<{ slug: string }>
}

const SingleBlogPost = async ({ params }: SingleBlogPostProps) => {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  )
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null

  return (
    <div className='w-full'>
      <PaddingContainer>
        <Link href='/test-blog' className='text-lime-500 hover:underline'>
          ← Back to posts
        </Link>
        <Title content={post.title} />
      </PaddingContainer>
      <SubHeader
        content={`Published On: ${new Date(post.publishedAt).toLocaleDateString()}`}
      />
      <PaddingContainer>
        <div className='mt-20'>
          {postImageUrl && (
            <Image
              src={postImageUrl}
              alt={post.title}
              className='aspect-video rounded-xl'
              width='550'
              height='310'
            />
          )}
          <span className='prose'>
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </span>
        </div>
      </PaddingContainer>
    </div>
  )
}

export default SingleBlogPost
