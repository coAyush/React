import axios from 'axios';
import React, { useState } from 'react'
import './index.css'
const App = () => {
  const[Data,setData]=useState([]);
  const getDetails=async()=>{
     let response= await axios.get("https://picsum.photos/v2/list");
     setData(response.data)
    Data.forEach((d)=>{
      console.log(d.author);
    })
    
     
  }
  return (
    <div>
      <button className='bg-amber-500 h-[75px] w-[150px] rounded-[30.5px] text-2xl font-serif tracking-tighter text-white font-bold active:bg-amber-300' onClick={getDetails}>Click me</button>
    </div>
  )
}

export default App
