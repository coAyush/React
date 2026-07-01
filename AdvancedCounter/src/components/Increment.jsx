import React from 'react'

const Increment = ({count,setCount,step}) => {
    const handleIncrement=()=>{
        setCount((count+step>100)?(alert("It exceeded max value 100"),100):(count+step))

    }
  return (
    <button disabled={count>=100} className='bg-blue-400 rounded-2xl outline-0 w-[155px] h-[60px] active:scale-80 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-none' onClick={handleIncrement}>Increment</button>
  )
}

export default Increment