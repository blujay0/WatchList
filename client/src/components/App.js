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

function App() {
  // Code goes here!
  return (
    // keep navbar outside of <Switch> so it stays in place when page changes
    // use React Fragment to wrap <Navbar/> and <Switch/>
    <>
      <Navbar />
      <Footer />
       <Switch>
         <Route exact path="/">
           {/* <WatchList watches={watches} /> */}
         </Route>
         <Route exact path="/customer">
           {/* <Customer /> */}
         </Route>
         <Route exact path="/signup">
           {/* <SignUp/> */}
         </Route>
         <Route exact path="/login">
           <Login />
         </Route>
         <Route exact path="/watches/:id">
           {/* <WatchPage /> */}
         </Route>
         <Route exact path="/watches/:id">
           {/* <About /> */}
         </Route>
       </Switch>    
    </>

  )
}

export default App;
