import type { ReactNode } from 'react'
import { cn } from '../../lib/cn.ts'

type BadgeVariant = 'brand' | 'neutral' | 'accent'

export interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  brand:
    'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300',
  neutral:
    'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  accent:
    'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300',
}

function Badge({ children, variant = 'brand', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
