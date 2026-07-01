import React from 'react'

const Step = ({step,setStep}) => {
  return (<>
   <div className='flex gap-1'>
     <span className='text-black text-xl font-bold'>Steps : </span>  <input type="text" className='h-10 w-50 rounded-2xl border-2 rounded-2xl border-black text-center' value={step} onChange={(event)=>{
        setStep(Number(event.target.value));
    }}></input>
    </div>
    </>
  )
}

export default Step