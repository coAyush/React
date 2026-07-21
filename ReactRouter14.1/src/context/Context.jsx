import React, { createContext, useContext } from 'react'

const Context = () => {
    export const Context=createContext();
    const proper={
        name : "Ayush",
        work :"COC"
    }
    export const useMyContext=()=>{
        const context=useContext(Context);
        return context;
    }
  return (
    <Context.Provider value={proper}></Context.Provider>
  )
}

export default Context
