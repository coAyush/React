import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [dateTime, setDateTime] = useState("");
    useEffect(() => {
        const time=setInterval(() => {
            const date = new Date().toLocaleDateString();
            const time = new Date().toLocaleTimeString();
            setDateTime(date + "-" + time)
        }, 1000)

        return ()=>clearInterval(time)
    }, [])
    return (
        <>
          <div className='text-3xl text-white font-medium'>{dateTime}</div>
        </>
    )
}

export default Clock