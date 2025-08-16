import BasicPadding from '@/components/containers/basic-padding'
import PageHeaders from '@/components/text/page-headers'
import { type SanityDocument } from 'next-sanity'
import { client } from '@/sanity/client'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'Updates',
}

const UPDATES_QUERY = `*[
  _type == "portfolioUpdate"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`
const options = { next: { revalidate: 30 } }

/**
 * Holds links for all pages passed by Sanity
 */
const AllUpdates = async () => {
  const updates = await client.fetch<SanityDocument[]>(
    UPDATES_QUERY,
    {},
    options,
  )

  return (
    <BasicPadding>
      <PageHeaders
        mainHeading={'Updates'}
        mainSubHeading={`What's Happening Next...`}
      />
      <section className='mt-20'>
        <ul className='grid grid-cols-12 gap-4'>
          {updates.map((update) => (
            <li
              key={update._id}
              className='5xl:col-span-3 col-span-12 sm:col-span-6 2xl:col-span-4'
            >
              <Link
                href={`updates/${update.slug.current}`}
                className={`h-fit w-full ${buttonVariants({ variant: 'default' })}`}
              >
                <span className='3xl:text-2xl flex w-full items-center justify-center md:text-lg lg:text-xl'>
                  <p className='mr-2'>{update.title}:</p>
                  <time>
                    {new Date(update.publishedAt).toLocaleDateString()}
                  </time>
                  <ChevronRight />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </BasicPadding>
  )
}

export default AllUpdates
