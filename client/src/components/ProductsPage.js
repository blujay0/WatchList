import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ThemeContext } from './App.js';
import { useTheme } from './ThemeProvider';
import './ProductsPage.css';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

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
        return (
          product.product_name.toLowerCase().startsWith(value.toLowerCase())
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
      {/* <input className="search-input" onChange={onChange} type="search" placeholder="search by name, make, or model"/> */}
      <TextField 
        id='search-bar' 
        variant='standard' 
        size='normal' 
        type="search" 
        sx={{marginLeft: "32px", width: "500px"}} 
        onChange={onChange} 
        placeholder="search by name, make, or model"
        inputProps={{ style: { fontSize: "1.5rem" } }}
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
        }}
      />
      <br />
      <br />
      <div style={themeStyles}>
        {mappedProducts}
      </div>
    </div>
  )
}

export default ProductsPage;