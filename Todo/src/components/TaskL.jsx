import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
const TaskL = ({task}) => {
  return (
    <div className='flex justify-between rounded-2xl bg-white text-black text-lg outline-none'>
      {task}
      <div className='h-full rounded-full flex g-1'>
        <TiTick/>
        <MdDeleteForever/>
      </div>
    </div>
  )
}

export default TaskL
