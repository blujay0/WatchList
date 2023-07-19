import React from 'react'

const Logout = ({updateCustomer}) => { // updateCustomer is not defined yet, but remember you will implement useContext
  const handleClick = async () => {
      const resp = await fetch("/logout", {
          method: "POST"
      })
      if(resp.ok) {
        updateCustomer(false)  
      }
  }

return (
  <button onClick={handleClick}>Logout</button>
)
}

export default Logout;