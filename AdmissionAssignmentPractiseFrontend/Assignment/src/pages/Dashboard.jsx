import React from 'react'
import StatsCard from '../components/dashboard/StatsCard'
import AdmissionBarChart from '../components/charts/AdmissionBarChart'
import { useLoaderData } from 'react-router-dom'
import { FaUserGraduate, FaUniversity, FaClipboardCheck } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import ManagementQuotaBarChart from '../components/charts/ManagementQuotaBarChart';


const Dashboard = () => {
  const { totalStudents, totalDepartments, totalRechecks, admissionAnalytics, managementTotalAmountReceived, quotaAnalytics } = useLoaderData();

  const stats = [
    { title: "Total Students", count: totalStudents, icon: <FaUserGraduate />, bgColor: "bg-blue-600" },
    { title: "Total Departments", count: totalDepartments, icon: <FaUniversity />, bgColor: "bg-purple-600" },
    { title: "Total Rechecks", count: totalRechecks, icon: <FaClipboardCheck />, bgColor: "bg-orange-500" },
    { title: "Total Quota Amount Received", count: managementTotalAmountReceived, icon: <RiMoneyRupeeCircleFill />, bgColor: "bg-green-300" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      <div className="h-[350px] mt-8 px-6 py-4 w-full rounded-xl bg-white shadow-2xl">
        <p className="text-3xl font-mono font-extrabold tracking-wider bg-gradient-to-r from-red-600 to-pink-700 bg-clip-text text-center text-transparent">
          Statistics
        </p>
        <div className="flex flex-wrap gap-4 px-6 py-5">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>

      <div className="flex-1 mt-8 px-6 py-4 w-full rounded-xl bg-white shadow-2xl">
        <p className="text-3xl font-mono font-extrabold tracking-wider bg-gradient-to-r from-red-600 to-pink-700 bg-clip-text text-center text-transparent mb-4">
          Analytics
        </p>
        <div className='flex gap-2.5 p-2'>
          <div className="px-6 flex-1">
            <AdmissionBarChart  data={admissionAnalytics} />
          </div>
          <div className="px-6 flex-1">
            <ManagementQuotaBarChart data={quotaAnalytics}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard