'use client'
import { ReactNode } from 'react'

type PaddingSize = 'sm' | 'md' | 'lg'

const paddingMap: Record<PaddingSize, string> = {
  sm: 'px-2 sm:px-16 xl:px-36', //Needs updating and testing
  md: 'px-6 sm:px-24 xl:px-48',
  lg: 'px-8 sm:px-36 xl:px-56', //Needs updating and testing
}

interface PaddingContainerProps {
  children: ReactNode
  paddingAmount?: PaddingSize
}

const PaddingContainer = ({
  children,
  paddingAmount = 'md',
}: PaddingContainerProps) => {
  const paddingClasses = paddingMap[paddingAmount]

  return <div className={paddingClasses}>{children}</div>
}

export default PaddingContainer
