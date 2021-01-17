import './App.css';
import React from "react"

import { useEffect, useState } from "react";

import Route from "./components/Route"
import Header from "./components/Header";
import Cocktail from "./components/Cocktail";
import Home from "./components/Home";
import Association from "./components/Association";
import CountryDisplay from "./components/country/CountryDisplay";
import Country from "./components/Country";



const showComponent = (route, component) => {
    return window.location.pathname === route ? component : null
}

function App() {

    return (
        <>
            <Header />
            <div className="container">
              <Route path="/">
                  <Home />
              </Route>
              <Route path="/cocktail">
                <Cocktail />
            </Route>
            <Route path="/country">
                <Country />
            </Route>
          <Route path="/association">
              <Association />
          </Route>
            </div>
        </>
  );
}

export default App;
