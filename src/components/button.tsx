import { cn } from '@/lib/utils'
import React from 'react'

export type ButtonProps = {
    className? :string,
    children:React.ReactNode
}

const HeroButton = ({children,className}:ButtonProps) => {
  return (
    <div className={cn('px-6 text-sm font-semibold py-2 border cursor-pointer border-neutral-700 rounded-2xl',className)}>{children}</div>
  )
}

export default HeroButton