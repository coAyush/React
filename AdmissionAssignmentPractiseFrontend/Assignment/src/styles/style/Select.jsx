import React from 'react'

const Select = ({ genders, value, onChange,name,placeholder }) => {

    return (
        <div className='rounded-2xl border-2  border-amber-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200
      transition-all duration-200'>
            <select 
            name={name}
            value={value || ""}
            onChange={onChange}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-700
        outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100
        transition-all duration-200 bg-white cursor-pointer">
            <option value="" disabled className='text-black text-xl'>{placeholder}</option>
                {
                    genders.map((gender, index) => (<option value={gender}> {gender}</option>))
                }
            </select>
        </div>
    )
}

export default Select
