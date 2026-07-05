import React, { useEffect, useState } from 'react'

const UseEffectChallenge = () => {
    const[name,setName]=useState("Your name");
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log(count);
       document.querySelector("title").innerHTML=count
    },[count,name])
  return (
    <div className='flex flex-col justify-center items-center gap-2.5 min-h-screen bg-blue-600'>
      <p className='text-white text-3xl font-bold'>useEffect Challenge</p>
      <div className='flex flex-col gap-1 mt-4'>
        <p className='text-white text-xl font-medium'>Count : {count}</p>
        <button className='bg-green-300 w-[140px] h-[45px] text-white font-medium text-xl rounded-xl active:scale-90 transition-all duration-75' onClick={()=>{setCount((prev)=>prev+1)}}>Increment</button>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='text-white text-xl font-medium' id="nam"   style={{ color: name.length > 0 ? "yellow" : "black" }}
>Name  : {name} </p>
        <input type='text' value={name} onChange={(event)=>{setName(event.target.value)}} placeholder='Enter name ....' className='bg-white text-black w-[270px] h-[65px] text-2xl border-xl rounded-2xl border-blue-400 focus:scale-120 focus:border-blue-300 tansition-all duration-150 placeholder:text-2xl'/>
      </div>
    </div>
  )
}

export default UseEffectChallenge
