import Card from 'react-bootstrap/Card';
import type { NewsCardProps } from '../../types';

function NoticiaCard({ item }: NewsCardProps) {
  const formattedDate = new Date(item.date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="h-100 border-0 shadow-sm" data-testid={`news-card-${item.id}`}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted" data-testid={`news-date-${item.id}`}>
          {formattedDate}
        </Card.Subtitle>
        <Card.Title data-testid={`news-title-${item.id}`}>{item.title}</Card.Title>
        <Card.Text data-testid={`news-content-${item.id}`}>{item.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NoticiaCard;
