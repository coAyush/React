import React from 'react'

const Count = ({count}) => {
  return (
    <div className='text-xl font-medium text-center'>Count:<span className='text-blue-400 font-bold text-2xl mt-4'>{count}</span></div>
  )
}

export default Count