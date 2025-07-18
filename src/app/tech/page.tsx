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
        <div className='mt-20 grid grid-cols-4 gap-8'>
          <TechOutline
            firstHeader={'Rice University Bootcamp'}
            summaryContent={
              'In 2021, I completed my Full Stack Bootcamp through Rice University. This program laid the foundation for my development career and introduced me to the MERN stack. It was a crash course in solving real-world problems under tight deadlines, and it gave me the confidence to pursue web development full-time. During this time, I became proficient with:'
            }
            secondHeader={'Stack'}
            stacks={[
              {
                category: 'Frontend',
                content: 'HTML, CSS, JavaScript, Bootstrap, jQuery',
              },
              { category: 'Backend', content: 'Node.js, Express.js' },
              {
                category: 'Databases',
                content: 'MySQL (with Sequelize), MongoDB',
              },
              { category: 'Additional Tools', content: 'Git, APIs, PWAs' },
            ]}
          />
          <TechOutline
            firstHeader={'VineBrook'}
            summaryContent={
              'At VineBrook Homes, I progressed from a junior to a senior developer role, gaining hands-on experience building and leading production-scale applications. I spearheaded the rebuild of our client-facing website and executive reporting platform, transitioning both from CakePHP to a modern stack using Next.js and Express. This cut load times by 50% and significantly reduced code complexity. I also integrated Azure AI tools to streamline internal workflows and boost team efficiency.'
            }
            secondHeader={'Stack'}
            stacks={[
              {
                category: 'Frontend',
                content: 'React.js, Next.js, Tailwind CSS',
              },
              { category: 'Backend', content: 'Express.js, REST APIs' },
              {
                category: 'Database',
                content: 'MySQL, SQLite',
              },
              {
                category: 'Tools',
                content: 'Git, Figma, Adobe, Azure AI services',
              },
            ]}
          />
          <TechOutline
            firstHeader={'Currently Using'}
            summaryContent={
              'I’m continuing to build and improve my own applications with modern web stacks, focusing on speed, performance, and user experience. My favorite project right now is my Portfolio-2025, although there’s a new favorite about to emerge, which I’ll be outlining over on my Updates Page. Currently, my stack includes:'
            }
            secondHeader={'Stack'}
            stacks={[
              {
                category: 'Frontend',
                content: 'Next.js (v15+), Tailwind CSS, TypeScript',
              },
              { category: 'Backend', content: 'Next.js, RESTful APIs' },
              {
                category: 'Database',
                content: 'Prisma ORM with SQLite',
              },
              { category: 'Hosting', content: 'AWS EC2' },
              {
                category: 'Version Control ',
                content: 'GitHub, GitHub Actions',
              },
              { category: 'Dev Tools', content: 'PM2, NGINX' },
            ]}
          />
          <TechOutline
            firstHeader={'Currently Learning'}
            summaryContent={
              'I’m a firm believer in always staying current. Lately, I’ve been diving into:'
            }
            secondHeader={'Tech'}
            stacks={[
              {
                category: 'AWS',
                content:
                  'For more advanced deployment workflows and scalable app hosting',
              },
              {
                category: 'Rust & Tauri',
                content: 'Exploring performant desktop app development',
              },
              {
                category: 'WebAssembly (Wasm)',
                content:
                  'Looking into ways to bring high-performance native-like features to the web',
              },
              {
                category: 'Offline-first Applications',
                content:
                  'Using technologies like Prisma + SQLite + Wasm for PWAs and cross-platform apps',
              },
              { category: 'Python', content: 'For scripting, automation' },
            ]}
          />
        </div>
      </PaddingContainer>
    </div>
  )
}

export default Tech
