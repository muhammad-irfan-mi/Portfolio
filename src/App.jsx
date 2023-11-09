import { useState } from 'react'
import './App.css'
import About from './assets/AboutSec/About'
import FirstSec from './assets/FirstSection/FirstSec'
import Skill from './assets/Skill/Skill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FirstSec />
    <About />
    <Skill />
    </>
  )
}

export default App
