import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import Toggle from './component/Toggle'

function App() {

  return (
    <>
    {/* Test Text */}
      <h1 style={{ color: 'red', fontSize: '32px', textAlign: 'center', marginTop: '20px' }}>
        React is Working!
      </h1>
    <Toggle />
    </>  )
}

export default App
