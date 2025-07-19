import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'
import PaddingContainer from '@/components/containers/PaddingContainer'
import UpdatesPosts from '@/components/showCasing/UpdatesPosts'
import UpdateImageBookWishlist from '../../../public/images/wishlist-update_7-19-2025.svg'

export const metadata = {
  title: 'Updates',
}

const Updates = () => {
  return (
    <div className='w-full'>
      <PaddingContainer>
        <Title content='Updates' />
      </PaddingContainer>
      <SubHeader content={`What's Happening Next...`} />
      <PaddingContainer>
        <div className='mt-20'>
          <UpdatesPosts
            postImage={UpdateImageBookWishlist}
            postHeader={'Book Wishlist'}
            postDate={'7-19-2025'}
            postContent={[
              `I’ll be kicking off a new project in the next few days that combines modern web technology with offline-first functionality. The goal is to build an intuitive app that uses the Google Books API to let users search for books while online, then save titles to a wishlist that remains fully accessible even without an internet connection. Whether you're traveling, offline, or just curating your next read, this app will keep your book list close at hand.`,
              `Looking forward to sharing progress soon!`,
            ]}
            listHeader={'Tech Stack:'}
            listContent={[
              { bold: 'Frontend & Backend', text: 'Next.js 15' },
              { bold: 'Styling', text: 'Tailwind CSS' },
              { bold: 'Offline Access', text: 'PWA (Progressive Web App)' },
              { bold: 'Database', text: 'Prisma ORM with SQLite' },
              {
                bold: 'Mobile Support',
                text: 'SQLite managed via WebAssembly (WASM)',
              },
              {
                bold: 'Hosting',
                text: 'Deployed on my personal AWS EC2 instance',
              },
            ]}
            postLink={''}
          />
        </div>
      </PaddingContainer>
    </div>
  )
}

export default Updates
