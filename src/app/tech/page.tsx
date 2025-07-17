import PaddingContainer from '@/components/containers/PaddingContainer'
import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'
import TechOutline from '@/components/showCasing/TechOutline'

const Tech = () => {
  return (
    <div className='w-full'>
      <PaddingContainer>
        <Title content={'Tech'} />
      </PaddingContainer>
      <SubHeader content={'What I Use'} />
      <PaddingContainer>
        <div className='mt-20'>
          <TechOutline
            headerContent={'Rice University Bootcamp:'}
            summaryContent={
              'In 2021, I completed my Full Stack Bootcamp through Rice University. This program laid the foundation for my development career and introduced me to the MERN stack. It was a crash course in solving real-world problems under tight deadlines, and it gave me the confidence to pursue web development full-time. During this time, I became proficient with:'
            }
            stackContent={[
              'Frontend: HTML, CSS, JavaScript, Bootstrap, jQuery',
              'Backend: Node.js, Express.js',
              'Databases: MySQL (with Sequelize), MongoDB',
              'Additional Tools: Git, APIs, PWAs',
            ]}
          />
        </div>
      </PaddingContainer>
    </div>
  )
}

export default Tech
