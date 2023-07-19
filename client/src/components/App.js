import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import ProductCard from "./ProductCard"
import Product from "./Product"
import ProductsPage from "./ProductsPage"
import Cart from "./Cart"
import Login from "./Login"
import SignUp from "./SignUp"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import About from "./About.js"
import Customer from "./Customer.js"

const App = () => {
  // Code goes here!
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  // GET watches
  useEffect(() => {
    fetch("/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products))
      .catch(err => console.log(err))
  }, []);


  return (
    // keep navbar outside of <Switch> so it stays in place when page changes
    // use React Fragment to wrap <Navbar/> and <Switch/>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ProductsPage products={products} />
        </Route>

        <Route exact path="/products/:productId">
          <Product />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <SignUp/>
        </Route>

        <Route exact path="/customer">
          <Customer />
        </Route>

        <Route exact path="/cart">
          <Cart/>
        </Route>

        {/* <Route exact path="/about">
          <About />
        </Route> */}
      </Switch>
      <Footer />    
    </div>

  );
}

export default App;
