import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import profileIcon from '../assets/polar.jpg'
import ThemeToggle from '../components/ui/ThemeToggle.tsx'

function Header() {
  return (
    <header>
      <nav className="border-b border-slate-200 bg-white py-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold text-slate-800 dark:text-white">
              <a
                href="#cv"
                className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                Curriculum Vitae <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="#certificaciones"
                className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                Certificaciones <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="#contacto"
                className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                Contacto <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="bg-slate-50 py-20 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
        <div className="mx-auto flex max-w-5xl flex-col-reverse items-center justify-between gap-12 px-6 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <span className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:bg-indigo-950 dark:text-indigo-400">
              Computer Science Student
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-indigo-600 dark:text-indigo-400">
                Nicolás Ignacio Catalán Valenzuela
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-slate-600 dark:text-slate-400">
              Email: ncatalan111@gmail.com | Teléfono: +569 81661868 | Santiago,
              Chile
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="https://github.com/Ncatalanv"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-12 w-32 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:scale-105 sm:h-14 sm:w-36"
                aria-label="Perfil de GitHub de Nicolás Catalán"
              >
                <img src={githubIcon} alt="GitHub" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ncatalan-data/"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-12 w-32 overflow-hidden rounded-lg bg-white shadow-md transition-all hover:scale-105 sm:h-14 sm:w-36"
                aria-label="Perfil de LinkedIn de Nicolás Catalán"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div className="relative h-48 w-48 rounded-full bg-gradient-to-tr from-indigo-500 to-teal-400 p-1 shadow-xl sm:h-60 sm:w-60">
              <img
                src={profileIcon}
                alt="Fotografía de Nicolás Ignacio Catalán Valenzuela"
                className="mx-auto h-full w-full rounded-full bg-slate-200 object-cover dark:bg-slate-800"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
