import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from '../components/layout/AppLayout';
import Dashboard from '../pages/Dashboard';
import Management from '../pages/Management';
import Recheck from '../pages/Recheck';
import Department from '../pages/Department';
import Admission from '../pages/Admission';
const AppRoutes = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [{
      index: true,
      element: <Dashboard />
    },
    {
      path: "department",
      elementc: <Department />
    },
    {
      path: "management",
      element: <Management />
    },
    {
      path: "recheck",
      element: <Recheck />
    },
    {
      path : "admission",
      element : <Admission />
    }
    ]
  }])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default AppRoutes