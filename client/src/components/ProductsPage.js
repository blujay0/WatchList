import React from 'react';
import ProductCard from './ProductCard'

const ProductsPage = ({ products, customer, setCartItems, cartItems }) => {
  const mappedProducts = products.map((product, index) => <ProductCard key={index} product={product} setCartItems={setCartItems} cartItems={cartItems} />)

  return (
    <div>
      <h1>Logged in as: {customer}</h1>
      <div>
        {mappedProducts}
      </div>
    </div>
  )
}

export default ProductsPage;