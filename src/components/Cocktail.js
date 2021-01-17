import React from "react";
import { useState } from "react";
import CocktailCategoryList from "./cocktail/CocktailCategoryList";
import CocktailList from "./cocktail/CocktailList";

export default function Cocktail() {
    let [selectedCategeory, setSelectedCategory] = useState("");

    return (
        <div className="container">
            <CocktailCategoryList setCategory={setSelectedCategory} />
            <CocktailList category={selectedCategeory}/>
        </div>
    );
}
