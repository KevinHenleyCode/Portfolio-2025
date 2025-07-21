interface TitleProps {
  content: string
}

const Title = ({ content }: TitleProps) => {
  return (
    <h1 className='5xl:text-8xl text-2xl font-semibold tracking-widest uppercase sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl'>
      {content}
    </h1>
  )
}

export default Title
