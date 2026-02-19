import React from 'react'
import {CornerDownRight} from 'lucide-react'
const Header = () => {
  return (
    <div>
      <nav className='flex justify-between items-center px-3 py-5'>
        <div className='bg-[#1a1a1a] rounded-full flex items-center justify-center w-45 h-10 text-white font-bold tracking-widest uppercase py-1 p-1 ml-7'>TARGET AUDIENCE</div>
        <div className='text-black font-bold tracking-widest flex '><CornerDownRight strokeWidth={1.25} absoluteStrokeWidth />DIGITAL BANKING PLATFORM</div>
      </nav>
    </div>
  )
}

export default Header