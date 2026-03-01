import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
    const[count,setCount]=useState(0)
    const change=()=>{
         setCount(prev=>prev+1);
         console.log(count)    
         localStorage.setItem('Ayush','Ayush') 
    }
    useEffect(()=>{
      document.title = `Count: ${count}`;
    },[count])
  return (
    <>
    <div className='flex flex-col gap-1'>
    <p className='text-4xl tracking-wide font-extrabold text-blue-400 hover:scale-125'>{count}</p>
    <button className='bg-green-600 h-[75px] w-[150px] rounded-[32.5px] text-white text-2xl tracking-wide font-extrabold active:bg-green-400 mt-1 ml-2 p-2' onClick={change}>Increment</button>
    </div>
    </>
  )
}

export default App
