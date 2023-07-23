import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ customer, getProducts, product, setCartItems, cartItems }) => {
  const { product_id, maker, model, product_name, product_price, product_description, image } = product

  // const history = useHistory();

  // const productDetails = () => {
  //   history.push(`/products/${id}`)
  // }

  const productPath = `/products/${product_id}`

  const productEditPath = `/edit-product`

  const handleDelete = () => {
    fetch(`/products/${product_id}`, {
      method: "DELETE",
    })
    .then(() => getProducts());
  }

  // POST fetch fires when button is clicked and adds specific item to cartItems table
  const handleAddToCart = () => {
    const formData = {
      product_id: product_id, // in values obj
    }
    fetch(`/cart`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })  
  }

  return (
    <div className="main">
      <main>
        <img src={image} alt={maker}/>
        <div>Maker: {maker}</div>
        <div>Model: {model}</div>
        <div>Name: {product_name}</div>
        <div>Price: ${product_price}</div>
        {/* <div>Description: {product_description}</div> */}
        <button className='cart-button' onClick={handleAddToCart}>🛒</button>
        <button className='trash-button' onClick={handleDelete}>🗑️</button>    
        {/* React has an 'as' prop that can instruct a component to render as something else */}
        <Link to={productPath} className="btn btn-primary">Details</Link>&nbsp;
        <br/>
        <br/>
        {customer && <Link to={productEditPath} className="btn btn-primary">Edit Product</Link>}
      </main>
    </div>
  )
}

export default ProductCard;