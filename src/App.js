import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Quizi from "./Quizi/Quizi";
import Second from "./Navigation/Second";
import Nav from "./Navigation/Nav";


function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <Quizi />} />
        <Route path='/second' render={() => <Second />} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
