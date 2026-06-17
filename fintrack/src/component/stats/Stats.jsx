import React from 'react'

const Stats = ({totalIncome,totalBalance,totalExpense,transactionsNo}) => {
    const today=new Date();
    const currentDay=today.getDate();
     const totalDaysInMonth = new Date(
      today.getFullYear(), 
      today.getMonth() + 1, 
      0
    ).getDate();

  return (
    <>
     <div className='bg-slate-800 flex flex-col gap-3 p-4 rounded-2xl'>
        <p className='text-white font-medium'>Quick Stats</p>
        <div className='grid grid-cols-2 grid-rows-2 gap-2'>
            <div className='bg-indigo-950 flex flex-col gap-1 rounded-2xl p-2'>
                <p className='text-indigo-200 font-medium'>Savings</p>
                <p className='text-green-500 font-bold'>{(totalBalance/totalIncome)*100}</p>
            </div>
           <div className='bg-indigo-950 flex flex-col gap-1 rounded-2xl p-2'>
                <p className='text-indigo-200 font-medium'>Transactions</p>
                <p className='text-white font-bold'>{transactionsNo}</p>
            </div>
            <div className='bg-indigo-950 flex flex-col gap-1 rounded-2xl p-2'>
                <p className='text-indigo-200 font-medium'>Avg Day</p>
                <p className='text-red-600 font-bold'>&#8377;683</p>
            </div>
            <div className='bg-indigo-950 flex flex-col gap-1 rounded-2xl p-2'>
                <p className='text-indigo-200 font-medium'>Days Left</p>
                <p className='text-white font-bold'>{totalDaysInMonth - currentDay}</p>
            </div>
        </div>
     </div>
    </>
  )
}

export default Stats
