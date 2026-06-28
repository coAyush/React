import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";

const TaskL = ({ task, setTask,tasks,indx}) => {
  const [completed, setCompleted] = useState(false);

  const handleCompleted = () => {
    setCompleted((prev) => !prev);
  };

  return (
    <div className='flex justify-between items-center px-6 rounded-2xl w-full max-w-[600px] h-12 md:h-16 mx-auto mt-4 bg-white text-black text-lg outline-none'>
       <span className={`text-base md:text-xl font-medium ${completed ? "line-through text-gray-500" : ""}`}>
        {task}
      </span>
      <div className='h-full rounded-full flex items-center gap-4 text-base md:text-3xl'>
         <button className="text-green-500 hover:scale-110 transition duration-200" onClick={handleCompleted}>
          <TiTick/>
        </button>
        <button className="text-red-500 hover:scale-110 transition duration-200" onClick={() => setTask(tasks.filter((tas,index)=>index!=indx))}>
          <MdDeleteForever />
        </button>
      </div>
    </div>
  )
}

export default TaskL
