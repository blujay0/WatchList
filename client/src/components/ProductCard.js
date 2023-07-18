import React from 'react'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { maker, model, product_name, product_price, product_description, image } = product

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
      </main>
    </div>
  )
}

export default ProductCard;