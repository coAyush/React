import React from 'react'

const Decrement = ({count,setCount,step}) => {
    const handleDecrement=()=>{
        count =(count-step<0)?0:count-step;
        setCount(count)
    }
  return (
 <button className='bg-blue-400 rounded-2xl outline-0 w-[155px] h-[60px] active:scale-85' onClick={handleDecrement}>Decrement</button>  )
}

export default Decrement