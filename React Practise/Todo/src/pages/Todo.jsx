import React from 'react'
import Heading from '../components/Heading'
import Clock from '../components/Clock'
import AddTaskBar from '../components/AddTaskBar'

const Todo = () => {
  return (
    <>
      <div className='flex flex-col gap-2 items-center p-2.5 bg-blue-950 min-h-screen'>
        <Heading/>
        <Clock/>
        <AddTaskBar/>
      </div>
    </>
  )
}

export default Todo