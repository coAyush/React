import React, { useState } from 'react'

const RegistrationPage = () => {
    const [user, setUser] = useState({
        fName: "",
        lName: "",
        Address: "",
        age: 0,
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(user);
    }
    return (
        <>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='w-[500px] h-[600px] rounded-2xl outline-none border-4 bg-white shadow-lg border-black' >
                    <div className='flex flex-col items-center gap-2'>
                        <h2 className='text-red-400 font-bold mt-1 font-sans text-2xl'>Registration Form</h2>
                        <p className='text-xl font-medium'>
                            My name is {user.fName + " " + user.lName}. My age is {user.age} and i live at {user.Address}
                        </p>
                    </div>
                    <div className='flex flex-col gap-2 mt-8 ml-3.5'>
                        <div className='flex gap-3'>
                            <label className='text-2xl w-40 text-blue-200 font-bold'>First Name:</label>
                            <input type="text" maxLength={50} placeholder='enter name' name="fName" value={user.fName} onChange={handleChange} className='text-xl w-[120px] h-[40px] border-2 rounded-2xl outline-none border-blue-200 focus:scale-110 focus:border-blue-400 transition-all duration-150' />
                        </div>
                        <div className='flex gap-3'>
                            <label className='text-2xl w-40 text-blue-200 font-bold'>Last Name:</label>
                            <input type="text" maxLength={50} placeholder='enter name' name='lName' value={user.lName} onChange={handleChange} className='text-xl w-[120px] h-[40px] border-2 rounded-2xl outline-none border-blue-200 focus:scale-110 focus:border-blue-400 transition-all duration-150' />
                        </div>
                        <div className='flex gap-3'>
                            <label className='text-2xl w-40 text-blue-200 font-bold'>Address:</label>
                            <input type="text" maxLength={50} placeholder='enter name' name='Address' value={user.Address} onChange={handleChange} className='text-xl w-[120px] h-[40px] border-2 rounded-2xl outline-none border-blue-200 focus:scale-110 focus:border-blue-400 transition-all duration-150' />
                        </div>
                        <div className='flex gap-3'>
                            <label className='text-2xl w-40 text-blue-200 font-bold'>Age:</label>
                            <input type="number" placeholder='enter name' name='age' value={user.age} onChange={handleChange} className='text-xl w-[120px] h-[40px] border-2 rounded-2xl outline-none border-blue-200 focus:scale-110 focus:border-blue-400 transition-all duration-150' />
                        </div>
                    </div>
                    <div>
                        <button className='text-white bg-red-600 font-bold w-[125px] h-[55px] rounded-xl border-0 outline-none active:scale-90 active:bg-red-400' onClick={handleSubmit}> Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationPage
