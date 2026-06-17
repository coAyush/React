import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Skills from './Pages/Skills'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
      
    </div>
  )
}

export default App
