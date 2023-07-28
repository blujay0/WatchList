import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ThemeContext } from './App.js';
import { useTheme } from './ThemeProvider';
import { SuccessContext } from '../context/SuccessContext.js';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Confetti from 'react-confetti'

const Logout = ({updateCustomer, setCustomer}) => { 
  const history = useHistory();
  const { success, setSuccess } = useContext(SuccessContext)

  const logoutStyle = { fontSize: '40px', color: 'black' };
  const buttonStyle = { margin: '8px 0', height:'5vh', width: 200, borderRadius: '30px', backgroundColor: 'yellow', padding: 0, position: "absolute", top: "25%", left:"50%", transform: "translate(-50%, -50%)" };

  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? '#154F49' : '#FFFFFF'
  }

//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   })

//   const handleWindowSize = () => {
//     setWindowSize({
//       width:window.innerWidth,
//       height: window.innerHeight,
//     });
//   }

//   useEffect(() => {
//     window.onresize = () => handleWindowSize();
//   }, [])

//   const handleClick = async () => {
    
//     fetch("/logout", {
//         method: "POST",
//     })
//     .then(resp => {
//       if(resp.ok) {
//         setCustomer(null);
//         setSuccess('Logged Out!')
//         history.push('/login')
//       }        
//     })
//     // setCustomer(null);
// }

  const handleClick = async () => {
      fetch("/logout", {
          method: "POST",
      })
      .then(resp => {
        if(resp.ok) {
          setCustomer(null);
          setSuccess('Logged Out!')
          history.push('/login')
        }        
      })
      // setCustomer(null);
  }

return (
  
  // <button style={{position: "absolute", top: "25%", left:"50%", transform: "translate(-50%, -50%)", background: "yellow"}} onClick={handleClick}>Logout</button>
  <div style={themeStyles}>
    {/* <Confetti width={windowSize.width} height={windowSize.height} /> */}
    <Button onClick={handleClick} style={buttonStyle}>
      <LogoutIcon sx={logoutStyle}/>&nbsp;<p style={{color: "black", fontSize: '20px'}}><b>Logout</b></p>
    </Button>
  </div>
  
  )
}

export default Logout;