import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesPage = () => {
   const {id}= useParams()
  return (
   <>
   <h1>CoursesPage</h1>
   <h1> Course ={id} </h1>
   </>
  )
}

export default CoursesPage
