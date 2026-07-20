import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { MyContextProvider } from './components/Context'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <>
     <MyContextProvider>
      <Home />
     </MyContextProvider>
    </>
  )
}

export default App
