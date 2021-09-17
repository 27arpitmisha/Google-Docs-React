import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextEditor from "./TextEditor";
import { Redirect, Route, Switch } from "react-router-dom";
import {v4 as uuidV4} from 'uuid'
import WelcomePage from "./WelcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
    <Switch>
        <Route path="/" exact>         
          <WelcomePage></WelcomePage>
        </Route>
        <Route path="/documents/:id">
          
          <TextEditor />
        </Route>
        <Route path="*">
         <Redirect to='/' /> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;
