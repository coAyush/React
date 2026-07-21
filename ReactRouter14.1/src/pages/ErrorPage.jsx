import React from 'react'
import { useNavigate, useRouteError } from 'react-router'
import Lottie from 'lottie-react'
const ErrorPage = () => {
  const errorPage = useRouteError();
  console.log(errorPage)
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <button className='h-8 w-12 text-white bg-red-500 font-bold rounded-2xl' onClick={handleBack} />
    </div>
  )
}

export default ErrorPage
