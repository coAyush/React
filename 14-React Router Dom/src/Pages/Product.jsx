import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
   <>
      <div className='flex bg-transparent absolute left-[45%] justify-center w-[150px] gap-6 items-center'>
        <Link to='mens'>Mens</Link>
        <Link to='womens'>Womens</Link>
      </div>
      <main className='absolute top-[30%] left-[45%]'>
        <Outlet/>
      </main>
   </>
  )
}

export default Product
