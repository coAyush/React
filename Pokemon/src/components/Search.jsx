import React from 'react'

const Search = ({search,setSearch}) => {
    console.log(`inside search.jsx with value = ${search}`);
  return (
    <input value={search} className=' outline-none bg-white h-[60px] w-[350px] rounded-xl border-b-4 border-blue-500 focus:scale-110 focus:border-blue-400 text-xl font-medium text-black placeholder:text-black placeholder-text-xl' placeholder='Enter pokemon....' onChange={(event)=>setSearch(event.target.value)}>
    </input>
  )
}

export default Search
