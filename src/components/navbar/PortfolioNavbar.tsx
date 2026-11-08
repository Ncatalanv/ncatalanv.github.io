import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeToggle from '../theme-toggle/ThemeToggle';

function PortfolioNavbar() {
  return (
    <Navbar expand="lg" className="bg-primary" data-testid="portfolio-navbar">
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold">
          NCatalánV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#sobre-mi" className="text-white">Sobre mí</Nav.Link>
            <Nav.Link href="#proyectos" className="text-white">Proyectos</Nav.Link>
            <Nav.Link href="#noticias" className="text-white">Noticias</Nav.Link>
            <Nav.Link href="#experiencia" className="text-white">Experiencia</Nav.Link>
            <Nav.Link href="#educacion" className="text-white">Educación</Nav.Link>
            <Nav.Link href="#contacto" className="text-white">Contacto</Nav.Link>
            <div className="ms-lg-2 mt-2 mt-lg-0">
              <ThemeToggle />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
