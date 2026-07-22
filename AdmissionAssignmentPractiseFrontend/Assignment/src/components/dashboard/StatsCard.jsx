import React from "react";

const StatsCard = ({ title, count, icon, bgColor }) => {
  return (
    <div className="flex-1 min-w-[220px] h-32 bg-white shadow-md rounded-2xl p-5 flex items-center gap-4 hover:shadow-xl hover:scale-105 cursor-pointer transition-all duration-200">
      <div className={`${bgColor} text-white text-2xl w-14 h-14 rounded-xl flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-slate-800">{count}</p>
      </div>
    </div>
  );
};

export default StatsCard;