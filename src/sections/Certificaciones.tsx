import Section from '../components/ui/Section.tsx'

const certifications = [
  { title: 'Google Data Analytics', date: '03 / 2024' },
  { title: 'PCEP - Certified Entry-Level Python Programmer', date: '05 / 2025' },
  {
    title: 'Microsoft Certified: Azure Data Fundamentals',
    date: '08 / 2025',
  },
  { title: 'Big Data Professional Certificate (BDPC)', date: '10 / 2025' },
]

function Certificaciones() {
  return (
    <Section id="certificaciones" title="Licencias y certificaciones">
      <ul className="flex flex-col divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
        {certifications.map((certification) => (
          <li
            key={certification.title}
            className="group flex flex-col justify-between px-2 py-5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover:text-indigo-500 dark:text-slate-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                {certification.title}
              </h3>
            </div>
            <span className="ml-8 mt-1 font-mono text-sm text-slate-500 dark:text-slate-400 sm:ml-0 sm:mt-0">
              {certification.date}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Certificaciones
