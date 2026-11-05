import type { NewsItem } from '../types/index.ts'
import NewsCard from './NewsCard.tsx'
import { ErrorState, LoadingState } from './ui/Feedback.tsx'
import Section from './ui/Section.tsx'

export interface NewsSectionProps {
  id: string
  title: string
  subtitle?: string
  items: NewsItem[]
  loading?: boolean
  error?: string | null
  onRetry?: () => void
  emptyMessage?: string
  /** Destaca visualmente la primera noticia de la lista. */
  highlightFirst?: boolean
  columnsClassName?: string
}

function NewsSection({
  id,
  title,
  subtitle,
  items,
  loading = false,
  error = null,
  onRetry,
  emptyMessage = 'No hay noticias disponibles por ahora.',
  highlightFirst = false,
  columnsClassName = 'sm:grid-cols-2 lg:grid-cols-3',
}: NewsSectionProps) {
  return (
    <Section id={id} title={title} subtitle={subtitle}>
      {loading ? <LoadingState label="Cargando noticias…" /> : null}

      {!loading && error ? <ErrorState message={error} onRetry={onRetry} /> : null}

      {!loading && !error && items.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">{emptyMessage}</p>
      ) : null}

      {!loading && !error && items.length > 0 ? (
        <ul className={`grid gap-6 ${columnsClassName}`}>
          {items.map((item, index) => (
            <li key={item.id} className="h-full">
              <NewsCard item={item} featured={highlightFirst && index === 0} />
            </li>
          ))}
        </ul>
      ) : null}
    </Section>
  )
}

export default NewsSection
