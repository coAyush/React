import React, { use, useContext } from 'react'
import { MyContext } from './Context';
const Home = () => {
    const {name,age} =useContext(MyContext);
  return (
    <>
    <div>Hi I'm {name} and my age is {age}</div>
    </>
  )
}

export default Home