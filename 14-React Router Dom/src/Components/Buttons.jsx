import { useNavigate } from 'react-router-dom'

const Buttons = () => {
  const navigate = useNavigate()

  return (
    <div className="flex absolute right-1 w-[505px] bg-amber-400 py-2">
      <div className="flex gap-3">
        <button
          onClick={() => navigate(1)}
          className="px-4 py-2 rounded bg-white hover:bg-amber-200 active:scale-95 transition"
        >
          Forward
        </button>

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded bg-white hover:bg-amber-200 active:scale-95 transition"
        >
          Backward
        </button>

        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 rounded bg-white hover:bg-amber-200 active:scale-95 transition"
        >
          Home
        </button>
      </div>
    </div>
  )
}

export default Buttons