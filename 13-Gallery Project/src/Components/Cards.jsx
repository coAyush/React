import React from 'react'
const Cards = ({l}) => {
  return (
    <>
       <div className='flex flex-col gap-1'>
         <div  className='w-[325px] h-[185px] border-white  border-4 rounded-[90.5px] outline-none hover:scale-105 transition-transform'>
              <a href={l} className='w-full h-full'>
                <img src={l} className='w-full h-full object-cover rounded-[90.5px]' alt="Nothing to show"></img>
              </a>
            </div>
         </div>
    </>
  )
}

export default Cards
