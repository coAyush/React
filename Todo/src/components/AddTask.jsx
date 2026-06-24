import React, { useState } from 'react'
import Button from './Button'

const AddTask = ({setTasks}) => {
    const[task,setTask]=useState("")
    const addTask=()=>{
        if(task.trim==="")
            return;
        setTasks((prev)=>{return [...prev,task]})
        setTask("")
    }
    return (
        <>
            <div className='flex justify-between w-4/5 h-10 md:w-95px bg-white'>
            <input type='text' value={task} onChange={(event)=>setTask(event.target.value)} className='h-full rounded-2xl' placeholder='enter the task'/>
            <Button onClick={addTask} text="Add Task" className='bg-blue-300 text-white font-medium text-xl'/>
            </div>
        </>
    )
}

export default AddTask
