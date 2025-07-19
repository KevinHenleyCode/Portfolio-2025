import PaddingContainer from '@/components/containers/PaddingContainer'
import Title from '@/components/textStanards/Title'
import SubHeader from '@/components/textStanards/SubHeader'
import PortfolioProjects from '@/components/showCasing/PortfolioProjects'
import NotFoundImage from '../../../public/images/next-js-icon.svg'

export const metadata = {
  title: 'Portfolio',
}

const Portfolio = () => {
  return (
    <div className='w-full'>
      <PaddingContainer>
        <Title content={'Portfolio'} />
      </PaddingContainer>
      <SubHeader content={`What I've Done & What I'm Doing... `} />
      <PaddingContainer>
        <div className='mt-36 grid grid-cols-4 gap-8'>
          <PortfolioProjects
            projectImage={NotFoundImage}
            firstHeader={'Portfolio-2025'}
            summaryContent={`This site you're on right now is one of my core projects, built not just to showcase my work, but to grow alongside me. It’s designed as a living portfolio that evolves as I do, with the goal of giving potential employers or collaborators a clear picture of what I’m learning, building, and aiming toward.`}
            purposeHeader={'Purpose'}
            purposeContent={`To highlight my current abilities as a full-stack developer and serve as a central hub for all future projects, announcements, and experiments.`}
            stackHeader={'Tech Stack'}
            stackContent={`Next.js, Tailwind CSS, AWS EC2, and GitHub for version control. Future versions may include a content management panel or embedded database using Prisma + SQLite.`}
            nextHeader={'Next Goals'}
            nextListItems={[
              `Add a small dashboard for managing featured projects`,
              `Integrate a lightweight blog/devlog to track progress`,
              `Continue refining performance and accessibility`,
            ]}
          />
        </div>
      </PaddingContainer>
    </div>
  )
}

export default Portfolio
