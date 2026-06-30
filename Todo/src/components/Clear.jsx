import React from 'react'

const Clear = ({setTasks}) => {
    const handleClear=()=>{
        console.log("clear called");
        setTasks([]);
    }
  return (
    <>
        <button className=' text-base md:text-xl bg-red-400 text-white w-full max-w-[300px] h-8 md:h-14 font-bold rounded-xl active:scale-85' onClick={handleClear} >Clear</button>
    </>
  )
}

export default Clear