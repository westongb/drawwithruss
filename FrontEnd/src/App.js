import React from 'react';

import './App.css';
import Home from "./Home";
import {LoginProvider} from './Components/Login/Authentication';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Home/>
      </LoginProvider>
    </div>
  );
}

export default App;
