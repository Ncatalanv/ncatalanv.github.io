import type { Profile } from '../types/index.ts'

export interface FooterProps {
  profile?: Profile | null
}

const fallbackSocials = [
  { label: 'GitHub', url: 'https://github.com/Ncatalanv' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ncatalan-data/' },
]

function Footer({ profile }: FooterProps) {
  const name = profile?.name ?? 'Nicolás Ignacio Catalán Valenzuela'
  const socials = profile?.socials ?? fallbackSocials

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-100 py-10 transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-semibold text-slate-900 dark:text-white">
            © {new Date().getFullYear()} {name}.
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Desarrollado con React, TypeScript y Tailwind CSS.
          </p>
        </div>

        <ul className="flex items-center gap-6" aria-label="Redes sociales">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-500 underline-offset-4 transition-colors hover:text-indigo-600 hover:underline dark:text-slate-400 dark:hover:text-indigo-400"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
