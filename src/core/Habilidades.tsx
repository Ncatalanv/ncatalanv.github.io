import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Lenguajes',
    skills: ['Python', 'Java', 'SQL', 'Kotlin'],
  },
  {
    category: 'Bases de Datos',
    skills: ['MySQL', 'Oracle SQL', 'SQLite', 'PostgreSQL'],
  },
  {
    category: 'Data & Analytics',
    skills: ['Pandas', 'NumPy', 'Tableau', 'Data Engineering', 'Data Cleaning', 'Data Visualization'],
  },
  {
    category: 'Frameworks & Arquitectura',
    skills: ['Spring Boot', 'FastAPI', 'Next.js', 'React', 'Tailwind CSS', 'Patrón MVC'],
  },
  {
    category: 'Herramientas & DevOps',
    skills: ['Docker', 'Git/GitHub', 'Vercel', 'Cloudflare', 'PyAutoGUI'],
  },
];

function Habilidades() {
  return (
    <section id="habilidades" className="py-5 bg-light" data-testid="skills-section">
      <Container>
        <h2 className="text-center mb-5">Habilidades Técnicas</h2>
        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm" data-testid={`skill-category-${index}`}>
                <Card.Body>
                  <Card.Title className="h5 text-primary" data-testid={`skill-category-title-${index}`}>
                    {category.category}
                  </Card.Title>
                  <ul className="list-unstyled mb-0">
                    {category.skills.map((skill) => (
                      <li key={skill} className="mb-1" data-testid={`skill-item-${skill}`}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Habilidades;
