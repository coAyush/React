import React from 'react'
import { NavLink } from 'react-router-dom'
import navlinkStyles from '../../styles/navlinkStyles'

const Navbar = () => {
  return (
   <>
   <nav className='sticky top-0 z-50 flex items-center justify-between gap-1 h-16 md:h-20 w-full shadow-lg bg-gradient-to-r from-pink-500 via-pink-700 to-purple-600 backdrop-blur-sm '>
     <div className='text-white text-xl md:text-2xl font-bold tracking-wide'>
        YourLogo
      </div>
    <div className='flex items-center h-full'>
        <NavLink to="/" className={navlinkStyles}>Home</NavLink>
        <NavLink to="/department" className={navlinkStyles}>DepartMent</NavLink>
        <NavLink to="/recheck" className={navlinkStyles}>Recheck</NavLink>
        <NavLink to="/management" className={navlinkStyles}>Management</NavLink>
        <NavLink to="/about" className={navlinkStyles}>About</NavLink>
    </div>
   </nav>
   </>
  )
}

export default Navbar
