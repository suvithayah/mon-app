import { useEffect, useState } from "react";

export default function CocktailList({ category, setCocktailUrl }) {
    let [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setCocktails(data["drinks"]))
                .catch((e) => console.error(e));
        };

        fetchData();

        return () => {
            lastCalled = false;
        };
    }, [category]);

    return (
        <ul>
            <div>
                {cocktails.map(({strDrink, strDrinkThumb}) =>
                    <div className="card">
                        <img src={strDrinkThumb} alt="" className="card-img-top"/>
                        <div className="card-body">
                            <h7 className="card-title">{strDrink}</h7>
                        </div>
                    </div>
                )}
            </div>
        </ul>
    );
}
