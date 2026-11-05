import Section from '../components/ui/Section.tsx'

const education = [
  {
    title: 'Ingeniería en Informática',
    period: '2025 - En proceso',
    institution: 'Duoc UC',
    accent: 'indigo' as const,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
  },
  {
    title: 'Licenciado en Kinesiología',
    period: '2019 - 2023',
    institution: 'Universidad Andrés Bello',
    accent: 'teal' as const,
    icon: (
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
    ),
  },
]

const accentClasses = {
  indigo: {
    wrapper:
      'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
  },
  teal: {
    wrapper: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  },
} as const

function Educacion() {
  return (
    <Section id="educacion" title="Educación">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${accentClasses[item.accent].wrapper}`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
                  {item.period}
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              {item.institution}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Educacion
