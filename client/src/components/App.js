import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import WatchList from "./WatchList"
import Navbar from "./Navbar.js"

function App() {
  // Code goes here!
  return (
    <Navbar />
    <Switch>
      <Route exact path="/">
        {/* <WatchList watches={watches} /> */}
      </Route>
    </Switch>
  )
}

export default App;
