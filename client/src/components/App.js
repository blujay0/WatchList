import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import WatchList from "./WatchList"
import WatchPage from "./WatchPage"
import Cart from "./Cart"
import Customer from "./Customer"
import Login from "./Login"
import SignUp from "./SignUp"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import About from "./About.js"

const App = () => {
  // Code goes here!
  return (
    // keep navbar outside of <Switch> so it stays in place when page changes
    // use React Fragment to wrap <Navbar/> and <Switch/>
    <>
      <Navbar />
       <Switch>
         <Route exact path="/">
           {/* <WatchList watches={watches} /> */}
         </Route>
         <Route exact path="/customer">
           {/* <Customer /> */}
         </Route>
         <Route exact path="/signup">
           <SignUp/>
         </Route>
         <Route exact path="/login">
           <Login />
         </Route>
         <Route exact path="/watches/:id">
           {/* <WatchPage /> */}
         </Route>
         <Route exact path="/cart">
            <Cart/>
         </Route>
         <Route exact path="/about">
           <About />
         </Route>
        </Switch>
       <Footer />    
    </>

  )
}

export default App;
