import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { useTheme } from './ThemeProvider';
import { ThemeContext } from './App.js';



const NotFound = () => {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? '#0C1728' : '#FFFFFF',
    color: darkTheme ? '#FFFFFF' : '#000000'
  }

  return (
    <div style={themeStyles}>
      <h1>404</h1>
      <h1>Uh oh! Page not found!</h1>
      <p>Go to the <Link to="/" style={{color: "#D595A4"}}>Homepage</Link>.</p>
    </div>
  )
}

export default NotFound;