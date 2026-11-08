import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import NoticiaCard from './NoticiaCard';
import type { NewsItem } from '../../types';

function Noticias() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetch('/data/news.json');
        if (!response.ok) {
          throw new Error('No se pudieron cargar las noticias');
        }
        const data: NewsItem[] = await response.json();
        setNews(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const sectionOneNews = news.filter((item) => item.section === 1);
  const sectionTwoNews = news.filter((item) => item.section === 2);

  if (loading) {
    return (
      <Container className="text-center py-5" data-testid="news-loading">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Cargando noticias...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5" data-testid="news-error">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <section id="noticias" className="py-5" data-testid="news-section">
      <Container>
        <h2 className="text-center mb-5">Últimas Noticias</h2>

        <div className="mb-5" data-testid="news-section-1">
          <h3 className="h4 mb-4 border-start border-4 border-primary ps-3">
            Certificaciones y Especialización
          </h3>
          <Row className="g-4">
            {sectionOneNews.map((item) => (
              <Col md={6} key={item.id}>
                <NoticiaCard item={item} />
              </Col>
            ))}
          </Row>
        </div>

        <div data-testid="news-section-2">
          <h3 className="h4 mb-4 border-start border-4 border-success ps-3">
            Proyectos y Desarrollo Full-Stack
          </h3>
          <Row className="g-4">
            {sectionTwoNews.map((item) => (
              <Col md={6} key={item.id}>
                <NoticiaCard item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Noticias;
