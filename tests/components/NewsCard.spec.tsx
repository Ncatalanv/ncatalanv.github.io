import { render, screen } from '@testing-library/react'
import NewsCard from '../../src/components/NewsCard.tsx'
import type { NewsItem } from '../../src/types/index.ts'

const newsItem: NewsItem = {
  id: 'noticia-demo',
  title: 'Noticia de prueba',
  date: '2026-03-05',
  summary: 'Resumen breve de la noticia de prueba.',
  category: 'academica',
}

describe('NewsCard', () => {
  it('renderiza título, resumen, categoría y fecha', () => {
    render(<NewsCard item={newsItem} />)

    expect(screen.getByRole('heading', { name: newsItem.title })).toBeTruthy()
    expect(screen.getByText(newsItem.summary)).toBeTruthy()
    expect(screen.getByText('Académico')).toBeTruthy()

    const time = document.querySelector('time')
    expect(time?.getAttribute('dateTime')).toBe(newsItem.date)
    expect(time?.textContent).toContain('2026')
  })

  it('traduce la categoría de tecnología', () => {
    render(<NewsCard item={{ ...newsItem, category: 'tecnologia' }} />)

    expect(screen.getByText('Tecnología')).toBeTruthy()
  })

  it('aplica el estilo destacado cuando se solicita', () => {
    const { container } = render(<NewsCard item={newsItem} featured />)

    expect(container.querySelector('article')?.className).toContain('border-l-4')
  })
})
