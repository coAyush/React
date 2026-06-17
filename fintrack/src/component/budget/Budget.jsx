import React from 'react'

const Budget = ({ budget }) => {
    const colors = {
    Food: 'bg-indigo-500',
    Travel: 'bg-amber-500',
    Shopping: 'bg-red-500',
    Utilities: 'bg-emerald-500',
    Entertainment: 'bg-cyan-500'
}
console.log(budget)
    return (
        <>
            <div className='flex flex-col gap-3 bg-slate-800 rounded-2xl p-6'>
                <div className='flex flex-row justify-between'>
                    <p className='text-2xl font-bold text-white'>Monthly Budget</p>
                    <button className='text-lg font-bold text-indigo-500'>Edit &rarr;</button>
                </div>
                <div className='flex flex-col gap-1'>
                    {
                        budget.map(b => {
                        
                            const percentage = (b.spent / b.total) * 100;
                            return(
                                <div key={b.id} className='flex flex-col gap-0.5'>
                                    <div className='flex flex-row justify-between' >
                                        <div className='flex flex-row gap-0.5'>
                                            <div>{b.icon}</div>
                                            <div className='text-white font-medium'>{b.name}</div>
                                        </div>
                                        <div>
                                            <div className='text-amber-100 font-medium'>
                                                {b.spent}/{b.total}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full h-4 bg-blend'>
                                        <div className={`${colors[b.name]} h-full rounded-full`} style={{width :`${percentage}%`}}></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Budget
