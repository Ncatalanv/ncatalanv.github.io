import type { ReactNode } from 'react'
import Section from '../components/ui/Section.tsx'

interface Skill {
  name: string
  icon: ReactNode
  hoverColor: string
}

const codeIcon = (
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  />
)

const skills: Skill[] = [
  {
    name: 'Python',
    icon: codeIcon,
    hoverColor: 'group-hover:text-blue-500 dark:group-hover:text-blue-400',
  },
  {
    name: 'Java',
    icon: codeIcon,
    hoverColor: 'group-hover:text-orange-500 dark:group-hover:text-orange-400',
  },
  {
    name: 'SQL',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    ),
    hoverColor: 'group-hover:text-teal-500 dark:group-hover:text-teal-400',
  },
  {
    name: 'IA',
    icon: (
      <>
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M9 13a4.5 4.5 0 0 0 3-4" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M12 13h4" />
        <path d="M12 18h6a2 2 0 0 1 2 2v1" />
        <path d="M12 8h8" />
        <path d="M16 8V5a2 2 0 0 1 2-2" />
      </>
    ),
    hoverColor: 'group-hover:text-purple-500 dark:group-hover:text-purple-400',
  },
  {
    name: 'Excel',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"
      />
    ),
    hoverColor: 'group-hover:text-green-500 dark:group-hover:text-green-400',
  },
]

function Habilidades() {
  return (
    <Section id="habilidades" title="Habilidades">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="group flex cursor-default flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            <svg
              className={`mb-3 h-10 w-10 text-slate-400 transition-colors dark:text-slate-500 ${skill.hoverColor}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {skill.icon}
            </svg>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Habilidades
