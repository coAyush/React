import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from '../components/layout/AppLayout';
import Dashboard from '../pages/Dashboard';
import Management from '../pages/Management';
import Recheck from '../pages/Recheck';
import Department from '../pages/Department';
import Admission from '../pages/Admission';
import { dashboardLoader } from './loaders/dashboardLoader';
import { admissionPageLoader } from './loaders/admissionPageLoader';
const AppRoutes = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [{
      index: true,
      loader : dashboardLoader,
      element: <Dashboard />
    },
    {
      path: "department",
      element: <Department />
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
      element : <Admission />,
      loader : admissionPageLoader
    }
    ]
  }])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default AppRoutes