import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import type { AboutMeProps } from '../../types';

function SobreMi({
  name,
  role,
  location,
  email,
  phone,
  photo,
  bio,
  linkedInUrl,
  githubUrl,
}: AboutMeProps) {
  const [formData, setFormData] = useState({ nombre: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name: fieldName, value } = e.target;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    setError('');
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.mensaje.trim()) {
      setError('Por favor completa todos los campos.');
      return;
    }
    setSubmitted(true);
    setFormData({ nombre: '', mensaje: '' });
  };

  return (
    <section id="sobre-mi" className="py-5" data-testid="sobre-mi-section">
      <Container>
        <Row className="align-items-center gy-4">
          <Col md={5} className="text-center">
            <Image
              src={photo}
              alt={`Foto profesional de ${name}`}
              roundedCircle
              fluid
              className="border border-3 border-primary"
              style={{ maxWidth: '280px' }}
              data-testid="about-photo"
            />
          </Col>
          <Col md={7}>
            <h1 className="display-5 fw-bold" data-testid="about-name">{name}</h1>
            <h2 className="h4 text-primary mb-3" data-testid="about-role">{role}</h2>
            <p className="text-muted mb-2" data-testid="about-location">
              <strong>Ubicación:</strong> {location}
            </p>
            <p className="text-muted mb-2" data-testid="about-email">
              <strong>Email:</strong> {email}
            </p>
            <p className="text-muted mb-4" data-testid="about-phone">
              <strong>Teléfono:</strong> {phone}
            </p>
            <p className="lead" data-testid="about-bio">{bio}</p>
            <div className="d-flex gap-3 mt-4">
              <Button
                variant="primary"
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="about-linkedin"
              >
                LinkedIn
              </Button>
              <Button
                variant="dark"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="about-github"
              >
                GitHub
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto">
            <h3 className="h4 mb-3" id="contacto">Envíame un mensaje</h3>
            {submitted && (
              <Alert variant="success" data-testid="contact-success">
                ¡Mensaje enviado correctamente!
              </Alert>
            )}
            {error && (
              <Alert variant="danger" data-testid="contact-error">
                {error}
              </Alert>
            )}
            <Form onSubmit={handleSubmit} data-testid="contact-form">
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  autoComplete="name"
                  data-testid="contact-name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  name="mensaje"
                  rows={4}
                  placeholder="Escribe tu mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  data-testid="contact-message"
                />
              </Form.Group>
              <Button variant="primary" type="submit" data-testid="contact-submit">
                Enviar mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SobreMi;
