import React from 'react'

const Search = () => {
  return (
    <input type='text' className='max-w-[440px] w-full h-[50px] bg-white rounded-2xl outline-none border-5 border-blue-700 text-xl text-black focus:scale-110 focus:border-blue-400 transition-all duration-150 placeholder:text-black placeholder:text-xl ' placeholder='Search Pokemon......'></input>
  )
}

export default Search