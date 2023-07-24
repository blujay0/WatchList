
import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

// custom hooks gives easy access to different values
export function useTheme() {
  // wraps useContext(ThemeContext) inside of its own hook called useTheme
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}


// this takes the place of the ThemeContext.Provider in App.js
export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  
  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}