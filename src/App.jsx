import { useState } from 'react'
import './App.css'
import About from './assets/AboutSec/About'
import FirstSec from './assets/FirstSection/FirstSec'
import Skill from './assets/Skill/Skill'
import Contact from './assets/Contact/Contact'
import Footer from './assets/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FirstSec />
    <About />
    <Skill />
    <Contact />
    <Footer />
    </>
  )
}

export default App
