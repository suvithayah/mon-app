import React from "react";
import { useState } from "react";
import CocktailDisplay from "./cocktail/CocktailDisplay";
import CocktailCategoryList from "./cocktail/CocktailCategoryList";
import CocktailList from "./cocktail/CocktailList";

export default function Cocktail() {
    let [selectedCategeory, setSelectedCategory] = useState("");

    return (
        <div className="container">
            <CocktailDisplay />
            <CocktailCategoryList setCategory={setSelectedCategory} />
            <CocktailList category={selectedCategeory}/>
        </div>
    );
}
