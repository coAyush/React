const TransactionItem = ({ id,icon, name, category, date, amount, type,onDelete }) => {

  // type drives the color and sign
  const isIncome = type === 'income'

  // each category gets its own background color for the icon box
  const iconBg = {
    food:          'bg-red-500/15',
    income:        'bg-emerald-500/15',
    travel:        'bg-blue-500/15',
    shopping:      'bg-yellow-500/15',
    utilities:     'bg-purple-500/15',
    entertainment: 'bg-pink-500/15',
  }

  return (
    <div className="flex items-center justify-between py-3 
                    border-b border-slate-700/50 last:border-b-0 group">

      {/* Left — icon + name + category/date */}
      <div className="flex items-center gap-3">

        {/* Icon box */}
        <div className={`${iconBg[category] || 'bg-slate-700/50'} 
                        w-10 h-10 rounded-xl 
                        flex items-center justify-center text-lg`}>
          {icon}
        </div>

        {/* Text */}
        <div>
          <p className="text-white text-sm font-medium">{name}</p>
          <p className="text-slate-500 text-xs capitalize">
            {category} · {date}
          </p>
        </div>

      </div>

      {/* Right — amount */}
      <span className={`font-semibold text-sm 
                       ${isIncome ? 'text-emerald-400' : 'text-red-400'}`}>
        {isIncome ? '+ ' : '- '}₹{Number(amount).toLocaleString('en-IN')}
      </span>
      <button onClick={()=>onDelete(id)} className="bg-slate-600 hover:text-red-400 hover:bg-slate-500
                     opacity-0 group-hover:opacity-100
                     transition-all text-lg leading-none">X</button>
    </div>
  )
}

export default TransactionItem