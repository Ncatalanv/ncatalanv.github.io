import { render, screen, within } from '@testing-library/react'
import News from '../../src/sections/News.tsx'
import type { NewsItem } from '../../src/types/index.ts'
import { waitUntil } from '../helpers/waitUntil.ts'
import { mockFetchRoutes } from '../helpers/mockFetch.ts'

const news: NewsItem[] = [
  {
    id: 'academica-1',
    title: 'Certificación académica uno',
    date: '2026-05-15',
    summary: 'Resumen de la novedad académica uno.',
    category: 'academica',
  },
  {
    id: 'tecnologia-1',
    title: 'Novedad tecnológica uno',
    date: '2026-05-02',
    summary: 'Resumen de la novedad tecnológica uno.',
    category: 'tecnologia',
  },
  {
    id: 'academica-2',
    title: 'Certificación académica dos',
    date: '2026-03-20',
    summary: 'Resumen de la novedad académica dos.',
    category: 'academica',
  },
  {
    id: 'tecnologia-2',
    title: 'Novedad tecnológica dos',
    date: '2026-01-10',
    summary: 'Resumen de la novedad tecnológica dos.',
    category: 'tecnologia',
  },
]

describe('News', () => {
  it('renderiza las dos secciones de noticias desde un único JSON', async () => {
    mockFetchRoutes({ 'data/news.json': news })

    render(<News />)

    await waitUntil(
      () => screen.queryAllByRole('heading', { level: 3 }).length === 5,
    )

    const featured = screen.getByRole('region', { name: 'Noticias destacadas' })
    const academic = screen.getByRole('region', { name: 'Novedades académicas' })

    expect(within(featured).getAllByRole('heading', { level: 3 }).length).toBe(3)
    expect(
      within(academic).getAllByRole('heading', { level: 3 }).map((node) => node.textContent),
    ).toEqual(['Certificación académica uno', 'Certificación académica dos'])

    expect(within(academic).queryByText('Novedad tecnológica uno')).toBeNull()
    expect(within(featured).getByText('Novedad tecnológica uno')).toBeTruthy()
  })

  it('destaca la primera noticia de la sección principal', async () => {
    mockFetchRoutes({ 'data/news.json': news })

    render(<News />)

    await waitUntil(() => screen.queryAllByRole('heading', { level: 3 }).length === 5)

    const featured = screen.getByRole('region', { name: 'Noticias destacadas' })
    const cards = featured.querySelectorAll('article')

    expect(cards[0].className).toContain('border-l-4')
    expect(cards[1].className).not.toContain('border-l-4')
  })

  it('muestra el mensaje vacío de la sección académica', async () => {
    mockFetchRoutes({
      'data/news.json': news.filter((item) => item.category === 'tecnologia'),
    })

    render(<News />)

    await waitUntil(() =>
      Boolean(screen.queryByText('Todavía no hay novedades académicas publicadas.')),
    )

    expect(
      screen.getByText('Todavía no hay novedades académicas publicadas.'),
    ).toBeTruthy()
  })
})
