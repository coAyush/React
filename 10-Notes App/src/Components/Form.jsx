import { useState } from 'react'

const Form = ({addNote}) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const add = (event) => {
    event.preventDefault()

    if (!title.trim() || !desc.trim()) return

    addNote(title, desc)

    setTitle('')
    setDesc('')
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="font-extrabold tracking-wider text-blue-200 text-2xl">
        ADD NOTES...
      </h1>

      <form
        className="flex flex-col gap-6 justify-center p-4 w-2xl"
        onSubmit={add}
      >
        <input
          type="text"
          className="font-bold tracking-wide text-2xl text-white h-[65px] w-full rounded-[37px] p-2 border-zinc-400 border-4 outline-none bg-transparent"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />

        <textarea
          className="w-full h-32 bg-transparent font-medium text-white border-zinc-400 border-4 outline-none rounded-[22.5px] p-2"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Write..."
        />

        <div className="flex gap-1.5">
          <button
            type="submit"
            className="w-1/2 h-[45px] font-extrabold text-white text-xl bg-amber-300 rounded-[22.5px] active:bg-amber-100"
          >
            ADD NOTES
          </button>

          <button
            type="button"
            className="w-1/2 h-[45px] font-extrabold text-white text-xl bg-amber-300 rounded-[22.5px] active:bg-amber-100"
            onClick={() => {
              setTitle('')
              setDesc('')
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form