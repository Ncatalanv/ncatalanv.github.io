import { useJsonData } from '../hooks/useJsonData.ts'
import type { NewsItem } from '../types/index.ts'
import NewsSection from '../components/NewsSection.tsx'

const FEATURED_LIMIT = 3

function News() {
  const { data, loading, error, refetch } =
    useJsonData<NewsItem[]>('data/news.json')

  const items = data ?? []
  const featured = items.slice(0, FEATURED_LIMIT)
  const academic = items.filter((item) => item.category === 'academica')

  return (
    <>
      <NewsSection
        id="noticias"
        title="Noticias destacadas"
        subtitle="Novedades recientes sobre proyectos, aprendizaje y logros."
        items={featured}
        loading={loading}
        error={error}
        onRetry={refetch}
        highlightFirst
      />

      <NewsSection
        id="noticias-academicas"
        title="Novedades académicas"
        subtitle="Certificaciones, cursos y avances de mi formación en Duoc UC."
        items={academic}
        loading={loading}
        error={error}
        onRetry={refetch}
        emptyMessage="Todavía no hay novedades académicas publicadas."
        columnsClassName="sm:grid-cols-2"
      />
    </>
  )
}

export default News
