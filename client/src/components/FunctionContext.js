import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeProvider'

const FunctionContext = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    backgroundColor: darkTheme ? '#2f4f4f' : '#FFFFFF'
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  )
}

export default FunctionContext;