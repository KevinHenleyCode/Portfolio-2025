import { ReactNode } from 'react'

type BasicPaddingProps = {
  children: ReactNode
}

const BasicPadding = ({ children }: BasicPaddingProps) => {
  return (
    <div className='3xl:px-66 4xl:px-[27em] 5xl:px-[47em] w-full px-4 py-10 sm:px-8 md:px-12 lg:px-10 xl:px-26 2xl:px-42'>
      {children}
    </div>
  )
}

export default BasicPadding
