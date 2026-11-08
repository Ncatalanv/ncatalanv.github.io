import Noticias from '../components/noticias/Noticias';
import { render, cleanup } from './test-utils';
import type { NewsItem } from '../types';

describe('Noticias component', () => {
  afterEach(() => {
    cleanup();
  });

  const mockNews: NewsItem[] = [
    {
      id: 1,
      section: 1,
      title: 'Noticia sección 1',
      date: '2025-01-15',
      content: 'Contenido de la noticia de la sección 1.',
    },
    {
      id: 2,
      section: 2,
      title: 'Noticia sección 2',
      date: '2025-02-20',
      content: 'Contenido de la noticia de la sección 2.',
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
    mockFetch(mockNews);
    render(<Noticias />);

    const loading = document.querySelector('[data-testid="news-loading"]');
    expect(loading).not.toBeNull();
  });

  it('should render both news sections from JSON', async () => {
    mockFetch(mockNews);
    render(<Noticias />);

    await new Promise((resolve) => setTimeout(resolve, 50));

    const section1 = document.querySelector('[data-testid="news-section-1"]');
    const section2 = document.querySelector('[data-testid="news-section-2"]');

    expect(section1).not.toBeNull();
    expect(section2).not.toBeNull();

    expect(document.body.textContent).toContain(mockNews[0].title);
    expect(document.body.textContent).toContain(mockNews[1].title);
  });

  it('should display an error message when fetch fails', async () => {
    mockFetch([], false);
    render(<Noticias />);

    await new Promise((resolve) => setTimeout(resolve, 50));

    const error = document.querySelector('[data-testid="news-error"]');
    expect(error).not.toBeNull();
  });
});
