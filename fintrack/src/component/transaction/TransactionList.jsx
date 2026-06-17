import TransactionItem from './TransactionItem'

const TransactionList = ({ transactions,onDelete, onAdd }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 flex flex-col relative overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-semibold text-base">
          Recent Transactions
        </h2>
        <button className="text-indigo-400 text-xs font-medium 
                           hover:text-indigo-300 transition-colors">
          View all →
        </button>
      </div>

      {/* Transaction rows */}
      <div>
        {transactions.map(txn => (
          <TransactionItem
            key={txn.id}
            id={txn.id}
            icon={txn.icon}
            name={txn.name}
            category={txn.category}
            date={txn.date}
            amount={txn.amount}
            type={txn.type}
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* Add button at bottom */}
      <button onClick={onAdd} className="w-full mt-5 bg-indigo-600 hover:bg-indigo-500 
                         text-white text-sm font-semibold 
                         py-3 rounded-xl transition-colors active:bg-indigo-400 active:scale-95">
        + Add Transaction
      </button>

    </div>
  )
}

export default TransactionList