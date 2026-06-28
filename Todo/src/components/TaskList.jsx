import React from 'react'
import TaskL from './TaskL'
import Button from './Button'

const TaskList = ({tasks,setTasks}) => {

    return (
        <>
            {tasks.map((task, index) => (
                <TaskL task={task} key={index} setTask={setTasks} indx={index} tasks={tasks}/>
            ))}
        </>
    )
}

export default TaskList
