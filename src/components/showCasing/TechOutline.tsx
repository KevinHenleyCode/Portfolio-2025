interface TechOutlineProps {
  headerContent: string
  summaryContent: string
  stackContent: string[]
}

const TechOutline = ({
  headerContent,
  summaryContent,
  stackContent,
}: TechOutlineProps) => {
  return (
    <section className='w-full rounded-2xl border-3 border-rose-600/50 bg-white/10'>
      <h3 className='bg-custom-dark/70 rounded-t-2xl p-2 tracking-wider text-rose-600'>
        {headerContent}
      </h3>
      <article className='p-2 text-sm'>{summaryContent}</article>
      <aside className=''>
        <h4 className='bg-custom-dark/70 px-2 py-1 text-lg text-rose-600'>
          Stack:
        </h4>
        <ul className='p-2 text-xs'>
          {stackContent.map((listItem) => (
            <li key={listItem}>{listItem}</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

export default TechOutline
