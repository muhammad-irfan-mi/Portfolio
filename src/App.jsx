import { useState } from 'react'
import './App.css'
import FirstSec from './FirstSection/FirstSec'
import About from './assets/AboutSec/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FirstSec />
    <About />
    </>
  )
}

export default App
