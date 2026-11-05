import { fireEvent, render, screen } from '@testing-library/react'
import ThemeToggle from '../../src/components/ui/ThemeToggle.tsx'

describe('ThemeToggle', () => {
  it('activa el tema oscuro y lo persiste en localStorage', () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button')

    expect(button.getAttribute('aria-pressed')).toBe('false')

    fireEvent.click(button)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(button.getAttribute('aria-pressed')).toBe('true')
  })

  it('vuelve al tema claro cuando ya estaba en oscuro', () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')

    render(<ThemeToggle />)

    fireEvent.click(screen.getByRole('button'))

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('lee el tema guardado al montar el componente', () => {
    localStorage.setItem('theme', 'dark')

    render(<ThemeToggle />)

    expect(screen.getByRole('button').getAttribute('aria-pressed')).toBe('true')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
