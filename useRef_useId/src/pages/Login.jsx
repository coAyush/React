import React, { useId, useRef } from 'react'

const Login = () => {
    const userName = useRef(null);
    const password = useRef(null);

    const pass = useRef(null);
    const id = useId();
    const handleSubmit = (event)=>{
        event.preventDefault();
        let obj={
            userName : userName.current.value,
            password : password.current.value,
        }
        console.log(obj);
    }
    return (
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center justify-center gap-2'>
            <div className='flex gap-1.5'>
                <label htmlFor={id + "userName"}>Username  :</label>
                <input type="text" ref={userName} />
            </div>
            <div className='flex gap-1.5'>
                <label htmlFor={id + "password"}>password  :</label>
                <input type="password" ref={password} />
            </div>
            <button type="submit" id ={id+"submit"}>Submit</button>
        </div>
        </form>
    )
}

export default Login
