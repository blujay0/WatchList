import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeContext } from './App.js'
import { useTheme } from './ThemeProvider'

const Order = () => {
  const [orders, setOrders] = useState([])
  const darkTheme = useTheme()
  const themeStyles = {
    backgroundColor: darkTheme ? '#008B8B' : '#FFFFFF',
    color: darkTheme ? '#FFFFFF' : '#000000'
  }

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
    <div className="Order" style={themeStyles}>
      <h1>Order History</h1>
      {/* if orders exists (&&) map orders */}

      <div>{orders && orders.map((item) => 
        <div key={item.order_id}>
          Order # {item.order_id} /
          Customer ID: {item.customer_id} /
          Order Date: {item.date} /
          Total Order Amount: ${item.total_amount} /
          {/* {item.order_details.map((ele, index) => <div>Item ID: {ele.id} / Quantity: {ele.quantity} / Product ID: {ele.product_id} / Name: {ele.product_name}</div>)} */}
          {item.order_details.map((ele, index) => <div>Product ID: {ele.product_id} / Quantity: {ele.quantity} / </div>)}
          <br />
        </div>
        )}
      </div>
      <br />
    </div>
  )
}

export default Order;
