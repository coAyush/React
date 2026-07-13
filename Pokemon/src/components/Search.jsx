import React from 'react'

<<<<<<< HEAD
const Search = ({search,setSearch}) => {
    console.log(`inside search.jsx with value = ${search}`);
  return (
    <input value={search} className=' outline-none bg-white h-[60px] w-[350px] rounded-xl border-b-4 border-blue-500 focus:scale-110 focus:border-blue-400 text-xl font-medium text-black placeholder:text-black placeholder-text-xl' placeholder='Enter pokemon....' onChange={(event)=>setSearch(event.target.value)}>
    </input>
  )
}

export default Search
=======
const Search = () => {
  return (
    <input type='text' className='max-w-[440px] w-full h-[50px] bg-white rounded-2xl outline-none border-5 border-blue-700 text-xl text-black focus:scale-110 focus:border-blue-400 transition-all duration-150 placeholder:text-black placeholder:text-xl ' placeholder='Search Pokemon......'></input>
  )
}

export default Search
>>>>>>> fad49e8853f402846b24afe05228ae6f5adb7ce2
