import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Home = () => {
  const { Theme, setTheme } = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: Theme=='Dark'?'#333' : '#fff', color: Theme === 'Dark' ? '#fff' : '#000'}}>
      <h1 className="text-white text-6xl mt-6 ml-6">
        Home
      </h1>
     <button onClick={() => setTheme(Theme === 'Dark' ? 'Light' : 'Dark')}>
        Toggle Theme
      </button>
    </div>
  )
}

export default Home
