import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { product_id, maker, model, product_name, product_price, product_description, image } = product

  // const history = useHistory();

  // const productDetails = () => {
  //   history.push(`/products/${id}`)
  // }

  const productPath = `/products/${product_id}`

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
        <div>Price: {product_price}</div>
        {/* <div>Description: {product_description}</div> */}
        <button className='cart-button' onClick={handleAddToCart}>🛒</button>
        {/* React has an 'as' prop that can instruct a component to render as something else */}
        <Link to={productPath} className="btn btn-primary">Details</Link>
      </main>
    </div>
  )
}

export default ProductCard;