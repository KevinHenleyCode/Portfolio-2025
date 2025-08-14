import { type SanityDocument } from 'next-sanity'
import { client } from '@/sanity/client'
import Link from 'next/link'

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
    <div className='w-full px-4 py-10'>
      <header>
        <h1>Updates</h1>
        <p>{`What's`} Happening Next...</p>
      </header>
      <section className='mt-20'>
        <ul>
          {updates.map((update) => (
            <li key={update._id} className='my-4 bg-gray-400'>
              <Link href={`updates/${update.slug.current}`}>
                <h2>{update.title}</h2>
                <time>{update.publishedAt}</time>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default AllUpdates
