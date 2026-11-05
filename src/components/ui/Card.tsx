import type { ElementType, ReactNode } from 'react'
import { cn } from '../../lib/cn.ts'

export interface CardProps {
  children: ReactNode
  as?: Extract<ElementType, 'div' | 'article' | 'li'>
  className?: string
}

function Card({ children, as: Component = 'div', className }: CardProps) {
  return (
    <Component
      className={cn(
        'rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900',
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default Card
