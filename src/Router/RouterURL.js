import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from '../Component/Page/Login';


export default function BasicExample() {
    return (
      
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>         
          </Switch>
       
     
    );
  }
  