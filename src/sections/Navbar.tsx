import { useState } from 'react'
import ThemeToggle from '../components/ui/ThemeToggle.tsx'
import { cn } from '../lib/cn.ts'

const navigationLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#noticias', label: 'Noticias' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#contacto', label: 'Contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-950/90">
      <nav
        aria-label="Navegación principal"
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="flex items-center justify-between py-4">
          <a
            href="#inicio"
            className="text-lg font-bold text-slate-900 dark:text-white"
            onClick={closeMenu}
          >
            NC<span className="text-indigo-500 dark:text-indigo-400">.</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-300 p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn('md:hidden', isOpen ? 'block pb-4' : 'hidden')}
        >
          <ul className="flex flex-col gap-1 text-base font-semibold text-slate-700 dark:text-slate-200">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
