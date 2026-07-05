import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import Clock from '../components/Clock'
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import Clear from '../components/Clear';

const Todo = () => {
  const[tasks,setTasks]=useState(()=>{
    if(JSON.parse(localStorage.getItem("task")))
      return JSON.parse(localStorage.getItem("task"));
    return [];
  });
    useEffect(()=>{
            localStorage.setItem("task",JSON.stringify(tasks))
        },[tasks])
  return (
    <>
    <div className='flex flex-col bg-blue-950 min-h-screen gap-5 items-center px-4 py-6'>
      <Header/>
      <Clock/>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
<<<<<<< HEAD
      <Clear  setTasks={setTasks}/>
=======
      <Clear setTasks={setTasks}/>
>>>>>>> refs/remotes/origin/main
    </div>
    </>
  )
}

export default Todo
