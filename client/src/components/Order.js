import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeContext } from './App.js'

const Order = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`/orders`)
    .then(resp => {
      if (resp.ok) {
        resp.json().then((data) => setOrders(data))
      }
    })
  }, [])

  // useEffect(() => {
  //   fetch(`/cart`)
  //   .then(resp => {
  //     if (resp.ok) {
  //       // console.log(resp.product_id.product_name)
  //       resp.json().then((data) => {setCartItems(data)});
  //     }
  //   })
  // }, [])

  // "order_id": self.id,
  // "customer_id": self.customer_id,
  // "date": self.date,
  // "total_amount": self.total_amt,

  // orderDetails as_dict():
  // "id": self.id,
  // "quantity": self.quantity,
  // "product_id": self.product_id,

  return (
    <div className="Order">
      <h1>Order History</h1>
      {/* if orders exists (&&) map orders */}

      <div>{orders && orders.map((item) => 
        <div key={item.order_id}>
          {item.order_id}
          {item.customer_id}
          {item.date}
          {item.total_amount}
          {item.order_details.map((ele, index) => <div>{ele.id} {ele.quantity} {ele.product_id}</div>)}
        </div>
        )}
      </div>
    
  
    </div>
  )
  
}


export default Order;
