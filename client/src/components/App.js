import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import WatchList from "./WatchList"
import Navbar from "./Navbar.js"

function App() {
  // Code goes here!
  return (
    <Navbar />
    // <Switch>
    //   <Route exact path="/">
    //     {/* <WatchList watches={watches} /> */}
    //   </Route>
    //   <Route exact path="/customer">
    //     {/* <Customer /> */}
    //   </Route>
    //   <Route exact path="/signup">
    //     {/* <SignUp/> */}
    //   </Route>
    //   <Route exact path="/login">
    //     {/* <Login /> */}
    //   </Route>
    //   <Route exact path="/watches/:id">
    //     {/* <WatchPage /> */}
    //   </Route>
    // </Switch>
  )
}

export default App;
