import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavbarElements = () => {
  const location=useLocation()
  const links=[
    { label: 'Dashboard',    path: '/'             },
    { label: 'Transactions', path: '/transactions' },
    { label: 'Budget',       path: '/budget'       },
    { label: 'Setting',     path: '/settings'     }
  ]
  console.log(useLocation())
  return (
   <>
   <div className='flex items-center ml-15 gap-4 hidden md:flex gap-8'>
    {
      links.map((link)=>(
        <Link key={link.path}
              to={link.path}
              className={`text-2xl font-bold transition-colors
                     ${location.pathname === link.path
                       ? 'text-white'
                       : 'text-blue-400 hover:text-yellow-200'}`}>{link.label}</Link>
      ))
    }
   </div>
   </>
  )
}

export default NavbarElements
