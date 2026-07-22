import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-white shadow-lg rounded-lg p-3 border border-slate-100">
      <p className="font-semibold text-slate-700">{label}</p>
      <p className="text-sm text-blue-600">
        Students: {payload[0].value}
      </p>
    </div>
  );
};

const AdmissionBarChart = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md p-6 w-full h-[350px]"
    >
      <p className="text-lg font-semibold text-slate-700 mb-4">
        Admissions by Year
      </p>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="year" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} allowDecimals={false} />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="totalStudents"
            fill="#2563eb"
            radius={[6, 6, 0, 0]}
            barSize={60}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AdmissionBarChart;