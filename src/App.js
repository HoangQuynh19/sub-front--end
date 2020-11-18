
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import NavBar from "./Component/Header/NavBar";

import Login from './Component/Page/Login';
function App() {
  return (
   
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/login">
            <NavBar />
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;
