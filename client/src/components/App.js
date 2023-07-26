import React, { useEffect, useState, useContext } from "react";
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
import EditProduct from "./EditProduct.js"
import Order from "./Order.js"
import ListProduct from "./ListProduct.js"
import Chat from "./Chat.js"
import FunctionContext from "./FunctionContext.js"
import { ThemeProvider } from "./ThemeProvider.js";
import { NotificationsOffRounded } from "@mui/icons-material";
import NotFound from './NotFound.js'
import { ErrorContext } from '../context/ErrorContext';
import Error from './Error';

const App = () => {
  // Code goes here!
  const { saveError, error } = useContext(ErrorContext);

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [customer, setCustomer] = useState(null); // set customer id

  // GET watches
  const getProducts = () => {
    fetch("/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   fetch(`/cart`)
  //   .then(resp => {
  //     if (resp.ok) {
  //       // console.log(resp.product_id.product_name)
  //       resp.json().then((data) => {setCartItems(data)});
  //     }
  //   })

  useEffect(() => {
    // fetch customer and set customer data to state
    fetch("/customer")
    .then(resp => {
      if (resp.ok) {
        resp.json().then((data) => {setCustomer(data)});
      }
    })
    .catch(err => setCustomer(null))
  }, [])

  return (

    // keep navbar outside of <Switch> so it stays in place when page changes
    /*
    <Redirect /> is a routing component that enables you to override the history object and 
     dynamically redirect a user from a route to a new route
    */
    <>
      <Navbar customer={customer}/>
      {error && <Error />}
        {/* context can be though of as a global set for all of the children in the Provider */}
      <ThemeProvider>
        <FunctionContext />
        <Switch>
          <Route exact path="/">
            {/* if customer not logged in, redirect to login page */}
            {/* {!customer ? <Redirect to='/login' /> : <ProductsPage getProducts={getProducts} products={products} customer={customer} setCartItems={setCartItems} cartItems={cartItems}/>} */}
            <ProductsPage getProducts={getProducts} products={products} customer={customer} setCartItems={setCartItems} cartItems={cartItems}/>
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

          <Route exact path="/edit-product/:productId">
            <EditProduct getProducts={getProducts}/>
          </Route>

          <Route exact path="/list-product">
            <ListProduct getProducts={getProducts}/>
          </Route>

          <Route exact path="/order">
            <Order />
          </Route>

          <Route exact path="/chat">
            {/* customer is an object with an email attribute, check if email att is there, else return null */}
            <Chat username={customer?.email}/> 
          </Route>

          {/* <Route exact path="/about">
            <About />
          </Route> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
      <Footer customer={customer}/>   
    </>
  );
}

export default App;
