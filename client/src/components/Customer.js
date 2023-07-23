import React, { useInsertionEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import './Customer.css';
import { ThemeContext } from './App.js'

function Customer() {
  const {customerId} = useParams()
  const history = useHistory()

  // version of useEffect that fires before any DOM mutations
  useInsertionEffect(() => {
    fetch(`/customer/${customerId}`)
    
  })


  return (
    <div className="Customer">
      <h1>Your Profile</h1>
    </div>
  );
}

export default Customer;