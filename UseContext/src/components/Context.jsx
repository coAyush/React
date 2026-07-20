import React, { createContext } from 'react'

 export  const MyContext= createContext();
   let userName="Ayush";
   let age=24;

   export const MyContextProvider= ({children})=>{
     return (
     <MyContext.Provider value={{name:userName,age}}>
        {children}
     </MyContext.Provider>
  )
   }
const Context = () => { 
}

export default Context