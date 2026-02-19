import React from 'react'
import Card from './Card'
const Cards = () => {
  return (
    <>
      <div className='w-full min-h-[160px] ml-9 mt-12 grid grid-cols-3 gap-1.5'>
        <Card imageUrl='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        label="satisfied"
        number="1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptate."
        />
        <Card imageUrl='https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        label="underserved"
        number="2"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa sequi minus expedita necessitatibus, laboriosam nemo."
        />
        <Card imageUrl='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        label="moderate"
        number="3"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa sequi minus expedita necessitatibus, laboriosam"
        />
        
      </div>
    </>
  )
}

export default Cards
