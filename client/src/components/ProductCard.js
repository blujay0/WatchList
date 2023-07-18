import React from 'react';
import {useHistory} from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { maker, model, product_name, product_price, product_description, image } = product

  const history = useHistory();

  const handleDetailsClick = () => {
    history.push(`/products/${product.id}`);
  }

  const handleAddToCart = () => {
    const cartProduct = { maker, model, product_name, product_price, image };
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
        <button className='detail-button' onClick={handleDetailsClick}>Details</button>
      </main>
    </div>
  )
}

export default ProductCard;