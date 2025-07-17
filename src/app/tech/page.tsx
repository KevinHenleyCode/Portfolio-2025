import PaddingContainer from '@/components/containers/PaddingContainer'
import SubHeader from '@/components/textStanards/SubHeader'
import Title from '@/components/textStanards/Title'

const Tech = () => {
  return (
    <div className='w-full'>
      <PaddingContainer>
        <Title content={'Tech'} />
      </PaddingContainer>
      <SubHeader content={'What I Use'} />
    </div>
  )
}

export default Tech
