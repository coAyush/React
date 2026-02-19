import React from 'react'

const Card = ({imageUrl,label,number,description}) => {
  return (
    <div className='relative w-[300px] h-[570px] rounded-[3rem] rounded-t-[3rem] overflow-hidden'>
      <img src={imageUrl} alt={label} className='absolute inset-0 object-cover opacity-80 w-full h-full'></img>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className='mt-4 ml-6 relative z-10 w-10 h-10 rounded-full bg-white flex justify-center items-center font-extrabold '>{number}</div>
      <div className='relative z-10 h-full flex flex-col justify-between p-8'>
      <div className='flex flex-col gap-6 justify-center mt-35' >
      <p className='text-white leading-relaxed font-bold text-sm opacity-90'>{description}</p>
      </div>
      <div className="bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-full py-3 px-6 flex justify-between items-center cursor-pointer mb-9">
            <span className='font-bold text-[10px] uppercase tracking-widest'>{label}</span>
            <div className="bg-white/20 rounded-full p-1">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
