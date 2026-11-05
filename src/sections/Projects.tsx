import { useJsonData } from '../hooks/useJsonData.ts'
import type { Project } from '../types/index.ts'
import ProjectCard from '../components/ProjectCard.tsx'
import { ErrorState, LoadingState } from '../components/ui/Feedback.tsx'
import Section from '../components/ui/Section.tsx'

function Projects() {
  const { data, loading, error, refetch } =
    useJsonData<Project[]>('data/projects.json')

  return (
    <Section
      id="proyectos"
      title="Proyectos"
      subtitle="Una selección de trabajos académicos y personales donde apliqué desarrollo web, datos y automatización."
    >
      {loading ? <LoadingState label="Cargando proyectos…" /> : null}

      {!loading && error ? (
        <ErrorState message={error} onRetry={refetch} />
      ) : null}

      {!loading && !error && data && data.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((project) => (
            <li key={project.id} className="h-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : null}

      {!loading && !error && data && data.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">
          Todavía no hay proyectos publicados.
        </p>
      ) : null}
    </Section>
  )
}

export default Projects
