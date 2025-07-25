import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'
import PaddingContainer from '@/components/containers/PaddingContainer'
import SingleUpdateOutline from '@/components/showCasing/SingleUpdateOutline'
import { type SanityDocument } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from '@/sanity/client'

export const metadata = {
  title: 'Updates',
}

const UPDATE_QUERY = `*[_type == "portfolioUpdate" && slug.current == $slug][0]`
const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null
const options = { next: { revalidate: 30 } }

interface SingleUpdateProps {
  params: Promise<{ slug: string }>
}

const SingleUpdate = async ({ params }: SingleUpdateProps) => {
  const update = await client.fetch<SanityDocument>(
    UPDATE_QUERY,
    await params,
    options,
  )
  const updateImageUrl = update.image ? urlFor(update.image)?.url() : null

  return (
    <div className='w-full'>
      <PaddingContainer>
        <Title content={update.title} />
      </PaddingContainer>
      <SubHeader content={new Date(update.publishedAt).toLocaleDateString()} />
      <PaddingContainer>
        <div className='mt-20'>
          <SingleUpdateOutline
            postImage={`${updateImageUrl}`}
            postLink={''}
            mainBody={update.mainBody}
            additionalHeader={update.additionalHeader}
            additionalBody={update.additionalBody}
          />
        </div>
      </PaddingContainer>
    </div>
  )
}

export default SingleUpdate
