import { type SanityDocument } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from '@/sanity/client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import UpdateCard from '@/components/cards/update'

/**
 * Generates title based on slug passed from Sanity
 */
export async function generateMetadata({ params }: SingleUpdateProps) {
  return {
    title: (await params).slug,
    description: 'Keep up to date on my latest progress',
  }
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

/**
 * Generates page based on params passed in slug
 */
const SingleUpdate = async ({ params }: SingleUpdateProps) => {
  const update = await client.fetch<SanityDocument>(
    UPDATE_QUERY,
    await params,
    options,
  )
  const updateImageUrl = update.image ? urlFor(update.image)?.url() : null

  return (
    <div className='w-full px-4 py-10'>
      <header className='flex flex-col items-start'>
        <h1>{update.title}</h1>
        <time>{new Date(update.publishedAt).toLocaleDateString()}</time>
        <Button asChild variant={'outline'} size={'sm'}>
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}new/updates`}
            className='flex justify-between'
          >
            <ChevronLeft /> Back
          </Link>
        </Button>
      </header>
      <UpdateCard
        title={update.title}
        imageUrl={`${updateImageUrl}`}
        linkGitHub={update.linkGitHub}
        linkWebSite={update.linkWebSite}
        mainBody={update.mainBody}
        additionalHeader={update.additionalHeader}
        additionalBody={update.additionalBody}
      />
    </div>
  )
}

export default SingleUpdate
