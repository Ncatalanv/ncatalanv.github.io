import { render, screen } from '@testing-library/react'

describe('entorno de pruebas', () => {
  it('renderiza un componente de React en el DOM', () => {
    render(<p>Hola Karma</p>)

    expect(screen.getByText('Hola Karma')).toBeTruthy()
  })
})
