interface TechOutlineProps {
  firstHeader: string
  summaryContent: string
  secondHeader: string
  stacks: Array<{
    category: string
    content: string
  }>
}

const TechOutline = ({
  firstHeader,
  summaryContent,
  secondHeader,
  stacks,
}: TechOutlineProps) => {
  return (
    <section className='w-full rounded-2xl border-3 border-rose-600/50 bg-white/10'>
      <h3 className='bg-custom-dark/70 rounded-t-2xl p-2 tracking-wider text-rose-600'>
        {firstHeader}
      </h3>
      <article className='p-2 text-sm'>{summaryContent}</article>
      <aside className=''>
        <h4 className='bg-custom-dark/70 px-2 py-1 text-lg text-rose-600'>
          {secondHeader}:
        </h4>
        <ul className='p-2 text-xs'>
          {stacks.map((stack, index) => (
            <li key={index} className='flex'>
              <b className='mr-1'>{stack.category}:</b>
              <p>{stack.content}</p>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default TechOutline
