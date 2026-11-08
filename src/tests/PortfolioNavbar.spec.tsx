import PortfolioNavbar from '../components/navbar/PortfolioNavbar';
import { render, cleanup } from './test-utils';

describe('PortfolioNavbar component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render the brand name', () => {
    render(<PortfolioNavbar />);
    expect(document.body.textContent).toContain('NCatalánV');
  });

  it('should render navigation links to main sections', () => {
    render(<PortfolioNavbar />);

    expect(document.body.textContent).toContain('Sobre mí');
    expect(document.body.textContent).toContain('Proyectos');
    expect(document.body.textContent).toContain('Noticias');
    expect(document.body.textContent).toContain('Experiencia');
    expect(document.body.textContent).toContain('Educación');
    expect(document.body.textContent).toContain('Contacto');
  });
});
