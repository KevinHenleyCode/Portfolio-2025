import PaddingContainer from '@/components/containers/PaddingContainer'
import SubHeader from '@/components/textStanards/SubHeader'
import Title from '@/components/textStanards/Title'

export default function Home() {
  return (
    <div>
      <PaddingContainer>
        <Title content={'Kevin Henley'} />
      </PaddingContainer>
      <SubHeader content={'Full-Stack Web Developer'} />
      <PaddingContainer>
        <article className='text-md mt-16 tracking-widest sm:text-lg md:mt-20 md:text-xl [&>p]:mt-4'>
          <p>
            Welcome to my portfolio. {`I'm`} Kevin, a developer with a passion
            for building fast, responsive, and scalable web applications. This
            site is a reflection of my journey, both where {`I’ve`} been
            professionally and where {`I’m`} heading next.
          </p>
          <p>
            With over five years of experience in web development, {`I’ve`} led
            frontend efforts for enterprise teams and shipped production-grade
            applications using React, Next.js, and Express. Most recently, I
            most recently, worked as a Senior Frontend Developer at VineBrook
            Homes, where I led a team of eight developers and helped modernize
            our stack from CakePHP to a Next.js/Express.js architecture, more
            than doubling development speed and cutting load times by half.
          </p>
          <p>
            A big part of that success came from working closely with our CTO,
            with whom I regularly collaborated to exchange ideas and explore
            improvements to our development process. After pitching the idea to
            rebuild our client-facing site and internal reporting web app using
            a modern stack, I received his direct approval to lead the
            initiative, a decision that brought measurable performance and
            productivity gains across the board.
          </p>
          <p>
            Throughout my time at VineBrook, I also worked cross-functionally
            with designers, marketers, and business stakeholders, and I learned
            when to push back. Whether it was managing scope creep from business
            leaders or complex animations from designers that {`didn’t`} fit the
            original timeline, I made sure to communicate clearly and protect
            both our deadlines and our {`team’s`} work balance. {`I’m`} easy to
            work with, but I speak up when {`something’s`} off track. If a
            change meant delaying a release or moving features to the next
            sprint, I made sure that was discussed early and approved, not just
            assumed.
          </p>
          <p>
            This current site was built from the ground up and deployed on an
            AWS EC2 instance, which I configured and manage directly. Every page
            is written using the same technologies I work with every day: Next,
            TypeScript, and Tailwind. {`You'll`} find throughout the site
            sections showcasing my favorite tools, links to the projects{' '}
            {`I’ve`} been building, and ways to get in touch.
          </p>
          <p>
            Before tech, I worked in design and hands-on industries, which gave
            me a practical, solution-focused mindset that I bring into every
            project. My transition into development was accelerated through Rice
            {`University’s`} Full Stack Bootcamp, and {`I’ve`} been sharpening
            my skills ever since, learning Rust, Tauri, and expanding my AWS
            knowledge.
          </p>
          <p>
            Thanks for stopping by. Feel free to contact me with any questions,
            and enjoy exploring the rest of the site.
          </p>
        </article>
      </PaddingContainer>
    </div>
  )
}
