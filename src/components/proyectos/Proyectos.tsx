import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import ProyectoCard from './ProyectoCard';
import type { Project } from '../../types';

function Proyectos() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
          throw new Error('No se pudieron cargar los proyectos');
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5" data-testid="projects-loading">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Cargando proyectos...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5" data-testid="projects-error">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <section id="proyectos" className="py-5 bg-light" data-testid="projects-section">
      <Container>
        <h2 className="text-center mb-5">Proyectos Destacados</h2>
        <Row className="g-4">
          {projects.map((project) => (
            <Col md={6} lg={3} key={project.id}>
              <ProyectoCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Proyectos;
