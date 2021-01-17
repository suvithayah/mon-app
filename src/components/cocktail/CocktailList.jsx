import { useEffect, useState } from "react";

export default function CocktailList({ category }) {
    let [cocktails, setCocktails] = useState([]);
console.log(category);
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

        <div className="container">
            {cocktails.map(({strDrink, strDrinkThumb}) =>
                <div className="card">
                    <img src={strDrinkThumb} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <span className="card-title">{strDrink}</span>
                    </div>
                </div>
            )}
        </div>

    );
}
