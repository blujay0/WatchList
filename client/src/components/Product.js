import { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
const Product = ({ product }) => {
  const [productDetails, setProductDetails] = useState([])
  const {prodId} = useParams()

  useEffect(() => {
    fetch(`/products/${prodId}`)
    .then(resp => {
      if (resp.ok) {
        resp.json().then(setProductDetails);
      } else {
        console.error("Unable to set concerts");
      }
    })
    .catch(console.error)
  }, [prodId])
  
  const {id, maker, model, product_name, product_price, product_description, image } = productDetails

  return (
    <Product id={id}>
      <div>
        <img src={image} alt={maker} />
        <h1>{maker} {product_name}</h1>
        <h3>Model: {model}</h3>
        <h3>Price: {product_price}</h3>
        <p>{product_description}</p>
      </div>
    </Product>
  )

} 
// ${prodId} 
export default Product;