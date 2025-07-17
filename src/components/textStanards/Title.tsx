interface TitleProps {
  content: string
}

const Title = ({ content }: TitleProps) => {
  return (
    <h1 className='text-2xl font-semibold tracking-widest uppercase sm:text-4xl md:text-6xl'>
      {content}
    </h1>
  )
}

export default Title
