import React, { useState } from 'react'
import Input from '../../styles/style/Input'
import Select from '../../styles/style/Select';

const RegistrationForm = ({ formData, setFormData }) => {


    const handleChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    }

    const genders=["Male","Female","Others"]
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-8">
            <section className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                    Personal Information
                </p>
                <div className='grid grid-cols-2 gap-2 p-3'>
                <Field label="Full Name">
                    <Input name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                </Field>
                <Field label="Roll No">
                    <Input name="name" placeholder="John Doe" type= "number" value={formData.rollNo} onChange={handleChange} />
                </Field>
                </div>
              <div className='grid grid-cols-3 gap-2 p-3'>
                <Field label="Gender">
                    <Select name="gender" genders={genders} value={formData.gender} onChange={handleChange}/ >
                </Field>
                <Field label="Roll No">
                    <Input name="name" placeholder="John Doe" type= "number" value={formData.rollNo} onChange={handleChange} />
                </Field>
                </div>
            </section>
        </div>
    )
}

const Field = ({ label, children, className = "" }) => (
    <div className={`flex flex-col gap-1.5 ${className}`}>
        <label className="text-sm font-medium text-slate-600">{label}</label>
        {children}
    </div>
);

export default RegistrationForm
