
import { Nav } from './components/Nav'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { Section } from './components/Section'


import { Contacto } from './components/Contacto'
import { Portafolio } from './components/Portafolio'
import { WhatsApp } from './components/WhatsApp'

import './styles.css'

function App() {

  return (
    <>
      <Nav />
      <Main />
      <Section />
      <Portafolio />
      <Contacto />
      <WhatsApp />
      <Footer />
    </>
  )
}

export default App
