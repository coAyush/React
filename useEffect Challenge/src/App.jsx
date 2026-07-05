import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import UseEffectChallenge from './pages/UseEffectChallenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseEffectChallenge/>
    </>
  )
}

export default App
