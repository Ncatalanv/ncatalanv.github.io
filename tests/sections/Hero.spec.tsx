import { fireEvent, render, screen } from '@testing-library/react'
import Hero from '../../src/sections/Hero.tsx'
import type { Profile } from '../../src/types/index.ts'

const profile: Profile = {
  name: 'Nicolás Catalán',
  role: 'Estudiante de Ingeniería en Informática',
  tagline: 'Desarrollo web, datos y automatización',
  bio: 'Biografía breve de prueba.',
  about: ['Párrafo de prueba.'],
  email: 'nicolas@example.com',
  phone: '+569 12345678',
  location: 'Santiago, Chile',
  avatar: '/images/profile/polar.jpg',
  interests: ['Desarrollo frontend'],
  socials: [{ label: 'GitHub', url: 'https://github.com/Ncatalanv' }],
}

describe('Hero', () => {
  it('muestra el estado de carga', () => {
    render(<Hero profile={null} loading error={null} onRetry={() => {}} />)

    expect(screen.getByRole('status').textContent).toContain('Cargando presentación')
  })

  it('muestra el error y permite reintentar', () => {
    const onRetry = jasmine.createSpy('onRetry')

    render(
      <Hero
        profile={null}
        loading={false}
        error="No se pudo cargar el perfil."
        onRetry={onRetry}
      />,
    )

    expect(screen.getByRole('alert').textContent).toContain('No se pudo cargar el perfil.')

    fireEvent.click(screen.getByRole('button', { name: 'Reintentar' }))

    expect(onRetry).toHaveBeenCalledTimes(1)
  })

  it('renderiza nombre, foto, acciones y datos de contacto', () => {
    render(<Hero profile={profile} loading={false} error={null} onRetry={() => {}} />)

    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeTruthy()
    expect(screen.getByAltText(`Fotografía de ${profile.name}`)).toBeTruthy()
    expect(screen.getByText(profile.role)).toBeTruthy()
    expect(screen.getByText(profile.tagline)).toBeTruthy()

    expect(
      screen.getByRole('link', { name: 'Ver proyectos' }).getAttribute('href'),
    ).toBe('#proyectos')
    expect(
      screen.getByRole('link', { name: 'Contactar' }).getAttribute('href'),
    ).toBe('#contacto')

    expect(screen.getByRole('link', { name: profile.email }).getAttribute('href')).toBe(
      `mailto:${profile.email}`,
    )
    expect(
      screen.getByRole('link', { name: profile.phone }).getAttribute('href'),
    ).toBe('tel:+56912345678')
    expect(screen.getByText(profile.location)).toBeTruthy()
    expect(
      screen.getByRole('link', { name: /Perfil de GitHub/ }).getAttribute('href'),
    ).toBe('https://github.com/Ncatalanv')
  })
})
