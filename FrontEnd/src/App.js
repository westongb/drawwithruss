import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RussGallary from "./Components/Gallary/gallary";

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
