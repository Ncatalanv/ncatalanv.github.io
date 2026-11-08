import ProyectoCard from '../components/proyectos/ProyectoCard';
import { render, cleanup } from './test-utils';
import type { Project } from '../types';

describe('ProyectoCard component', () => {
  afterEach(() => {
    cleanup();
  });

  const mockProject: Project = {
    id: 99,
    title: 'Proyecto de prueba',
    description: 'Descripción de prueba para el componente Card.',
    technologies: ['React', 'TypeScript', 'Bootstrap'],
    image: 'https://placehold.co/600x400',
    demoUrl: 'https://demo.example.com',
    repoUrl: 'https://github.com/example/repo',
  };

  it('should render project title and description', () => {
    render(<ProyectoCard project={mockProject} />);

    expect(document.body.textContent).toContain(mockProject.title);
    expect(document.body.textContent).toContain(mockProject.description);
  });

  it('should render all technology badges', () => {
    render(<ProyectoCard project={mockProject} />);

    mockProject.technologies.forEach((tech) => {
      expect(document.body.textContent).toContain(tech);
    });
  });

  it('should render demo and repository links', () => {
    render(<ProyectoCard project={mockProject} />);

    const demoLink = document.querySelector('a[href="' + mockProject.demoUrl + '"]');
    const repoLink = document.querySelector('a[href="' + mockProject.repoUrl + '"]');

    expect(demoLink).not.toBeNull();
    expect(repoLink).not.toBeNull();
  });

  it('should display the project image', () => {
    render(<ProyectoCard project={mockProject} />);

    const img = document.querySelector('img[alt="' + mockProject.title + '"]');
    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toBe(mockProject.image);
  });
});
