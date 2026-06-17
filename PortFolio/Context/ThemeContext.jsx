import React, { createContext, useContext, useState } from 'react'

const ThemeContext =createContext()
  const  ThemeProvider= ({children}) => {
    const[theme,setTheme]=useState('light')
    const toggleTheme=()=> {
        if(theme==='light')
            setTheme('dark')
        else
            setTheme('llight')
    }
  return (
   <>
     <ThemeContext.Provider value={{dark,light}}>
        {children}
     </ThemeContext.Provider>
   </>
  )
}

export const useTheme=()=>useContext(ThemeContext)

