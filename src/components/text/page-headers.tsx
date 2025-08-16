import { Separator } from '@/components/ui/separator'

interface PageHeadersProps {
  mainHeading: string
  mainSubHeading: string
}

const PageHeaders = ({ mainHeading, mainSubHeading }: PageHeadersProps) => {
  return (
    <>
      <header>
        <h1 className='font-display text-4xl md:text-5xl 2xl:text-6xl'>
          {mainHeading}
        </h1>
        <p className='text-accent-foreground text-lg md:mt-2 md:text-xl 2xl:text-2xl'>
          {mainSubHeading}
        </p>
      </header>

      <Separator className='border-chart-5 border-2 md:mb-8 lg:mb-12' />
    </>
  )
}

export default PageHeaders
