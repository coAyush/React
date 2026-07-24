import React from "react";

const Input = ({ className = "",maxlength,disabled,pattern, ...props}) => {
    return (
        <input
            {...props}
            maxLength={maxlength?maxlength:undefined}
            pattern={pattern?pattern:undefined} 
            disabled={disabled ? true : false}
            className={`border-2 border-amber-200 rounded-xl px-4 py-2 outline-none
      focus:border-pink-500 focus:ring-2 focus:ring-pink-200
      transition-all duration-200 ${className}`}
        />
    );
};

export default Input;