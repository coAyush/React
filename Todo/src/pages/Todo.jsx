import React, { useState } from 'react'
import Header from '../components/Header'
import Clock from '../components/Clock'
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import Clear from '../components/Clear';

const Todo = () => {
  const[tasks,setTasks]=useState([]);
  return (
    <>
    <div className='flex flex-col bg-blue-950 min-h-screen gap-5 items-center px-4 py-6'>
      <Header/>
      <Clock/>
      <AddTask setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
      <Clear  setTasks={setTasks}/>
    </div>
    </>
  )
}

export default Todo
