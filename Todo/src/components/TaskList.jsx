import React from 'react'
import TaskL from './TaskL'
import Button from './Button'

const TaskList = ({tasks}) => {

    return (
        <>
            {tasks.map((task, index) => (
                <TaskL task={task} key={index}/>
            ))}
        </>
    )
}

export default TaskList
