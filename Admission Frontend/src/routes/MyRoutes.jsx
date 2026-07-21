import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import Dashboard from '../pages/Dashboard'
import Department from '../pages/Department'
import Recheck from '../pages/Recheck'
import Management from '../pages/Management'
import About from '../pages/About'

const MyRoutes = () => {
    const router= createBrowserRouter([
        {
            path : "/",
            element : <AppLayout  />,
            children : [{
              index : true,
              element : <Dashboard />
            },
            {
              path : "department",
              element : <Department />
            },
            {
              path : "recheck",
              element : <Recheck />
            },
            {
              path : "management",
              element : <Management />
            },
            {
              path : "about",
              element : <About />
            }
          ]
        }
    ])
  return (
    <RouterProvider router={router}> </RouterProvider>
  )
}

export default MyRoutes
