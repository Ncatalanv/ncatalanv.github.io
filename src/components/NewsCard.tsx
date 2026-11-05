import type { NewsCategory, NewsItem } from '../types/index.ts'
import { cn } from '../lib/cn.ts'
import Badge from './ui/Badge.tsx'
import Card from './ui/Card.tsx'

export interface NewsCardProps {
  item: NewsItem
  featured?: boolean
}

const categoryLabels: Record<NewsCategory, string> = {
  academica: 'Académico',
  tecnologia: 'Tecnología',
}

const dateFormatter = new Intl.DateTimeFormat('es-CL', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

function formatDate(isoDate: string): string {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00`))
}

function NewsCard({ item, featured = false }: NewsCardProps) {
  return (
    <Card
      as="article"
      className={cn(
        'flex h-full flex-col gap-3 p-6',
        featured && 'border-l-4 border-l-indigo-500 dark:border-l-indigo-400',
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge variant={item.category === 'tecnologia' ? 'brand' : 'accent'}>
          {categoryLabels[item.category]}
        </Badge>
        <time
          dateTime={item.date}
          className="text-sm font-medium text-slate-500 dark:text-slate-400"
        >
          {formatDate(item.date)}
        </time>
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
        {item.title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400">{item.summary}</p>
    </Card>
  )
}

export default NewsCard
