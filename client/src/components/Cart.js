import React from 'react';
import './Cart.css';

function Cart( { cartItems, setCartItems } ) { // pass this in!!!
  const removeCartItem = (product_id) => {
    setCartItems(cartItems.filter((item) => item.product_id !== product_id))
  }

  return (
    <div className="Cart">
      <h1>Your Cart</h1>
      {cartItems.map((item, index) => <div key={index}>{item.maker}<button onClick={() => removeCartItem(item.product_id)}>Remove</button></div>)}
    </div>
  );
}

export default Cart;