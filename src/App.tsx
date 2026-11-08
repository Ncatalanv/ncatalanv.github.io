import PortfolioNavbar from './components/navbar/PortfolioNavbar';
import SobreMi from './components/sobre-mi/SobreMi';
import Proyectos from './components/proyectos/Proyectos';
import Noticias from './components/noticias/Noticias';
import Experiencia from './core/Experiencia';
import Educacion from './core/Educacion';
import Habilidades from './core/Habilidades';
import Certificaciones from './core/Certificaciones';
import Footer from './components/footer/Footer';
import profilePhoto from './assets/polar.jpg';

function App() {
  return (
    <>
      <PortfolioNavbar />
      <main>
        <SobreMi
          name="Nicolás Ignacio Catalán Valenzuela"
          role="Desarrollador de Software & Analista de Datos"
          location="Santiago, Chile"
          email="ncatalan111@gmail.com"
          phone="+56 (9) 8166 1868"
          photo={profilePhoto}
          bio="Ingeniero en Informática en formación con background en Kinesiología. Apasionado por el desarrollo full-stack, la automatización de procesos (RPA) y el análisis de datos. Cuento con experiencia práctica construyendo dashboards financieros, portales corporativos y bots contenerizados, combinando tecnologías como React, Spring Boot, FastAPI, Python y Docker."
          linkedInUrl="https://www.linkedin.com/in/ncatalan-data/"
          githubUrl="https://github.com/Ncatalanv"
        />
        <Proyectos />
        <Noticias />
        <Experiencia />
        <Educacion />
        <Habilidades />
        <Certificaciones />
      </main>
      <Footer
        email="ncatalan111@gmail.com"
        phone="+56 (9) 8166 1868"
        linkedInUrl="https://www.linkedin.com/in/ncatalan-data/"
        githubUrl="https://github.com/Ncatalanv"
      />
    </>
  );
}

export default App;
