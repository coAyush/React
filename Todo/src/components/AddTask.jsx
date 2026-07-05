import React, { useEffect, useState } from 'react'
import Button from './Button'

const AddTask = ({setTasks}) => {
    const[task,setTask]=useState("")
    const addTask=()=>{
        if(task.trim()==="")
            return;
        setTasks((prev)=>{return [...prev,task]})
        setTask("")
    }
    return (
        <>
            <div className='flex w-full max-w-[600px] bg-white h-14 md:16 rounded-2xl mx-auto'>
            <input type='text' value={task} onChange={(event)=>setTask(event.target.value)} className='flex-1 rounded-l-2xl  px-4  border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 text-base md:text-xl' placeholder='enter the task'/>
            <Button onClick={addTask} text="Add Task" className='bg-blue-300 text-white font-medium text-xl px-5 md:px-8 rounded-r-2xl active:scale-90 active:bg-blue-500 transition duration-150'/>
            </div>
        </>
    )
}

export default AddTask
