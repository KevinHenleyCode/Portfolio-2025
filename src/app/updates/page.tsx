import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'
import PaddingContainer from '@/components/containers/PaddingContainer'
import { type SanityDocument } from 'next-sanity'
import { client } from '@/sanity/client'
import AllUpdatesOutline from '@/components/showCasing/AllUpdatesOutline'

export const metadata = {
  title: 'Updates',
}

const UPDATES_QUERY = `*[
  _type == "portfolioUpdate"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`
const options = { next: { revalidate: 30 } }

const AllUpdates = async () => {
  const updates = await client.fetch<SanityDocument[]>(
    UPDATES_QUERY,
    {},
    options,
  )

  return (
    <div className='w-full'>
      <PaddingContainer>
        <Title content='Updates' />
      </PaddingContainer>
      <SubHeader content={`What's Happening Next...`} />
      <PaddingContainer>
        <div className='mt-20'>
          {updates.map((update) => (
            <AllUpdatesOutline
              key={`${update._id}`}
              postHeader={update.title}
              postDate={update.publishedAt}
              slug={update.slug.current}
            />
          ))}
        </div>
      </PaddingContainer>
    </div>
  )
}

export default AllUpdates
