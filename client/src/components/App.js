import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import WatchCard from "./WatchCard"
import Watch from "./Watch"
import WatchPage from "./WatchPage"
import Cart from "./Cart"
// import Customer from "./Customer"
import Login from "./Login"
import SignUp from "./SignUp"
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import About from "./About.js"
import Profile from "./Profile.js"

const App = () => {
  // Code goes here!
  const [watches, setWatches] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  // GET watches
  useEffect(() => {
    fetch("http://localhost:5000/watches")
      .then((resp) => resp.json())
      .then((watches) => setWatches(watches))
      .catch(err => console.log(err))
  }, []);

  return (
    // keep navbar outside of <Switch> so it stays in place when page changes
    // use React Fragment to wrap <Navbar/> and <Switch/>
    <>
      <Navbar />
       <Switch>
         <Route exact path="/">
           <WatchPage watches={watches} />
         </Route>

         <Route exact path="/watches/:id">
           {/* <Watch /> */}
         </Route>

         <Route exact path="/login">
           <Login />
         </Route>

         <Route exact path="/signup">
           <SignUp/>
         </Route>

         <Route exact path="/profile">
           {/* <Profile /> */}
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
