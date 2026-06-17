import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <main className="pt-8 ml-4-">
        {children}
    </main>
    </>
  )
}

export default Layout
