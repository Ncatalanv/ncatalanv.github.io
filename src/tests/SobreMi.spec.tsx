import SobreMi from '../components/sobre-mi/SobreMi';
import { render, cleanup, fireEvent } from './test-utils';

describe('SobreMi component', () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    name: 'Nicolás Ignacio Catalán Valenzuela',
    role: 'Desarrollador de Software',
    location: 'Santiago, Chile',
    email: 'ncatalan111@gmail.com',
    phone: '+56 (9) 8166 1868',
    photo: 'https://placehold.co/150',
    bio: 'Ingeniero en Informática apasionado por los datos.',
    linkedInUrl: 'https://linkedin.com/in/test',
    githubUrl: 'https://github.com/test',
  };

  it('should render the name, role and bio from props', () => {
    render(<SobreMi {...defaultProps} />);

    expect(document.body.textContent).toContain(defaultProps.name);
    expect(document.body.textContent).toContain(defaultProps.role);
    expect(document.body.textContent).toContain(defaultProps.bio);
  });

  it('should render the professional photo with alt text', () => {
    render(<SobreMi {...defaultProps} />);
    const img = document.querySelector('img[alt="Foto profesional de ' + defaultProps.name + '"]');
    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toBe(defaultProps.photo);
  });

  it('should render contact links for LinkedIn and GitHub', () => {
    render(<SobreMi {...defaultProps} />);

    const linkedIn = document.querySelector('a[href="' + defaultProps.linkedInUrl + '"]');
    const github = document.querySelector('a[href="' + defaultProps.githubUrl + '"]');

    expect(linkedIn).not.toBeNull();
    expect(github).not.toBeNull();
  });

  it('should show validation error when submitting empty form', () => {
    render(<SobreMi {...defaultProps} />);
    const form = document.querySelector('[data-testid="contact-form"]') as HTMLFormElement;
    const submitButton = document.querySelector('[data-testid="contact-submit"]') as HTMLButtonElement;

    expect(form).not.toBeNull();
    expect(submitButton).not.toBeNull();

    fireEvent(form, 'submit');

    const errorAlert = document.querySelector('[data-testid="contact-error"]');
    expect(errorAlert).not.toBeNull();
    expect(errorAlert?.textContent).toContain('Por favor completa todos los campos');
  });

  it('should show success message after submitting valid form', () => {
    render(<SobreMi {...defaultProps} />);
    const nameInput = document.querySelector('[data-testid="contact-name"]') as HTMLInputElement;
    const messageInput = document.querySelector('[data-testid="contact-message"]') as HTMLTextAreaElement;
    const form = document.querySelector('[data-testid="contact-form"]') as HTMLFormElement;

    nameInput.value = 'Juan Pérez';
    fireEvent(nameInput, 'input');

    messageInput.value = 'Hola, me interesa tu perfil.';
    fireEvent(messageInput, 'input');

    fireEvent(form, 'submit');

    const successAlert = document.querySelector('[data-testid="contact-success"]');
    expect(successAlert).not.toBeNull();
    expect(successAlert?.textContent).toContain('Mensaje enviado correctamente');
  });
});
