import React from 'react'
import SummaryCard from './SummaryCard'

const SummaryCards = ({ data }) => {
    console.log(data)
    return (
        <>
        <div className='grid grid-cols-3 mb-8 gap-6'>
        {
            data.map(d=>(
                <SummaryCard key={d.id}
                variant={d.variant}
                label={d.label}
                amount={d.amount}
                text={d.text}
                subtext={d.subtext}/>
            ))
        }
        </div>
        </>
    )
}

export default SummaryCards
