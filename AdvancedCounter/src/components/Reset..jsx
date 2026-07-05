import React from 'react'

const Reset = ({setCount,setStep}) => {
    const handleClear=()=>{
        setCount(0);
        setStep(1);
    }
  return (
 <button className='bg-blue-400 rounded-2xl outline-0 w-[155px] h-[60px] active:scale-85' onClick={handleClear}>Reset</button>  )
  
}

export default Reset