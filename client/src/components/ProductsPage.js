import React from 'react';
import ProductCard from './ProductCard'
import { ThemeContext } from './App.js'
import { useTheme } from './ThemeProvider'


const ProductsPage = ({ getProducts, products, customer, setCartItems, cartItems }) => {
  const mappedProducts = products.map((product, index) => <ProductCard key={index} customer={customer} getProducts={getProducts} product={product} setCartItems={setCartItems} cartItems={cartItems} />)
  const darkTheme = useTheme()
  const themeStyles = {
    backgroundColor: darkTheme ? '#2f4f4f' : '#FFFFFF'
  }

  return (
    <div>
      {/* <h1>Logged in as: {customer}</h1> */}
      <div style={themeStyles}>
        {mappedProducts}
      </div>
    </div>
  )
}

export default ProductsPage;