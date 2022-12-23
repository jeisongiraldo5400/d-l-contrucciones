
import { Nav } from './components/Nav'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Section } from './components/Section'

import './styles.css'
import { Contacto } from './components/Contacto'
import { Portafolio } from './components/Portafolio'

function App() {

  return (
    <>
      <Nav />
      <Main />
      <Section />
      <Portafolio />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
