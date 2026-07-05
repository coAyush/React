import React from 'react'
import { useState } from 'react'
const Clear = ({setTasks}) => {
     console.log("Clear component rendered");
    const handleClear=()=>{
        setTasks((prev)=>{
            return [];
        })
    }
  return (
    <>
       <button   className="w-full max-w-[200px] bg-red-500 text-white font-bold text-base md:text-xl py-3 rounded-lg active:scale-95 transition-all duration-150"
 onClick={handleClear}>Clear</button>
    </>
  )
}

export default Clear
