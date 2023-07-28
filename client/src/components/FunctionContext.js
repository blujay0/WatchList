import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeProvider'
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const FunctionContext = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const buttonStyle = { backgroundColor: '#001B18', margin: '15px 0', width: '16vh', height:'2.8vh', color: 'white', padding: 0 };
  // const buttonStyle = { marginLeft: "20px" , margin: '8px 0', color: 'white', padding: 0 };

  // const themeStyles = {
  //   backgroundColor: darkTheme ? '#008B8B' : '#FFFFFF'
  // }

  return (
    <>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <Button size="medium" sx={buttonStyle} variant="contained" onClick={toggleTheme}>
        <DarkModeIcon size="medium"/><b>Toggle Theme</b>
      </Button>
      {/* <div style={themeStyles}>Function Theme</div> */}
    </>
  )
}

export default FunctionContext;