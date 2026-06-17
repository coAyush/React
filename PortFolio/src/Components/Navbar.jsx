import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, easeOut } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
const Navbar = () => {
  return (
   <>
  <motion.nav
  className="fixed top-0 left-0 right-0 z-50 h-16 px-4 md:px-8
             flex items-center justify-between
             bg-white/90 dark:bg-black/90 backdrop-blur-xl
             border-b border-blue-100 dark:border-blue-950"
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ ease: 'easeOut', duration: 0.5 }}
>
  <Link to="/">Home</Link>
  <Link to="/skills">Skills</Link>
</motion.nav>
   </>
  )
}

export default Navbar
