import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface FooterProps {
  email: string;
  phone: string;
  linkedInUrl: string;
  githubUrl: string;
}

function Footer({ email, phone, linkedInUrl, githubUrl }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-5" data-testid="portfolio-footer">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contacto</h5>
            <p className="mb-1">Email: <a href={`mailto:${email}`} className="text-white">{email}</a></p>
            <p className="mb-1">Teléfono: <a href={`tel:${phone}`} className="text-white">{phone}</a></p>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Redes Profesionales</h5>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-white me-3">LinkedIn</a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white">GitHub</a>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {currentYear} Nicolás Ignacio Catalán Valenzuela. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
