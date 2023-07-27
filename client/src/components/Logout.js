import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { ThemeContext } from './App.js'
import { SuccessContext } from '../context/SuccessContext.js';

const Logout = ({updateCustomer, setCustomer}) => { // updateCustomer is not defined yet, but remember you will implement useContext
  const history = useHistory();
  const { success, setSuccess } = useContext(SuccessContext)
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
  <button onClick={handleClick}>Logout</button>
)
}

export default Logout;