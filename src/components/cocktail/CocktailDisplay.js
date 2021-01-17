import React from "react";
import { useEffect, useState } from "react";

export default function CocktailDisplay({cocktailUrl}) {
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
                        <span className="card-title">{strDrink}</span>
                    </div>
                </div>
            )}
        </div>
    )
}
