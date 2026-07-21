import React from 'react'

const navlinkStyles = ({isActive}) => {
    console.log("Hi");
    
   return  `px-4 py-4 text-2xl text-center  rounded-md h-full transition-all duration-180 ${isActive ? `bg-purple-500 text-white`:'text-gray-100 hover:bg-pink-900 hover:h-full'}` ;
}

export default navlinkStyles
