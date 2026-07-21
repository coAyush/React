import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AppLayout from './layout/AppLayout'
import { createBrowserRouter, RouterProvider, useLoaderData, useParams } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Movie from './pages/Movie'
import MovieDetails from './pages/MovieDetails'

export const getMoviesData = async () => {
  const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1?`);
  console.log(movies);
  const data = await movies.json();
  console.log(data);
  return data;
}

export const getMoviesDetailData = async ({params}) => {
  console.log(params);
  const movieData = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${params.id}`);
  const data=await movieData.json();
  console.log(data);
  return data;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "movie",
        element: <Movie />,
        loader: getMoviesData//asunc function 
      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
        loader: getMoviesDetailData//asunc function 
      },
      {
        path: "about",
        element: <About />
      },

      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

function App() {
  const param = useParams()

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
