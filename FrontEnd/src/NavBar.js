import React, { useState, useCallback } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from "./Home";
import OrderForm from "./Components/Gallary/Orderform";
  import RussGallary from "./Components/Gallary/gallary"

export default function NavBar (){

return(
    <Router>
          <Link to="/">Home</Link>      
        <Link to="/Gallary">Gallary2</Link>
       
       
     
      <Switch>
       
      <Route exact path="/Gallary">
        <RussGallary/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/order">
        <OrderForm/>
      </Route>
        </Switch>
      
    </Router>
)

}