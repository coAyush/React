const Transactions = () => {

  const { transactions, deleteTransaction } = useTransactions()

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Transactions</h1>
        <p className="text-slate-400 text-sm mt-1">
          All your transactions — {transactions.length} total
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6">
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
            onDelete={deleteTransaction}
          />
        ))}
      </div>

    </div>
  )
}

export default Transactions