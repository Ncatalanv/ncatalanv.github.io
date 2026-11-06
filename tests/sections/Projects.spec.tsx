import { fireEvent, render, screen, within } from '@testing-library/react'
import Projects from '../../src/sections/Projects.tsx'
import type { Project } from '../../src/types/index.ts'
import { waitUntil } from '../helpers/waitUntil.ts'
import { mockFetchRoutes } from '../helpers/mockFetch.ts'

const projects: Project[] = [
  {
    id: 'uno',
    title: 'Proyecto Uno',
    description: 'Descripción del primer proyecto.',
    image: '/images/projects/portfolio.svg',
    imageAlt: 'Imagen del proyecto uno',
    tech: ['React', 'TypeScript'],
    demoUrl: 'https://example.com/uno',
    repoUrl: 'https://github.com/example/uno',
    year: 2026,
    featured: true,
  },
  {
    id: 'dos',
    title: 'Proyecto Dos',
    description: 'Descripción del segundo proyecto.',
    image: '/images/projects/dashboard.svg',
    imageAlt: 'Imagen del proyecto dos',
    tech: ['Python', 'SQL'],
    repoUrl: 'https://github.com/example/dos',
    year: 2025,
    featured: false,
  },
  {
    id: 'tres',
    title: 'Proyecto Tres',
    description: 'Descripción del tercer proyecto.',
    image: '/images/projects/inventario.svg',
    imageAlt: 'Imagen del proyecto tres',
    tech: ['Java', 'Spring Boot'],
    repoUrl: 'https://github.com/example/tres',
    year: 2025,
    featured: false,
  },
]

describe('Projects', () => {
  it('renderiza al menos tres proyectos cargados desde JSON', async () => {
    mockFetchRoutes({ 'data/projects.json': projects })

    render(<Projects />)

    expect(screen.getByText('Cargando proyectos…')).toBeTruthy()

    await waitUntil(
      () => screen.queryAllByRole('heading', { level: 3 }).length === projects.length,
    )

    const headings = screen.getAllByRole('heading', { level: 3 })

    expect(headings.length).toBeGreaterThanOrEqual(3)
    expect(headings.map((heading) => heading.textContent)).toEqual(
      projects.map((project) => project.title),
    )
    expect(screen.getAllByRole('link', { name: /ver demo|repositorio/i }).length).toBe(4)
    expect(screen.getByText('React')).toBeTruthy()
    expect(screen.getByText('Destacado')).toBeTruthy()
  })

  it('muestra un mensaje cuando no hay proyectos', async () => {
    mockFetchRoutes({ 'data/projects.json': [] })

    render(<Projects />)

    await waitUntil(() =>
      Boolean(screen.queryByText('Todavía no hay proyectos publicados.')),
    )

    expect(screen.getByText('Todavía no hay proyectos publicados.')).toBeTruthy()
  })

  it('muestra el error y permite reintentar la carga', async () => {
    let calls = 0

    spyOn(globalThis, 'fetch').and.callFake(() => {
      calls += 1
      return calls === 1
        ? Promise.resolve(new Response('', { status: 500 }))
        : Promise.resolve(
            new Response(JSON.stringify(projects), {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            }),
          )
    })

    render(<Projects />)

    await waitUntil(() => Boolean(screen.queryByRole('alert')))

    const alert = screen.getByRole('alert')

    expect(alert.textContent).toContain('HTTP 500')

    fireEvent.click(within(alert).getByRole('button', { name: 'Reintentar' }))

    await waitUntil(
      () => screen.queryAllByRole('heading', { level: 3 }).length === projects.length,
    )

    expect(screen.queryByRole('alert')).toBeNull()
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(projects.length)
  })
})
