import React, { useEffect, useState, createContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import ProductCard from "./ProductCard"
import Product from "./Product"
import ProductsPage from "./ProductsPage"
import Cart from "./Cart"
import Login from "./Login"
import Logout from "./Logout"
import SignUp from "./SignUp"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import About from "./About.js"
import Customer from "./Customer.js"

const App = () => {
  // Code goes here!
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [customer, setCustomer] = useState(''); // set customer id
  
  // GET watches
  useEffect(() => {
    fetch("/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products))
      .catch(err => console.log(err))
  }, []);

  return (
    // keep navbar outside of <Switch> so it stays in place when page changes
    /*
    <Redirect /> is a routing component that enables you to override the history object and 
     dynamically redirect a user from a route to a new route
    */
    <div>
      <Navbar />
      <Switch>
        {/* for now: to see cart functionality work, move <ProductsPage /> out 
        of the ternary and comment out the ternary all within the same <Route /> */}
        <Route exact path="/">
          {/* {!customer ? <Redirect to='/login' /> : } */}
          <ProductsPage products={products} customer={customer} setCartItems={setCartItems} cartItems={cartItems}/>          

        </Route>

        <Route exact path="/products/:productId">
          <Product />
        </Route>

        <Route exact path="/login">
          <Login setCustomer={setCustomer}/>
        </Route>

        <Route exact path="/signup">
          <SignUp/>
        </Route>

        <Route exact path="/customer">
          <Customer />
        </Route>

        <Route exact path="/cart">
          <Cart cartItems={cartItems} setCartItems={setCartItems}/>
        </Route>

        <Route exact path="/logout">
          <Logout setCustomer={setCustomer}/>
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
