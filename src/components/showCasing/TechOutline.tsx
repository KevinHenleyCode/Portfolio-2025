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
    <section className='5xl:col-span-2 col-span-6 w-full rounded-2xl border-3 border-rose-900/40 bg-gray-400/10 shadow-lg shadow-rose-600/40 xl:col-span-3'>
      <h3 className='bg-custom-dark/70 rounded-t-2xl border-b-2 border-rose-900/40 p-2 text-xl font-semibold tracking-wider text-rose-600 shadow-lg shadow-rose-800/50 sm:text-2xl'>
        {firstHeader}
      </h3>
      <article className='my-2 p-2 text-sm tracking-widest sm:text-lg'>
        <p>{summaryContent}</p>
      </article>
      <aside>
        <h4 className='bg-custom-dark border-y-2 border-rose-900/40 px-2 py-1 text-lg font-semibold text-rose-700 shadow-lg shadow-rose-800/50 sm:text-2xl'>
          {secondHeader}:
        </h4>
        <ul className='p-2 text-xs'>
          {stacks.map((stack, index) => (
            <li key={index} className='my-2 tracking-widest'>
              <b className='text-xs text-lime-400 sm:text-lg xl:text-xl'>
                {stack.category}:
              </b>
              <p className='ml-4 text-xs sm:text-sm lg:text-lg xl:text-xl'>
                {stack.content}
              </p>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default TechOutline
