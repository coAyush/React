import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'


function App() {
  const[mode,setMode]=useState("white");
  const handleMode = (event)=>{
    const bg= mode=="white"?"black":"white";
    setMode(bg);
  }
  return (
    <>
    <div className={`${mode=="black"?'bg-black':'bg-white'} min-h-screen w-full flex flex-col gap-1`}>
      <div className={`${mode=="black"?'text-white':'text-black'} text-2xl font-bold `}>Hi today learning react </div>
      <button className='w-[140px] h-[56px] bg-green-500 rounded-xl text-white font-bold tracking-wide' onClick={handleMode}>{mode==="white"?"black":"white"}</button>
    </div>
    </>
  )
}

export default App
