import type { Project } from '../types/index.ts'
import Badge from './ui/Badge.tsx'
import Button from './ui/Button.tsx'
import Card from './ui/Card.tsx'

export interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card as="article" className="flex h-full flex-col overflow-hidden">
      <img
        src={project.image}
        alt={project.imageAlt}
        width={640}
        height={400}
        loading="lazy"
        decoding="async"
        className="h-44 w-full object-cover"
      />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          {project.featured ? (
            <Badge variant="accent">Destacado</Badge>
          ) : (
            <span className="sr-only">Proyecto personal</span>
          )}
        </div>

        <p className="flex-1 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <ul
          className="flex flex-wrap gap-2"
          aria-label={`Tecnologías utilizadas en ${project.title}`}
        >
          {project.tech.map((technology) => (
            <li key={technology}>
              <Badge variant="neutral">{technology}</Badge>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.demoUrl ? (
            <Button
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              aria-label={`Ver demo de ${project.title}`}
            >
              Ver demo
            </Button>
          ) : null}

          {project.repoUrl ? (
            <Button
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="secondary"
              aria-label={`Ver repositorio de ${project.title}`}
            >
              Repositorio
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
