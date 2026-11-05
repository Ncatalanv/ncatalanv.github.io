import { useId } from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn.ts'

export interface SectionProps {
  id?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

function Section({ id, title, subtitle, children, className }: SectionProps) {
  const headingId = useId()

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('scroll-mt-24 py-12', className)}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id={headingId}
          className="mb-4 font-serif text-4xl text-indigo-500 dark:text-indigo-400 sm:text-5xl"
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mb-8 max-w-2xl text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  )
}

export default Section
