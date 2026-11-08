import Button from 'react-bootstrap/Button';
import { useTheme } from '../../hooks/useTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={theme === 'light' ? 'outline-dark' : 'outline-light'}
      size="sm"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      data-testid="theme-toggle"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}

export default ThemeToggle;
