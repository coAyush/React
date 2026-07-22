import React from 'react'
import { NavLink } from 'react-router-dom'
import navlinkStyles from '../../styles/navlinkStyles'

const Navbar = () => {
  return (
   <nav className='sticky top-0 left-0 w-full h-8 md:h-15 flex items-center justify-between bg-gradient-to-r from-indigo-950 via-indigo-800 to-indigo-700 z-50 shadow-lg'>
    <div className='flex items-center justify-center px-6 h-10 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white text-lg font-semibold rounded-xl shadow-md'>Admission Portal</div> 
    <div className='flex h-14 ' >
      <NavLink to="/" className={navlinkStyles}>Home</NavLink>
      <NavLink to="/admission" className={navlinkStyles}>Admission</NavLink>
      <NavLink to="/department" className={navlinkStyles}>Department</NavLink>
      <NavLink to="/management" className={navlinkStyles}>Management</NavLink>
      <NavLink to="/recheck" className={navlinkStyles}>Recheck</NavLink>
    </div>
   </nav>
  )
}

export default Navbar