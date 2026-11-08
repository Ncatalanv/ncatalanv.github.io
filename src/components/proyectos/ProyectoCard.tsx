import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import type { ProjectCardProps } from '../../types';

function ProyectoCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-100 shadow-sm" data-testid={`project-card-${project.id}`}>
      <Card.Img variant="top" src={project.image} alt={project.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title data-testid={`project-title-${project.id}`}>{project.title}</Card.Title>
        <Card.Text data-testid={`project-description-${project.id}`}>
          {project.description}
        </Card.Text>
        <div className="mb-3" data-testid={`project-tech-${project.id}`}>
          {project.technologies.map((tech) => (
            <Badge bg="secondary" className="me-1 mb-1" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto d-flex gap-2">
          <Button
            variant="primary"
            size="sm"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`project-demo-${project.id}`}
          >
            Ver demo
          </Button>
          <Button
            variant="outline-dark"
            size="sm"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`project-repo-${project.id}`}
          >
            Repositorio
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProyectoCard;
