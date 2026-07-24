import React from "react";

const Input = ({ className = "", ...props }) => {
    return (
        <input
            {...props}
            className={`border-2 border-amber-200 rounded-xl px-4 py-2 outline-none
      focus:border-pink-500 focus:ring-2 focus:ring-pink-200
      transition-all duration-200 ${className}`}
        />
    );
};

export default Input;