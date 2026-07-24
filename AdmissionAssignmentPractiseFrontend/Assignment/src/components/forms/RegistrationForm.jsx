import React, { useState } from 'react'
import Input from '../../styles/style/Input'
import Select from '../../styles/style/Select';
import { ageCalculate } from '../../util/ageCalculate';

const RegistrationForm = ({ formData, setFormData }) => {


    const handleChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    }
    console.log(formData.dateOfBirth);

    const genders = ["Male", "Female", "Others"]
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
                        <Input name="rollNo" placeholder="John Doe" type="number" value={formData.rollNo} onChange={handleChange} />
                    </Field>
                </div>
                <div className='grid grid-cols-3 gap-2 p-3'>
                    <Field label="Gender">
                        <Select name="gender" genders={genders} value={formData.gender} onChange={handleChange} placeholder="Select Gender" />
                    </Field>
                    <Field label="Date of Birth">
                        <Input name="dateOfBirth" placeholder="John Doe" type="date" value={formData.dateOfBirth} onChange={handleChange} />
                    </Field>
                    <Field label="Age">
                        <Input name="age" type="number" value={ageCalculate(formData.dateOfBirth)} onChange={handleChange} disabled={true} />
                    </Field>
                </div>
                <div className='grid grid-cols-2 gap-2 p-3'>
                    <Field label="Phone No">
                        <Input name="phone" type="number" pattern="^[6-9][0-9]{9}" maxlength="10" placeholder="enter phone number" value={formData.phone} onChange={handleChange} />
                    </Field>
                    <Field label="Email">
                        <Input name="email" placeholder="John Doe@gnail.com" type="email" value={formData.email} onChange={handleChange} />
                    </Field>
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                    Academics
                </p>
                 <div className='grid grid-cols-2 gap-2 p-3'>
                    <Field label="School Name">
                        <Input name="schoolName" placeholder="bbhs" value={formData.schoolName} onChange={handleChange} />
                    </Field>
                    <Field label="Board Id">
                        <Input name="boardId"  type="number" value={formData.boardId} onChange={handleChange} />
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
