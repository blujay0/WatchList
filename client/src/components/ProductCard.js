import React from 'react';
import {useHistroy} from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { maker, model, product_name, product_price, product_description, image } = product

  const handleDetailsClick = () => {

  }

  const handleAddToCart = () => {
    const cartProduct = { maker, model, product_name, product_price, image };
  }

  return (
    <div className="main">
      <main>
        <img src={image} alt={maker} width="200" height="200"/>
        <div>Maker: {maker}</div>
        <div>Model: {model}</div>
        <div>Name: {product_name}</div>
        <div>Price: ${product_price}</div>
        {/* <div>Description: {product_description}</div> */}
        <button className='cart-button' onClick={handleAddToCart}>🛒</button>
        <button className='detail-button' onClick={handleDetailsClick}>More Details</button>
      </main>
    </div>
  )
}

export default ProductCard;