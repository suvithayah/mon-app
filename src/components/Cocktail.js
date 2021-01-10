import React from "react";
import { useEffect, useState } from "react";
import CocktailDisplay from "./cocktail/CocktailDisplay";
import CocktailCategoryList from "./cocktail/CocktailCategoryList";
import CocktailList from "./cocktail/CocktailList";

export default function Cocktail( {cocktailUrl}) {
    let [selectedCatgeory, setSelectedCategory] = useState("");
    let [selectedCocktailUrl, setSelectedCocktailUrl] = useState(null);

    return (
        <div className="container">
            <CocktailDisplay cocktailUrl={selectedCocktailUrl} />
            <CocktailCategoryList setCategory={setSelectedCategory} />
            <CocktailList category={selectedCatgeory} setCocktailUrl={setSelectedCocktailUrl} />
        </div>
    );
}
