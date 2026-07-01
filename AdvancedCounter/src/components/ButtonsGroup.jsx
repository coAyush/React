import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Reset from './Reset.'

const ButtonsGroup = ({count,setCount,step,setStep}) => {
  return (
    <div className='grid grid-cols-3 gap-3 mt-6'>
        <Increment count={count} setCount={setCount} step={step}/>
        <Decrement count={count} setCount={setCount} step={step} />
        <Reset setCount={setCount} setStep={setStep} />
    </div>
  )
}

export default ButtonsGroup