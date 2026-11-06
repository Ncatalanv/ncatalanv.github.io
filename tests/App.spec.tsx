import { render, screen } from '@testing-library/react'
import App from '../src/App.tsx'
import type { NewsItem, Profile, Project } from '../src/types/index.ts'
import { mockFetchRoutes } from './helpers/mockFetch.ts'
import { waitUntil } from './helpers/waitUntil.ts'

const profile: Profile = {
  name: 'Nicolás Catalán',
  role: 'Estudiante de Ingeniería en Informática',
  tagline: 'Desarrollo web, datos y automatización',
  bio: 'Biografía breve de prueba.',
  about: ['Párrafo de prueba sobre mi trayectoria.'],
  email: 'nicolas@example.com',
  phone: '+569 12345678',
  location: 'Santiago, Chile',
  avatar: '/images/profile/polar.jpg',
  interests: ['Desarrollo frontend'],
  socials: [{ label: 'GitHub', url: 'https://github.com/Ncatalanv' }],
}

const projects: Project[] = [
  {
    id: 'portafolio',
    title: 'Portafolio Personal',
    description: 'Sitio personal construido con React y TypeScript.',
    image: '/images/projects/portfolio.svg',
    imageAlt: 'Imagen del portafolio',
    tech: ['React', 'TypeScript'],
    repoUrl: 'https://github.com/Ncatalanv',
    year: 2026,
    featured: true,
  },
]

const news: NewsItem[] = [
  {
    id: 'academica',
    title: 'Certificación de prueba',
    date: '2026-05-15',
    summary: 'Resumen de la novedad académica.',
    category: 'academica',
  },
]

const sectionTitles = [
  'Sobre mí',
  'Proyectos',
  'Noticias destacadas',
  'Novedades académicas',
  'Experiencia',
  'Educación',
  'Habilidades',
  'Licencias y certificaciones',
  'Contacto',
]

describe('App', () => {
  it('integra el perfil y todas las secciones del portafolio', async () => {
    mockFetchRoutes({
      'data/profile.json': profile,
      'data/projects.json': projects,
      'data/news.json': news,
    })

    render(<App />)

    expect(
      screen.getByRole('link', { name: 'Saltar al contenido principal' }),
    ).toBeTruthy()
    expect(screen.getByRole('main')).toBeTruthy()
    expect(screen.getByRole('navigation', { name: 'Navegación principal' })).toBeTruthy()

    await waitUntil(() =>
      Boolean(screen.queryByRole('heading', { level: 1, name: profile.name })),
    )
    await waitUntil(() =>
      Boolean(screen.queryByRole('heading', { level: 2, name: 'Novedades académicas' })),
    )

    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeTruthy()

    for (const title of sectionTitles) {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeTruthy()
    }

    expect(screen.getByRole('heading', { level: 3, name: 'Portafolio Personal' })).toBeTruthy()
    expect(
      screen.getAllByRole('heading', { level: 3, name: 'Certificación de prueba' }).length,
    ).toBe(2)
    expect(screen.getByRole('contentinfo')).toBeTruthy()
  })

  it('mantiene el contenido principal visible si el perfil falla', async () => {
    mockFetchRoutes({
      'data/projects.json': projects,
      'data/news.json': news,
    })

    render(<App />)

    await waitUntil(() => Boolean(screen.queryByRole('alert')))

    expect(screen.getByRole('alert').textContent).toContain('HTTP 404')
    expect(screen.getByRole('heading', { level: 2, name: 'Proyectos' })).toBeTruthy()
  })
})
