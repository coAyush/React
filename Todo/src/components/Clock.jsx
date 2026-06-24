import React, { useEffect, useState } from 'react'

const Clock = () => {

  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const dateTime = new Date().toLocaleDateString() + '-' + new Date().toLocaleTimeString();
      setDateTime(dateTime)
      console.log(dateTime);

    }, 1000);
    return ()=>clearInterval(timer)
  }
  )
  return (
    <>
      <div className='flex flex-row justify-center items-center gap-1'>
        <div className='text-3xl text-white font-medium'>
          {dateTime}
        </div>
      </div>
    </>
  )
}

export default Clock
