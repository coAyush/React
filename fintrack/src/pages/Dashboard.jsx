import React from 'react'
import SummaryCards from '../component/dashboard/SummaryCards'
import TransactionList from '../component/transaction/TransactionList'
import Budget from '../component/budget/Budget'
import Stats from '../component/stats/Stats'
import TransactionForm from '../component/transaction/TransactionForm'
import { useState } from 'react'
import { useEffect } from 'react'
import { useTransactions } from '../context/TransactionContext'
const Dashboard = () => {
  
 const {transactions, totalIncome,totalExpense,totalBalance, addTransaction,deleteTransaction}=useTransactions()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [budgets, setBudgets] = useState([
    { id: 1, icon: '🍔', name: 'Food', spent: 3200, total: 5000 },
    { id: 2, icon: '🚌', name: 'Travel', spent: 1800, total: 2000 },
    { id: 3, icon: '🛍️', name: 'Shopping', spent: 2800, total: 3000 },
    { id: 4, icon: '⚡', name: 'Utilities', spent: 850, total: 1500 },
    { id: 5, icon: '🎮', name: 'Entertainment', spent: 200, total: 1000 },
  ])

   const summaryData = [
    { id: 1, variant: 'accent', label: 'Total Balance', amount: totalBalance.toString(), text: 'Updated just now', subtext: null },
    { id: 2, variant: 'dark', label: 'Total Income', amount: totalIncome.toString(), text: 'This month', subtext: "profit" },
    { id: 3, variant: 'dark', label: 'Total Expenses', amount: totalExpense.toString(), text: 'This month', subtext: "loss" }
  ]


  let len = transactions.length;
  return (
    <>
      <div className='mx-4 flex flex-col  gap-10'>
        <div className='mx-4 flex flex-col items-center'>
          <p className="text-3xl font-bold text-white">Dashboard</p>
          <p className='text-xl font-light text-gray-100'>Welcome back Ayush,Here's your June overview</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <SummaryCards data={summaryData} />
        </div>
        {/* Bottom Half — two column grid */}
        <div className="grid grid-cols-[1fr_400px] gap-6">
          <TransactionList
            transactions={transactions}
            onDelete={deleteTransaction}
            onAdd={() => setIsFormOpen(true)} />
          {isFormOpen && (
            <TransactionForm
              onSave={addTransaction}
              onClose={() => setIsFormOpen(false)}
            />
          )}
          <div className='flex flex-col gap-3'>
            <Budget budget={budgets} />
            <Stats
              totalIncome={totalIncome}
              totalBalance={totalBalance}
              totalExpense={totalExpense}
              transactionsNo={len} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard
