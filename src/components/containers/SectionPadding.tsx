'use client'
import { ReactNode } from 'react'

const SectionPadding = ({
  children,
  paddingOn = true,
}: {
  children: ReactNode
  paddingOn?: boolean
}) => {
  return (
    <section className={`${paddingOn ? 'px-6 sm:px-24 xl:px-48' : ''}`}>
      {children}
    </section>
  )
}

export default SectionPadding
