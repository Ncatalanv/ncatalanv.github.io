import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
}

const educationList: Education[] = [
  {
    id: 1,
    degree: 'Ingeniería en Informática',
    institution: 'Duoc UC',
    location: 'Santiago, Chile',
    period: 'Mar. 2025 - Esperado 2027',
    status: 'En curso',
  },
  {
    id: 2,
    degree: 'Licenciatura en Kinesiología',
    institution: 'Universidad Andrés Bello',
    location: 'Santiago, Chile',
    period: '2019 - 2023',
    status: 'Titulado',
  },
];

function Educacion() {
  return (
    <section id="educacion" className="py-5" data-testid="education-section">
      <Container>
        <h2 className="text-center mb-5">Educación</h2>
        <Row className="g-4 justify-content-center">
          {educationList.map((edu) => (
            <Col md={6} key={edu.id}>
              <Card className="h-100 text-center shadow-sm" data-testid={`education-card-${edu.id}`}>
                <Card.Body>
                  <Card.Title data-testid={`education-degree-${edu.id}`}>{edu.degree}</Card.Title>
                  <Card.Subtitle className="mb-2 text-primary" data-testid={`education-institution-${edu.id}`}>
                    {edu.institution}
                  </Card.Subtitle>
                  <Card.Text className="text-muted mb-1" data-testid={`education-location-${edu.id}`}>
                    {edu.location}
                  </Card.Text>
                  <Card.Text className="text-muted mb-1" data-testid={`education-period-${edu.id}`}>
                    {edu.period}
                  </Card.Text>
                  <Card.Text>
                    <span className="badge bg-success" data-testid={`education-status-${edu.id}`}>
                      {edu.status}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Educacion;
