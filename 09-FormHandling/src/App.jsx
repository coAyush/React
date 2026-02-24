import React from 'react'
import { useState } from 'react';
import './index.css';
import { useFormState } from 'react-dom';
const App = () => {
  const [InputVal,setInputVal]=useState("")
  const ev = (event) => {
    event.preventDefault();
    console.log(InputVal);
    setInputVal('')
  }
  return (
   <>
   <form className='bg-gradient-to-b from-violet-900 to-violet-300 h-screen w-screen flex flex-col items-center justify-start pt-45' onSubmit={ev}>
    <input className='opacity-60 p-4 h-[125px] w-[455px] border-amber-300 rounded-md border-4 transition-all duration-300 hover:scale-105 hover:border-blue-400 text-white font-medium tracking-tight text-5xl outline-none' value={InputVal} onChange={(e)=>setInputVal(e.target.value)}></input>
    <p className='text-2xl font-mono font-medium text-white tracking-tighter'>{InputVal}</p>
    <div className='flex gap-1.5'>
      <button className='h-[55px] w-[98px] font-bold text-white text-xl bg-gray-400 rounded-[27.5px] mt-5 active:bg-blue-200' type='submit'>Submit</button>
      <button className='h-[55px] w-[98px] font-bold text-white text-xl bg-gray-400 rounded-[27.5px] mt-5 active:bg-blue-200' onClick={()=>{setInputVal('')}}>Clear</button>
    </div>
    </form>
    </>    
  )
}                                

export default App
