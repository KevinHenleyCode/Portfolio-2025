import BasicPadding from '@/components/containers/basic-padding'
import PageHeaders from '@/components/text/page-headers'
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
    <BasicPadding>
      <PageHeaders
        mainHeading={update.title}
        mainSubHeading={new Date(update.publishedAt).toLocaleDateString()}
      />
      <span className='flex justify-center lg:justify-start'>
        <Button asChild variant={'outline'} size={'sm'} className='mt-8'>
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}updates`}
            className='flex justify-between 2xl:text-xl'
          >
            <ChevronLeft /> Back
          </Link>
        </Button>
      </span>
      <UpdateCard
        title={update.title}
        imageUrl={`${updateImageUrl}`}
        linkGitHub={update.linkGitHub}
        linkWebSite={update.linkWebSite}
        mainBody={update.mainBody}
        additionalHeader={update.additionalHeader}
        additionalBody={update.additionalBody}
      />
    </BasicPadding>
  )
}

export default SingleUpdate
