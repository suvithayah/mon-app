import React from "react";
import { useEffect, useState } from "react";
import CocktailDisplay from "./CocktailDisplay";
import CocktailCategoryList from "./CocktailCategoryList";
import CocktailList from "./CocktailList";

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
