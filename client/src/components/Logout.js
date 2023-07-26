import React from 'react'
import { useHistory } from 'react-router-dom';
import { ThemeContext } from './App.js'

const Logout = ({updateCustomer, setCustomer}) => { // updateCustomer is not defined yet, but remember you will implement useContext
  const history = useHistory();
  
  const handleClick = async () => {
      const resp = await fetch("/logout", {
          method: "POST"
      })
      .then(resp => {
        if(resp.ok) {
          setCustomer(null);
          history.push('/login')
        }        
      })
      // setCustomer(null);
  }

return (
  <button onClick={handleClick}>Logout</button>
)
}

export default Logout;