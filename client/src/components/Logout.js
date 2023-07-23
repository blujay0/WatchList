import React from 'react'
import { ThemeContext } from './App.js'

const Logout = ({updateCustomer, setCustomer}) => { // updateCustomer is not defined yet, but remember you will implement useContext
  const handleClick = async () => {
      const resp = await fetch("/logout", {
          method: "POST"
      })
      // if(resp.ok) {
      //   updateCustomer(false)  
      // }
      setCustomer(null);
  }

return (
  <button onClick={handleClick}>Logout</button>
)
}

export default Logout;