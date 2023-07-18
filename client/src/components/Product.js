import { useEffect, useState } from "react";

const Product = () => {
  const [productDetails, setProductDetails] = useState([])
  const {prodId} = useParams()

  useEffect(() => {
    fetch(`/products/${prodId}`)
  })
  

} 
// ${prodId} 
export default Product;