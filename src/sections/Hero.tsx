import type { Profile } from '../types/index.ts'
import Button from '../components/ui/Button.tsx'
import { ErrorState, LoadingState } from '../components/ui/Feedback.tsx'

export interface HeroProps {
  profile: Profile | null
  loading: boolean
  error: string | null
  onRetry: () => void
}

function Hero({ profile, loading, error, onRetry }: HeroProps) {
  return (
    <section
      id="inicio"
      className="scroll-mt-24 bg-gradient-to-b from-slate-100 to-slate-50 py-16 transition-colors dark:from-slate-900 dark:to-slate-950 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        {loading ? <LoadingState label="Cargando presentación…" /> : null}

        {!loading && error ? (
          <ErrorState message={error} onRetry={onRetry} />
        ) : null}

        {!loading && !error && profile ? (
          <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <span className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
                {profile.role}
              </span>

              <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                {profile.name}
              </h1>

              <p className="mb-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {profile.tagline}
              </p>

              <p className="mx-auto mb-8 max-w-xl text-slate-600 dark:text-slate-400 md:mx-0">
                {profile.bio}
              </p>

              <div className="mb-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <Button href="#proyectos">Ver proyectos</Button>
                <Button href="#contacto" variant="secondary">
                  Contactar
                </Button>
              </div>

              <ul className="flex flex-col items-center gap-2 text-sm text-slate-600 dark:text-slate-400 md:items-start">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                    className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {profile.phone}
                  </a>
                </li>
                <li>{profile.location}</li>
              </ul>

              <ul
                className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start"
                aria-label="Redes sociales"
              >
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <Button
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="ghost"
                      size="sm"
                      aria-label={`Perfil de ${social.label} de ${profile.name}`}
                    >
                      {social.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0">
              <div className="relative h-48 w-48 rounded-full bg-gradient-to-tr from-indigo-500 to-teal-400 p-1 shadow-xl sm:h-60 sm:w-60">
                <img
                  src={profile.avatar}
                  alt={`Fotografía de ${profile.name}`}
                  width={240}
                  height={240}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="mx-auto h-full w-full rounded-full bg-slate-200 object-cover dark:bg-slate-800"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Hero
