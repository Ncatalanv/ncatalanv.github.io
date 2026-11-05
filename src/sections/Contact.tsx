import type { Profile } from '../types/index.ts'
import ContactForm from '../components/ContactForm.tsx'
import Button from '../components/ui/Button.tsx'
import Section from '../components/ui/Section.tsx'

export interface ContactProps {
  profile: Profile | null
}

function Contact({ profile }: ContactProps) {
  return (
    <Section
      id="contacto"
      title="Contacto"
      subtitle="¿Tienes una propuesta, una duda o quieres trabajar juntos? Escríbeme."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            Estoy disponible para prácticas, proyectos freelance y
            colaboraciones académicas.
          </p>

          {profile ? (
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>
                <span className="font-semibold">Correo: </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <span className="font-semibold">Teléfono: </span>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <span className="font-semibold">Ubicación: </span>
                {profile.location}
              </li>
            </ul>
          ) : null}

          {profile ? (
            <ul className="flex flex-wrap gap-3 pt-2" aria-label="Redes sociales">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <Button
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                  >
                    {social.label}
                  </Button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}

export default Contact
