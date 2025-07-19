import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'
import PaddingContainer from '@/components/containers/PaddingContainer'

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
    </div>
  )
}

export default Updates
