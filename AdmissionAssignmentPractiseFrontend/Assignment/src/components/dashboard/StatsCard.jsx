const StatsCard = ({ title, count, icon: Icon, accent }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition p-6 flex items-center gap-4">
      <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${accent}`}>
        <Icon className="text-white w-6 h-6" />
      </div>
      <div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <p className="text-slate-800 text-2xl font-bold">{count}</p>
      </div>
    </div>
  )
}

export default StatsCard