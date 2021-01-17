import './App.css';
import React, {useState} from "react"

import Route from "./components/Route"
import Header from "./components/Header";
import Cocktail from "./components/Cocktail";
import Home from "./components/Home";
import Association from "./components/Association";
import Country from "./components/Country";

function App() {

    let [data, setData] = useState([]);
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
                <Country data={data} setData={setData} />
            </Route>
          <Route path="/association">
              <Association data={data} setData={setData}/>
          </Route>
            </div>
        </>
  );
}

export default App;
