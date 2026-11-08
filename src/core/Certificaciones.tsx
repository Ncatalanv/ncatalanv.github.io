import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface Certification {
  id: number;
  name: string;
  date: string;
}

const certifications: Certification[] = [
  { id: 1, name: 'Google Data Analytics Certificate', date: 'March 2024' },
  { id: 2, name: 'PCEP - Certified Entry-Level Python Programmer', date: 'May 2025' },
  { id: 3, name: 'Microsoft Certified - Data Fundamentals', date: 'August 2025' },
  { id: 4, name: 'Microsoft Certified - Azure Fundamentals', date: 'August 2025' },
];

function Certificaciones() {
  return (
    <section id="certificaciones" className="py-5" data-testid="certifications-section">
      <Container>
        <h2 className="text-center mb-5">Certificaciones</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow-sm">
              <ListGroup variant="flush">
                {certifications.map((cert) => (
                  <ListGroup.Item
                    key={cert.id}
                    className="d-flex justify-content-between align-items-center"
                    data-testid={`certification-item-${cert.id}`}
                  >
                    <span data-testid={`certification-name-${cert.id}`}>{cert.name}</span>
                    <span
                      className="badge bg-primary rounded-pill"
                      data-testid={`certification-date-${cert.id}`}
                    >
                      {cert.date}
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Certificaciones;
