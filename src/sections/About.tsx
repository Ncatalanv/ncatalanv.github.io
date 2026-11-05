import type { Profile } from '../types/index.ts'
import Badge from '../components/ui/Badge.tsx'
import Section from '../components/ui/Section.tsx'

export interface AboutProps {
  profile: Profile | null
}

function About({ profile }: AboutProps) {
  if (!profile) return null

  return (
    <Section
      id="sobre-mi"
      title="Sobre mí"
      subtitle="Un poco de mi trayectoria y de lo que me interesa construir."
    >
      <div className="grid gap-10 md:grid-cols-3">
        <div className="space-y-4 text-slate-600 dark:text-slate-400 md:col-span-2">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
            Intereses
          </h3>
          <ul className="flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <li key={interest}>
                <Badge>{interest}</Badge>
              </li>
            ))}
          </ul>

          <h3 className="mb-2 mt-6 text-lg font-bold text-slate-900 dark:text-white">
            Ubicación
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            {profile.location}
          </p>
        </aside>
      </div>
    </Section>
  )
}

export default About
