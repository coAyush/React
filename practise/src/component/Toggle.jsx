import React, { useState } from 'react';

const Toggle = () => {
    const [mode, setMode] = useState('light');

    // Fixed: Added the missing '>' for the arrow function
    const handleBtn = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            {/* Full screen wrapper that changes background color */}
            <div className={`${mode === 'light' ? 'bg-white' : 'bg-zinc-900'} h-screen w-screen flex items-center justify-center transition-colors duration-500`}>
                
                {/* Outer Toggle Pill - Added onClick, fixed tailwind classes, and gave it cursor-pointer */}
                <div 
                    onClick={handleBtn}
                    className={`${mode === 'light' ? 'bg-green-500' : 'bg-zinc-700'} w-20 h-10 rounded-full border-2 border-transparent relative cursor-pointer flex items-center p-1 transition-colors duration-300`}
                >
                    {/* Inner Sliding Circle - Uses translate-x to slide smoothly side-to-side */}
                    <div 
                        className={`${mode === 'light' ? 'bg-white' : 'bg-blue-300'} 
                            rounded-full w-7 h-7 transform transition-transform duration-300 ease-in-out
                            ${mode === 'light' ? 'translate-x-0' : 'translate-x-10'}
                        `}
                    />
                </div>
            </div>
        </>
    );
};

export default Toggle;