import './App.css';
import React, { useState } from "react"

import Route from "./components/Route"
import Header from "./components/Header";
import Cocktail from "./components/Cocktail";
import Home from "./components/Home";
import Music from "./components/Music";
import Association from "./components/Association";

const showComponent = (route, component) => {
    return window.location.pathname === route ? component : null
}

function App() {
  return (
      <div className="ui container">
          <Header />
          <Route path="/">
              <Home />
          </Route>
          <Route path="/cocktail">
              <Cocktail />
          </Route>
          <Route path="/music">
              <Music />
          </Route>
          <Route path="/association">
              <Association />
          </Route>
      </div>
  );
}

export default App;
