//Importa módulo
import './App.css'
import Footer from './core/Footer.tsx'
import Header from './core/Header.tsx'
import Experiencia from './core/Experiencia.tsx'
import Educacion from './core/Educacion.tsx'
import Habilidades from './core/Habilidades.tsx'
import Certificaciones from './core/Certificaciones.tsx'

function App() {
  //Siempre react espera a que todo esté metido en un solo tag '<>'
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16"></main>
      <Experiencia />
      <Educacion />
      <Habilidades />
      <Certificaciones />
      <Footer />
    </>
  )
}

export default App
