import React from 'react'
import { useState } from 'react'
import { CATEGORIES, getCategoryByValue } from '../../constants/Category'
import { useTransactions } from '../../context/TransactionContext'
const TransactionForm = ({ onSave, onClose }) => {
  const [isExpense, setExpenseFlag] = useState(true)
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "food"
  })

  const handdleSubmit = () => {
    if (!form.name.trim) {
      alert("Enter a valid name")
      return
    }

    if (form.amount <= 0 || !form.amount) {
      alert("amount must be greater than 0 or must not be null")
      return
    }

    const categoryData = CATEGORIES.find((item) => (item.value === form.category))
    const newTransaction = {
      name: form.name.trim(),
      amount: Number(form.amount),
      type: isExpense ? 'expense' : 'income',
      category: isExpense ? form.category : 'income',
      icon: isExpense ? categoryData.icon : '💰',
      date: 'Today',
    }



    onSave(newTransaction)
    onClose()
  }
  return (
    <>

      {/* Blur Overlay */}
      <div
        className='fixed inset-0 bg-black/40 backdrop-blur-md z-40'
        onClick={onClose}
      />

      {/* Center Form */}
      <div className='fixed inset-0 flex items-center justify-center z-50'>

        <div
          className='bg-slate-800 flex flex-col gap-6 rounded-2xl w-full max-w-md p-4 shadow-2xl border border-slate-700'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex flex-row justify-between group'>
            <p className='text-white font-bold text-2xl'>Add Transaction</p>
            <button onClick={onClose} className='w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center  group-hover:opacity-100 hover:text-red-600'>X</button>
          </div>
          <div className='bg-slate-900 h-12 relative rounded-xl '>
            <div className={`rounded-xl absolute w-[calc(50%-4px)] top-1 bottom-1 bg-red-500 transition-all duration-300 ${isExpense ? 'left-1' : 'right-1'}`} />
            <div className='relative z-10 flex h-full p-2'>
              <button onClick={() => setExpenseFlag(true)} className='w-1/2 text-xl font-bold text-slate-500 active:text-red-900'>Expense</button>
              <button onClick={() => setExpenseFlag(false)} className='w-1/2 text-xl font-bold text-slate-500 active:text-red-900'>Income</button>
            </div>
          </div>
          <div className='flex flex-col gap-x-1 gap-y-0.5'>
            <p className='text-xl font-bold text-slate-400'>TRANSACTION NAME</p>
            <input type='text' placeholder="Lunch in Tandoori House at 3pm....." className='text-xl text-white font-medium rounded-xl h-12 bg-slate-900 outline-none p-2 border-2 border-slate-600 focus:border-amber-300 transition-colors placeholder:text-xl placeholder:text-slate-500'
              value={form.name}
              onChange={(event) => (
                setForm(prev => ({ ...prev, name: event.target.value })
                ))
              } />
          </div>
          <div className='flex flex-col gap-x-1 gap-y-0.5'>
            <p className='text-xl font-bold text-slate-400'>AMOUNT(&#x20B9;)</p>
            <div className='relative'>
              <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xl text-slate-400'>&#x20B9;</span>
              <input value={form.amount} type='text' placeholder="Enter the amount" className='text-xl text-white font-medium rounded-xl h-12 bg-slate-900 outline-none p-2 pl-10 border-2 border-slate-600 focus:border-amber-300 transition-colors placeholder:text-xl placeholder:text-slate-500'
                onChange={(event) => {
                  setForm(prev => ({ ...prev, amount: event.target.value }))
                }} />
            </div>
          </div>
          {isExpense && <>
            <div className='grid grid-cols-3 grid-rows-3 gap-4'>
              {
                CATEGORIES.map((category) => {
                  return <button className={`flex flex-col gap-y-0.5 items-center  justify-center rounded-xl outline-none border-2 text-slate-300 p-2 border-slate-700 
                transition-all ease-in-out duration-200
                hover:scale-120
                ${form.category === category.value ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400'
                      : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}
                    onClick={() => {
                      setForm(prev => ({ ...prev, category: category.value }))
                    }}
                    key={category.value}>
                    <p className='text-3xl'>{category.icon}</p>
                    <p>{category.value}</p>
                  </button>
                })
              }
            </div>
          </>
          }
          <div className='flex gap-y-2 gap-x-1.5 '>
            <button className='bg-slate-600 text-slate-400 rounded-xl w-[calc(50%-20px)] p-2 text-2xl active:bg-blue-300 focus:bg-blue-800 active:scale-95' onClick={onClose}>Cancel</button>
            <button className='bg-slate-600 text-slate-400 rounded-xl w-[calc(50%+20px)] p-2 text-2xl active:bg-blue-300 focus:bg-blue-800 active:scale-95' onClick={handdleSubmit}>{isExpense ? 'Save Transaction' : 'Save Income'}</button>
          </div>
        </div>
      </div>

    </>
  )
}
export default TransactionForm
