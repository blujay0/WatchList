import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from './App.js'
import { useTheme } from './ThemeProvider'
import './Cart.css';
import { useHistory } from 'react-router-dom';
import { ErrorContext } from '../context/ErrorContext';


const Cart = () => {
  const { error, setError } = useContext(ErrorContext)

  // creates state for cartItems returned from GET fetch below
  const [ cartItems, setCartItems ] = useState([])
  const darkTheme = useTheme()
  const themeStyles = {
    backgroundColor: darkTheme ? '#0C1728' : '#FFFFFF',
    color: darkTheme ? '#FFFFFF' : '#000000'
  }

  const history = useHistory();

  const removeCartItem = (product_id) => {
    const formData = {
      product_id: product_id, // in values obj
    }
    fetch(`/cart`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    // filter in the items that do not match the id of the item that the remove was clicked on
    setCartItems(cartItems.filter((item) => item.product_id !== product_id))
  }

  // const handleCheckout = () => {
  //   fetch(`/orders`, {
  //     method:"POST",
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then(resp => {
  //     if(resp.ok) {
  //       history.push('/order')
  //     }        
  //   })
  // }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setError('your cart is empty!')
    } else {
      fetch(`/orders`, {
        method:"POST",
        header: {
          "Content-Type": "application/json",
        },
      })
      .then(resp => {
        if(resp.ok) {
          history.push('/order')
        }
      })
    }
  }

  // GET fetch retrieves every item from that was added to the cartItems table
    useEffect(() => {
    fetch(`/cart`)
    .then(resp => {
      if (resp.ok) {
        // console.log(resp.product_id.product_name)
        resp.json().then((data) => {setCartItems(data)});
      }
    })
  }, [])

  return (
    <div className="Cart" style={themeStyles}>
      <h1>Your Cart</h1>
      {/* check to see if cartItems exist first with && */}
      {/* {console.log('CART ITEMS')}
      {console.log(cartItems)} */}
      {cartItems && cartItems.map((item, index) => <div key={index}>{item.product_id}<button onClick={() => removeCartItem(item.product_id)}>Remove</button></div>)}
      {<div style={{marginTop: "10px"}}><button onClick={handleCheckout}>Checkout</button></div>}
    </div>
  );
}

export default Cart;