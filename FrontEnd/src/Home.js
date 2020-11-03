import React, { useState, useCallback } from "react";
import RussGallary from "./Components/Gallary/gallary";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./NavBar";
import createHistory from 'history/createBrowserHistory';
import GallaryHome from "./Components/Gallary/GallaryHome";
import Drawwithruss from "./Components/lessons/dwrHome";
import Login from "./Components/Login/LoginForm";
import {LoginContext} from "./Components/Login/Authentication";
import Orderform from "./Components/Gallary/Orderform";

export default function Home(){
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

  return (
    <div>

    
        <Router>
        <Link to="/DrawWithRuss">Learn to Draw</Link>      
        <Link to="/Gallary">Gallary</Link>
        <Link to="/Login">Login</Link>
       
       
  <Switch>
     
       
      <Route exact path="/Gallary">
        <GallaryHome/>
      </Route> 
      <Route exact path="/Drawwithruss">
        <Drawwithruss/>
      </Route>
      <Route exact path="/Login">
        <Login/>
      </Route>
      <Route path="/Gallary/Orderform">
        <Orderform/>
      </Route>
      </Switch>
    </Router>
          
        
    </div>
  );
}
