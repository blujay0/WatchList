import { useEffect, useState } from "react";

const Product = () => {
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
  
  const handleDelete = (e) => {
    return null
  }

} 
// ${prodId} 
export default Product;