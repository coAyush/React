import React from 'react'
import Counter from './Counter'

const App = () => {
  return (
    <>
    <Counter/>
    {localStorage.clear()}
    </>
  )
}

export default App
