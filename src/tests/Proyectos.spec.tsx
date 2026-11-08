import Proyectos from '../components/proyectos/Proyectos';
import { render, cleanup } from './test-utils';
import type { Project } from '../types';

describe('Proyectos component', () => {
  afterEach(() => {
    cleanup();
  });

  const mockProjects: Project[] = [
    {
      id: 1,
      title: 'Proyecto Uno',
      description: 'Primer proyecto de prueba.',
      technologies: ['React'],
      image: 'https://placehold.co/1',
      demoUrl: 'https://demo1.com',
      repoUrl: 'https://github.com/1',
    },
    {
      id: 2,
      title: 'Proyecto Dos',
      description: 'Segundo proyecto de prueba.',
      technologies: ['Node'],
      image: 'https://placehold.co/2',
      demoUrl: 'https://demo2.com',
      repoUrl: 'https://github.com/2',
    },
    {
      id: 3,
      title: 'Proyecto Tres',
      description: 'Tercer proyecto de prueba.',
      technologies: ['Python'],
      image: 'https://placehold.co/3',
      demoUrl: 'https://demo3.com',
      repoUrl: 'https://github.com/3',
    },
  ];

  function mockFetch(responseData: unknown, ok = true) {
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(
        new Response(JSON.stringify(responseData), {
          status: ok ? 200 : 500,
          statusText: ok ? 'OK' : 'Internal Server Error',
          headers: { 'Content-Type': 'application/json' },
        })
      )
    );
  }

  it('should show loading state before data arrives', () => {
    mockFetch(mockProjects);
    render(<Proyectos />);

    const loading = document.querySelector('[data-testid="projects-loading"]');
    expect(loading).not.toBeNull();
  });

  it('should render projects fetched from JSON', async () => {
    mockFetch(mockProjects);
    render(<Proyectos />);

    await new Promise((resolve) => setTimeout(resolve, 50));

    const section = document.querySelector('[data-testid="projects-section"]');
    expect(section).not.toBeNull();

    mockProjects.forEach((project) => {
      expect(document.body.textContent).toContain(project.title);
    });
  });

  it('should display an error message when fetch fails', async () => {
    mockFetch([], false);
    render(<Proyectos />);

    await new Promise((resolve) => setTimeout(resolve, 50));

    const error = document.querySelector('[data-testid="projects-error"]');
    expect(error).not.toBeNull();
  });
});
