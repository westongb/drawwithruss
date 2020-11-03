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
import Login from "./Components/Login/LoginForm";
import GallaryHome from "./Components/Gallary/GallaryHome";
import Drawwithruss from "./Components/lessons/dwrHome";

export default function NavBar (){

return(
    <Router>
          <Link to="/Gallary">Home</Link>      
        {/* <Link to="/Gallary/Home">Gallary</Link> */}
        <Link to="/Login">Login</Link>
        <Link to="/Gallary/Orderform">order</Link>
    </Router>
)

}