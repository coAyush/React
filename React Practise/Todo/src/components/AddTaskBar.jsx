import React from 'react'
import Button from './Button'

const AddTaskBar = () => {
  return (
    <>
     <div className='bg-white h-10 w-4/5 md:w-96 rounded-xl flex overflow-hidden'>
     <input className='flex-1 px-3 outline-none'/>
     <Button className="bg-sky-500">Add Task</Button>
     </div>
    </>
  )
}

export default AddTaskBar