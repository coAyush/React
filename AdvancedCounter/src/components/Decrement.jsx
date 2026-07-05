import React from 'react'

const Decrement = ({count,setCount,step}) => {
    const handleDecrement=()=>{
        setCount((prev)=>(prev-step<0)?0:prev-step)
    }
  return (
 <button disabled={count<=0} className='bg-blue-400 rounded-2xl outline-0 w-[155px] h-[60px] active:scale-85 disabled:bg-gray-400 scale-none cursor-not-allowed' onClick={handleDecrement}>Decrement</button>  )
}

export default Decrement