import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { ThemeContext } from './App.js';
import { useTheme } from './ThemeProvider.js';

const Product = () => {
  const [error, setError] = useState(null)
  const [product, setProduct] = useState({})
  const { productId } = useParams();
  
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? '#008B8B' : '#FFFFFF',
    color: darkTheme ? '#FFFFFF' : '#000000'
  }

  useEffect(() => {
    // console.log(productId);
    fetch(`/products/${productId}`)
    .then(resp => {
      if (resp.ok) { // if response is one of 200 status code
        resp.json().then(setProduct); // set product state to response which is a single product
      } else {
        resp.json().then(error => setError(error.error));
      }
    })
    .catch(console.error)
    
  }, [productId])
  
  const { product_id, maker, model, product_name, product_price, product_description, image } = product

  return (
      <div style={themeStyles}>
        <h1>{maker} {product_name}</h1>
        <img src={image} alt={maker} />
        <h3>ID: {product_id}</h3>
        <h3>Model: {model}</h3>
        <h3>Price: ${product_price}</h3>
        <p>{product_description}</p>
      </div>
  )
} 

export default Product;