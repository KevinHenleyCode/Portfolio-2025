import BasicPadding from '@/components/containers/basic-padding'
import PageHeaders from '@/components/text/page-headers'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata = {
  title: 'Tech',
}

/**
 * List tech that I've used throughout my time as a developer
 */
const Tech = () => {
  return (
    <BasicPadding>
      <PageHeaders mainHeading={'Tech'} mainSubHeading={'What I Use'} />

      <section className='mt-20 grid grid-cols-12 gap-4'>
        <Card className='4xl:col-span-4 col-span-12 lg:col-span-6'>
          <CardHeader className='w-full'>
            <CardTitle className='text-center [&>h2]:text-xl sm:[&>h2]:text-2xl'>
              <h2>Rice University Bootcamp</h2>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl'>
            <h3>Summary:</h3>
            <p>
              In 2021, I completed my Full Stack Bootcamp through Rice
              University. This program laid the foundation for my development
              career and introduced me to the MERN stack. It was a crash course
              in solving real-world problems under tight deadlines, and it gave
              me the confidence to pursue web development full-time. During this
              time, I became proficient with:
            </p>
          </CardContent>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl [&>ul>li>p]:ml-2'>
            <h3>Stack:</h3>
            <ul>
              <li>
                <b>Frontend</b>
                <p>HTML, CSS, JavaScript, Bootstrap, jQuery</p>
              </li>
              <li>
                <b>Backend</b>
                <p>Node.js, Express.js</p>
              </li>
              <li>
                <b>Databases</b>
                <p>MySQL (with Sequelize), MongoDB</p>
              </li>
              <li>
                <b>Additional Tools</b>
                <p>Git, APIs, PWAs</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className='4xl:col-span-4 col-span-12 lg:col-span-6'>
          <CardHeader className='w-full'>
            <CardTitle className='text-center [&>h2]:text-xl sm:[&>h2]:text-2xl'>
              <h2>VineBrook</h2>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl'>
            <h3>Summary:</h3>
            <p>
              At VineBrook Homes, I progressed from a junior to a senior
              developer role, gaining hands-on experience building and leading
              production-scale applications. I spearheaded the rebuild of our
              client-facing website and executive reporting platform,
              transitioning both from CakePHP to a modern stack using Next.js
              and Express. This cut load times by 50% and significantly reduced
              code complexity. I also integrated Azure AI tools to streamline
              internal workflows and boost team efficiency.
            </p>
          </CardContent>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl [&>ul>li>p]:ml-2'>
            <h3>Stack:</h3>
            <ul>
              <li>
                <b>Frontend</b>
                <p>React.js, Next.js, Tailwind CSS</p>
              </li>
              <li>
                <b>Backend</b>
                <p>Express.js, REST APIs</p>
              </li>
              <li>
                <b>Database</b>
                <p>MySQL, SQLite</p>
              </li>
              <li>
                <b>Tools</b>
                <p>Git, Figma, Adobe, Azure AI services</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className='4xl:col-span-4 col-span-12 lg:col-span-6'>
          <CardHeader className='w-full'>
            <CardTitle className='text-center [&>h2]:text-xl sm:[&>h2]:text-2xl'>
              <h2>Currently Using</h2>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl'>
            <h3>Summary:</h3>
            <p>
              I’m continuing to build and improve my own applications with
              modern web stacks, focusing on speed, performance, and user
              experience. My favorite project right now is my Portfolio-2025,
              although there’s a new favorite about to emerge, which I’ll be
              outlining over on my Updates Page. Currently, my stack includes:
            </p>
          </CardContent>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl [&>ul>li>p]:ml-2'>
            <h3>Stack:</h3>
            <ul>
              <li>
                <b>Frontend</b>
                <p>Next.js (v15+), Tailwind CSS, TypeScript</p>
              </li>
              <li>
                <b>Backend</b>
                <p>Next.js, RESTful APIs</p>
              </li>
              <li>
                <b>Database</b>
                <p>Prisma ORM with SQLite</p>
              </li>
              <li>
                <b>Hosting</b>
                <p>AWS EC2</p>
              </li>
              <li>
                <b>Version Control</b>
                <p>GitHub, GitHub Actions</p>
              </li>
              <li>
                <b>Dev Tools</b>
                <p>PM2, NGINX</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className='4xl:col-span-4 col-span-12 lg:col-span-6'>
          <CardHeader className='w-full'>
            <CardTitle className='text-center [&>h2]:text-xl sm:[&>h2]:text-2xl'>
              <h2>Currently Learning</h2>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl'>
            <h3>Summary:</h3>
            <p>
              I’m a firm believer in always staying current. Lately, I’ve been
              diving into:
            </p>
          </CardContent>
          <Separator />
          <CardContent className='[&>h3]:text-lg [&>h3]:font-semibold md:[&>h3]:mb-2 md:[&>h3]:text-xl [&>ul>li>p]:ml-2'>
            <h3>Tech:</h3>
            <ul>
              <li>
                <b>AWS</b>
                <p>
                  For more advanced deployment workflows and scalable app
                  hosting
                </p>
              </li>
              <li>
                <b>Rust & Tauri</b>
                <p>Exploring performant desktop app development</p>
              </li>
              <li>
                <b>WebAssembly (Wasm)</b>
                <p>
                  Looking into ways to bring high-performance native-like
                  features to the web
                </p>
              </li>
              <li>
                <b>Offline-first Applications</b>
                <p>
                  Using technologies like Prisma + SQLite + Wasm for PWAs and
                  cross-platform apps
                </p>
              </li>
              <li>
                <b>Python</b>
                <p>For scripting, automation</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </BasicPadding>
  )
}

export default Tech
