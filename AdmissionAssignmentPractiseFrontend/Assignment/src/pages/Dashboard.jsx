import React from 'react'
import StatsCard from '../components/dashboard/StatsCard'
import { useLoaderData } from 'react-router-dom'
import { FaUserGraduate, FaUniversity, FaClipboardCheck } from "react-icons/fa";

const Dashboard = () => {
  const { totalStudents, totalDepartments, totalRechecks } = useLoaderData();

  const stats = [
    { title: "Total Students", count: totalStudents, icon: <FaUserGraduate />, bgColor: "bg-blue-600" },
    { title: "Total Departments", count: totalDepartments, icon: <FaUniversity />, bgColor: "bg-purple-600" },
    { title: "Total Rechecks", count: totalRechecks, icon: <FaClipboardCheck />, bgColor: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      <div className="flex-1 mt-8 px-6 py-4 w-full rounded-xl bg-white shadow-2xl">
        <p className="text-3xl font-mono font-extrabold tracking-wider bg-gradient-to-r from-red-600 to-pink-700 bg-clip-text text-center text-transparent">
          Statistics
        </p>
        <div className="flex flex-wrap gap-4 px-6 py-5">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>

      <div className="flex-1 mt-8 px-6 py-2 w-full rounded-xl bg-white shadow-2xl">
        <p className="text-3xl font-mono font-extrabold tracking-wider bg-gradient-to-r from-red-600 to-pink-700 bg-clip-text text-center text-transparent">
          Analytics
        </p>
      </div>
    </div>
  )
}

export default Dashboard