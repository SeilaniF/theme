import React,{createContext,useState,useContext} from 'react'



const ThemeContext = createContext()


export const ThemeProvider = ({children}) => {
    const [theme, setTheme]= useState('light')

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }
  return (

<ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
</ThemeContext.Provider>

  )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme deve ser usado com o ThemeProvider")

    }
    return context
}
