import PaddingContainer from '@/components/containers/PaddingContainer'
import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'

const Portfolio = () => {
  return (
    <div className='w-full'>
      <PaddingContainer>
        <Title content={'Portfolio'} />
      </PaddingContainer>
      <SubHeader content={`What I've Done & What I'm Doing... `} />
    </div>
  )
}

export default Portfolio
