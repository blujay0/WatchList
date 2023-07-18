import React, { useInsertionEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import './Customer.css';

function Customer() {
  const {customerId} = useParams()
  const history = useHistory()

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