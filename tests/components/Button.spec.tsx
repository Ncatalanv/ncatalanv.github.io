import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../../src/components/ui/Button.tsx'

describe('Button', () => {
  it('renderiza el texto y aplica la variante primaria por defecto', () => {
    render(<Button>Enviar</Button>)

    const button = screen.getByRole('button', { name: 'Enviar' })

    expect(button.className).toContain('bg-indigo-600')
  })

  it('ejecuta el evento onClick', () => {
    const onClick = jasmine.createSpy('onClick')

    render(<Button onClick={onClick}>Guardar</Button>)
    fireEvent.click(screen.getByRole('button', { name: 'Guardar' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('aplica la variante secundaria cuando se solicita', () => {
    render(<Button variant="secondary">Cancelar</Button>)

    const button = screen.getByRole('button', { name: 'Cancelar' })

    expect(button.className).toContain('border-slate-300')
    expect(button.className).not.toContain('bg-indigo-600')
  })

  it('se renderiza como enlace y avisa que abre en otra pestaña', () => {
    render(
      <Button
        href="https://example.com/demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver demo
      </Button>,
    )

    const link = screen.getByRole('link', { name: /Ver demo/ })

    expect(link.getAttribute('href')).toBe('https://example.com/demo')
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    expect(link.textContent).toContain('abre en una nueva pestaña')
  })

  it('respeta el estado deshabilitado', () => {
    render(<Button disabled>Procesando</Button>)

    const button = screen.getByRole('button', { name: 'Procesando' }) as HTMLButtonElement

    expect(button.disabled).toBe(true)
  })
})
