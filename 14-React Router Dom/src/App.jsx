import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import AboutUs from './Pages/AboutUs'
import Layout from './Components/Layout'
import Product from './Pages/Product'
import Womens from './Pages/Womens'
import Mens from './Pages/Mens'
import NotFound from './Pages/NotFound'
import CoursesPage from './Pages/CoursesPage'
import {ThemeContext} from './Context/ThemeContext'

const App = () => {
  const [Theme, setTheme] = useState('Dark')
  return (
    <>
      <ThemeContext.Provider value={{Theme,setTheme}}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/product' element={<Product />}>
              <Route path='mens' element={<Mens />} />
              <Route path='womens' element={<Womens />} />
            </Route>
            <Route path='/about/:id' element={<CoursesPage />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App
