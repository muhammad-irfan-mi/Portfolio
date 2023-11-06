import { useState } from 'react'
import './App.css'
import FirstSec from './FirstSection/FirstSec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FirstSec />
    </>
  )
}

export default App
