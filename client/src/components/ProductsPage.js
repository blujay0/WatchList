import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'
import { ThemeContext } from './App.js'
import { useTheme } from './ThemeProvider'

const ProductsPage = ({ getProducts, products, customer, setCartItems, cartItems }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const mappedProducts = filteredProducts.map((product, index) => <ProductCard key={index} customer={customer} getProducts={getProducts} product={product} setCartItems={setCartItems} cartItems={cartItems} />)
  
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? '#0C1728' : '#FFFFFF'
  }

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  const onChange = (e) => {
    const value = e.target.value
    // grab the target value from event,
    // the event's target is the <input> element in this case, 
    // e.target.value is the user's input value
    setFilteredProducts(
      // filter all products
      // if expression evals to true, add to filtered list & vice versa
      products.filter( product => {
        return (product.product_name.toLowerCase().startsWith(value.toLowerCase())
        || product.model.toLowerCase().startsWith(value.toLowerCase())
        || product.maker.toLowerCase().startsWith(value.toLowerCase())
        )
      })
    )
  }

  return (
    <div>
      {/* <h1>Logged in as: {customer}</h1> */}
      <br />
      <input onChange={onChange} type="search" placeholder="search by name, make, or model"/>
      <br />
      <br />
      <div style={themeStyles}>
        {mappedProducts}
      </div>
    </div>
  )
}

export default ProductsPage;