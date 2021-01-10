import React from "react";
import { useEffect, useState } from "react";

export default function CocktailDisplay( {cocktailUrl}) {
    let [cocktailData, setCocktailData] = useState([]);

    useEffect(() => {
        let lastCalled = true;
        const fetchData = () => {
            if (typeof cocktailUrl === "string") {
                fetch(cocktailUrl)
                    .then((response) => response.json())
                    .then((data) => lastCalled && setCocktailData(data))
                    .catch((e) => console.error(e));
            }
        };

        //setTimeout(fetchData, 10000 * Math.random());
        fetchData();
        return () => {
            lastCalled = false;
        };
    }, [cocktailUrl]);

    if (!cocktailData.id) {
        return <></>;
    }
    return (
        <div className="container">
            {cocktailData.map(({strDrink, strDrinkThumb}) =>
                <div className="card">
                    <img src={strDrinkThumb} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h7 className="card-title">{strDrink}</h7>
                    </div>
                </div>
            )}
        </div>
    )
}
