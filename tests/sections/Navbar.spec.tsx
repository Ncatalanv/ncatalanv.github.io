import { fireEvent, render, screen, within } from '@testing-library/react'
import Navbar from '../../src/sections/Navbar.tsx'

describe('Navbar', () => {
  it('abre y cierra el menú móvil con aria-expanded', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', {
      name: 'Abrir menú de navegación',
    })
    const menu = document.getElementById('mobile-menu') as HTMLElement

    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(toggle.getAttribute('aria-controls')).toBe('mobile-menu')
    expect(menu.className).toContain('hidden')

    fireEvent.click(toggle)

    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(toggle.getAttribute('aria-label')).toBe('Cerrar menú de navegación')
    expect(menu.className).toContain('block')

    fireEvent.click(within(menu).getByRole('link', { name: 'Sobre mí' }))

    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(toggle.getAttribute('aria-label')).toBe('Abrir menú de navegación')
    expect(menu.className).toContain('hidden')
  })

  it('expone los enlaces de navegación principales', () => {
    render(<Navbar />)

    for (const label of [
      'Sobre mí',
      'Proyectos',
      'Noticias',
      'Experiencia',
      'Certificaciones',
      'Contacto',
    ]) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })
})
