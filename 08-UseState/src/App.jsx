import { useState } from 'react'
import './App.css'
import './index.css'
function App() {
  const [count, setCount] = useState({name:"Ayush", Class:12})
   const setIncrease=()=>{
    setCount(prev=>({...prev,Class :Number(prev.Class+1)}));
   }
    const setDecrease=()=>{
   setCount(prev=>({...prev,Class :Number(prev.Class-1)}));
   }
  return (
    <>
    <div className='flex flex-col'>
      <h1 className='bg-pink-300 text-4xl text-white text-[299px] font-bold tracking-tighter flex items-center justify-center px-5 py-1.5 h-[300px] min-w-62.5 rounded-b-md'>{count.name}:{count.Class}</h1>
      <div className='flex gap-1.5 mt-4'>
        <button className='bg-gray-400 text-4xl w-[154px] flex justify-center items-center font-bold tracking-tighter rounded-2xl active:bg-amber-100' onMouseDown={setIncrease}>Increase</button>
        <button className='bg-gray-400 text-4xl w-[154px] flex justify-center items-center font-bold tracking-tighter rounded-2xl active:bg-amber-100' onMouseDown={setDecrease}>Decrease</button>
      </div>
    </div>
    </>
  )
}

export default App
