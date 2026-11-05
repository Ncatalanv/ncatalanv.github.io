import { render, screen } from '@testing-library/react'
import ProjectCard from '../../src/components/ProjectCard.tsx'
import type { Project } from '../../src/types/index.ts'

const project: Project = {
  id: 'proyecto-demo',
  title: 'Proyecto Demo',
  description: 'Una descripción breve del proyecto de prueba.',
  image: '/images/projects/portfolio.svg',
  imageAlt: 'Ilustración del proyecto demo',
  tech: ['React', 'TypeScript'],
  demoUrl: 'https://example.com/demo',
  repoUrl: 'https://github.com/example/repo',
  year: 2026,
  featured: true,
}

describe('ProjectCard', () => {
  it('muestra título, descripción, tecnologías e imagen', () => {
    render(<ProjectCard project={project} />)

    expect(screen.getByRole('heading', { name: project.title })).toBeTruthy()
    expect(screen.getByText(project.description)).toBeTruthy()
    expect(screen.getByText('React')).toBeTruthy()
    expect(screen.getByText('TypeScript')).toBeTruthy()
    expect(screen.getByAltText(project.imageAlt)).toBeTruthy()
    expect(screen.getByText('Destacado')).toBeTruthy()
  })

  it('genera enlaces seguros al repositorio y a la demo', () => {
    render(<ProjectCard project={project} />)

    const demo = screen.getByRole('link', { name: /ver demo/i })
    const repo = screen.getByRole('link', { name: /repositorio/i })

    expect(demo.getAttribute('href')).toBe(project.demoUrl!)
    expect(demo.getAttribute('rel')).toBe('noopener noreferrer')
    expect(repo.getAttribute('href')).toBe(project.repoUrl!)
    expect(repo.getAttribute('target')).toBe('_blank')
  })

  it('omite los enlaces que no están definidos', () => {
    const { demoUrl, repoUrl, ...projectWithoutLinks } = project

    render(<ProjectCard project={{ ...projectWithoutLinks, featured: false }} />)

    expect(demoUrl).toBeTruthy()
    expect(repoUrl).toBeTruthy()
    expect(screen.queryByRole('link', { name: /ver demo/i })).toBeNull()
    expect(screen.queryByRole('link', { name: /repositorio/i })).toBeNull()
  })
})
