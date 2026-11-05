import { useJsonData } from './hooks/useJsonData.ts'
import type { Profile } from './types/index.ts'
import Navbar from './sections/Navbar.tsx'
import Hero from './sections/Hero.tsx'
import About from './sections/About.tsx'
import Projects from './sections/Projects.tsx'
import News from './sections/News.tsx'
import Experiencia from './sections/Experiencia.tsx'
import Educacion from './sections/Educacion.tsx'
import Habilidades from './sections/Habilidades.tsx'
import Certificaciones from './sections/Certificaciones.tsx'
import Contact from './sections/Contact.tsx'
import Footer from './sections/Footer.tsx'

function App() {
  const {
    data: profile,
    loading,
    error,
    refetch,
  } = useJsonData<Profile>('data/profile.json')

  return (
    <div className="min-h-svh bg-slate-50 text-slate-700 transition-colors dark:bg-slate-950 dark:text-slate-300">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="contenido" tabIndex={-1} className="focus:outline-none">
        <Hero
          profile={profile}
          loading={loading}
          error={error}
          onRetry={refetch}
        />
        <About profile={profile} />
        <Projects />
        <News />
        <Experiencia />
        <Educacion />
        <Habilidades />
        <Certificaciones />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />
    </div>
  )
}

export default App
