import React from 'react'
import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <div className='flex h-[80px] w-[160px] mt-5 gap-1'>
      <BiError />
      <p className='text-2xl text-red-400 font-bold tracking-tight'>Error while loading the data</p>
    </div>
  )
}

export default Error
