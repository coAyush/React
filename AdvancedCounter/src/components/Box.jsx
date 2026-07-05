import React from 'react'
import Header from './Header'
import Count from './Count'
import { useState } from 'react'
import Step from './Step'
import ButtonsGroup from './ButtonsGroup'

const Box = () => {
    const[count,setCount]=useState(0);
    const[step,setStep]=useState(1);
  return (
    <>
    <div className='h-6 md:h-[370px] w-9 md:w-[550px] bg-white flex flex-col rounded-xl p-7 gap-4'>
        <Header/>
        <Count count={count} />
        <Step step={step} setStep={setStep}/>
        <ButtonsGroup count={count} setCount = {setCount} step = {step} setStep={setStep} />
    </div>
    </>
  )
}

export default Box