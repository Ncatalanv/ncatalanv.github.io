//Importa módulo
import Footer from './sections/Footer.tsx'
import Header from './core/Header.tsx'
import Experiencia from './sections/Experiencia.tsx'
import Educacion from './sections/Educacion.tsx'
import Habilidades from './sections/Habilidades.tsx'
import Certificaciones from './sections/Certificaciones.tsx'

function App() {
  //Siempre react espera a que todo esté metido en un solo tag '<>'
  return (
    <>
      <Header />
      <main className="space-y-8 py-8">
        <Experiencia />
        <Educacion />
        <Habilidades />
        <Certificaciones />
      </main>
      <Footer />
    </>
  )
}

export default App
