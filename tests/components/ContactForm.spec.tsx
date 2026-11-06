import { fireEvent, render, screen } from '@testing-library/react'
import ContactForm from '../../src/components/ContactForm.tsx'
import { waitUntil } from '../helpers/waitUntil.ts'

function getForm(): HTMLFormElement {
  return screen.getByRole('button', { name: /enviar/i }).closest('form') as HTMLFormElement
}

function statusText(): string {
  return screen.getByRole('status').textContent ?? ''
}

describe('ContactForm', () => {
  it('muestra errores de validación al enviar vacío', () => {
    render(<ContactForm />)

    fireEvent.submit(getForm())

    expect(screen.getByText(/Ingresa tu nombre/)).toBeTruthy()
    expect(screen.getByText(/correo electrónico válido/)).toBeTruthy()
    expect(screen.getByText(/Cuéntame un poco más/)).toBeTruthy()
    expect(screen.getByLabelText('Nombre').getAttribute('aria-invalid')).toBe('true')
  })

  it('actualiza el estado de los campos al escribir', () => {
    render(<ContactForm />)

    const nameInput = screen.getByLabelText('Nombre') as HTMLInputElement
    fireEvent.change(nameInput, { target: { value: 'Nicolás' } })

    expect(nameInput.value).toBe('Nicolás')
  })

  it('envía los datos cuando el formulario es válido', async () => {
    const onSubmit = jasmine
      .createSpy('onSubmit')
      .and.callFake(() => Promise.resolve())

    render(<ContactForm onSubmit={onSubmit} />)

    fireEvent.change(screen.getByLabelText('Nombre'), {
      target: { value: 'Nicolás Catalán' },
    })
    fireEvent.change(screen.getByLabelText('Correo electrónico'), {
      target: { value: 'nicolas@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Mensaje'), {
      target: { value: 'Hola, me interesa colaborar en un proyecto.' },
    })

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))

    await waitUntil(() => statusText().includes('Gracias'))

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Nicolás Catalán',
      email: 'nicolas@example.com',
      message: 'Hola, me interesa colaborar en un proyecto.',
    })
    expect(statusText()).toContain('Gracias')
  })

  it('muestra un mensaje de error si el envío falla', async () => {
    const onSubmit = jasmine
      .createSpy('onSubmit')
      .and.callFake(() => Promise.reject(new Error('falló')))

    render(<ContactForm onSubmit={onSubmit} />)

    fireEvent.change(screen.getByLabelText('Nombre'), {
      target: { value: 'Nicolás' },
    })
    fireEvent.change(screen.getByLabelText('Correo electrónico'), {
      target: { value: 'nicolas@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Mensaje'), {
      target: { value: 'Mensaje suficientemente largo.' },
    })

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))

    await waitUntil(() => statusText().includes('No se pudo enviar'))

    expect(statusText()).toContain('No se pudo enviar')
  })
})
