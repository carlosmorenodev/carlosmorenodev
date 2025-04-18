import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './components/Inicio'
/* import IndexSection from './components/IndexSection' */
import ProjectsSection from './components/ProjectsSection'
import Habilidades from './components/Habilidades'
import Sobremi from './components/Sobremi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Inicio />
      <Sobremi />
      {/* <Habilidades /> */}
      {/* <IndexSection /> */}
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
