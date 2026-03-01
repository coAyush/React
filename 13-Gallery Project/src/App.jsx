import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import axios from 'axios'
import Cards from './Components/Cards'
function App() {
  const [details,setDetails] = useState([])
  const[idx,setIdx]=useState(1)
  const[Loading,setLoading]=useState(false)
  const fetchData=async()=>{
    setLoading(true);
    try{
      let response=await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=9`)
    let {data}=response
    setDetails(data)
  }catch(error){
    console.error("Failed to fetch")
  }finally{
    setLoading(false)
  }
  }
  useEffect(()=>{
    fetchData()
  },[idx])
  const pageMovementF=()=>{
    setIdx(prev=>{
      if(prev==30)
        return prev
      return prev+1
    })
  }

  const pageMovementB=()=>{
    setIdx(prev=>{
      if(prev==1)
        return prev
      return prev-1
    })
  }
  return (
    <>
    <div className='flex flex-col justify-between gap-3'>
      <p className="font-extrabold font-sans text-3xl text-pink-700 tracking-wider">GALLERY APP</p>
      {Loading ? (
        <div className="flex flex-col items-center justify-center h-[400px]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-700 border-solid mb-4"></div>
          <p className="text-2xl font-bold text-pink-700">Loading Images...</p>
        </div>
      ) : (
        <>
          {details.length === 0 && (
            <p className='font-medium text-4xl text-red-500 tracking-wide'>Nothing to display</p>
          )}

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {details.map((card) => (
              <Cards key={card.id} l={card.download_url} />
            ))}
          </div>
        </>
      )}
        </div>
        <div className='flex w-full h-[95px] justify-center items-center gap-6'>
          <button disabled={Loading}className='bg-yellow-400 outline-none active:scale-95 w-[150px] h-[60px] rounded-[38px] tracking-tight font-bold text-white text-4xl' onClick={pageMovementB}>Prev</button>
          <p className='text-[40px]  font-bold tracking-tight text-amber-800'>Page:{idx}
          </p>
          <button disabled={Loading} className='bg-yellow-400 outline-none active:scale-95 w-[150px] h-[60px] rounded-[38px] tracking-tight font-bold text-white text-4xl' onClick={pageMovementF}>Next</button>
        </div>
    </>
  )
}

export default App
