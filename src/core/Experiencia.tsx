import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    period: 'Feb. 2024 - Presente',
    title: 'Desarrollador de Software / Asistente Administrativo',
    company: 'Comercializadora e Importadora INCORPLAS SPA',
    achievements: [
      'Diseñé y desarrollé un dashboard financiero y de inventario integrando React, Spring Boot y FastAPI, agilizando las operaciones administrativas diarias.',
      'Implementé una arquitectura de base de datos dual (MySQL y SQLite) para optimizar la gestión de existencias, reduciendo significativamente la latencia de las consultas del sistema.',
      'Automaticé los flujos de trabajo de ingreso de facturas y registros financieros mediante scripts, eliminando los errores derivados de la introducción manual de datos.',
    ],
    technologies: ['React', 'Spring Boot', 'FastAPI', 'MySQL', 'SQLite'],
  },
  {
    id: 2,
    period: 'Ago. 2023 - Presente',
    title: 'Operario de Local y Automatizador de Procesos',
    company: 'Comidas La Punta',
    achievements: [
      'Desarrollé un script de RPA utilizando Python y PyAutoGUI para automatizar el procesamiento de comprobantes de entrega en el sistema POS.',
      'Logré reducir el tiempo de procesamiento manual de datos en un 45%, mejorando la eficiencia operativa en horas de alta demanda.',
      'Gestioné tareas de atención al cliente y resolución de incidencias tecnológicas de manera ágil en un entorno dinámico.',
    ],
    technologies: ['Python', 'PyAutoGUI', 'RPA'],
  },
];

function Experiencia() {
  return (
    <section id="experiencia" className="py-5 bg-light" data-testid="experience-section">
      <Container>
        <h2 className="text-center mb-5">Experiencia Laboral</h2>
        <Row className="g-4">
          {experiences.map((exp) => (
            <Col md={6} key={exp.id}>
              <Card className="h-100 shadow-sm" data-testid={`experience-card-${exp.id}`}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted" data-testid={`experience-period-${exp.id}`}>
                    {exp.period}
                  </Card.Subtitle>
                  <Card.Title data-testid={`experience-title-${exp.id}`}>{exp.title}</Card.Title>
                  <Card.Subtitle className="mb-3 text-primary" data-testid={`experience-company-${exp.id}`}>
                    {exp.company}
                  </Card.Subtitle>
                  <ul className="ps-3">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="mb-2">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3" data-testid={`experience-tech-${exp.id}`}>
                    {exp.technologies.map((tech) => (
                      <Badge bg="info" className="me-1 mb-1" key={tech}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Experiencia;
