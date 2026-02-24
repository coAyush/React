import { useState } from 'react'
import './index.css'
import Form from './Components/Form'
import Cards from './Components/Cards'

function App() {
  const [notes, setNotes] = useState([])
  const addNotes=(title,desc)=>{
    const newNote={
      id : Date.now(),
      title,
      desc
    }
    setNotes((prev)=>[...prev,newNote])
  }
  const deleteNote=(id)=> {
    setNotes((prev)=>prev.filter((note) => note.id !== id))
  }

  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] min-h-screen bg-gradient-to-b from-black to-zinc-900 h-screen w-screen '>
    <div className='flex flex-col justify-start items-center pt-4'>
      <Form addNote={addNotes}/>
      </div>
        <div className="hidden lg:inline w-px bg-white/40"></div>
      <Cards note={notes} onDelete={deleteNote}/>
      </div>
    </>
  )
}

export default App
