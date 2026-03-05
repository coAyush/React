import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Buttons from './Buttons'

const Layout = () => {
  return (
   <>
   <div className='flex flex-col min-h-screen bg-black'>
    <NavBar/>
    <Buttons/>
    <main className='flex flex-1 flex-col items-center justify-center overflow-hidden'>
        <Outlet/>
    </main>
    <Footer/>
   </div>
   </>
  )
}

export default Layout
