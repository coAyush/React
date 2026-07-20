import React, { useState } from 'react'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Pages2/Home'
import ContactUs from './Pages2/ContactUs'
import AboutUs from './Pages2/AboutUs'


const App = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <Home/>
  },
  {
    path : "/Contact Us",
    element : <ContactUs/>
  },
{
  path :"/About Us",
  element : <AboutUs/>
}])
  return (
    <RouterProvider router={router}></RouterProvider>
    /* <>
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
     </>*/
  )
}

export default App
