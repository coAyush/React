import React, { useState } from 'react'
import Header from '../components/Header'
import Clock from '../components/Clock'
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

const Todo = () => {
  const[tasks,setTasks]=useState([]);
  return (
    <>
    <div className='flex flex-col bg-blue-950 min-h-screen gap-2.5'>
      <Header/>
      <Clock/>
      <AddTask setTasks={setTasks}/>
      <TaskList tasks={tasks}/>
    </div>
    </>
  )
}

export default Todo
