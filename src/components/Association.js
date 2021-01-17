import React, {useState} from "react";
import Country from "./Country";
import CocktailList from "./cocktail/CocktailList";



export default function Association() {
    let [selectedCategeory, setSelectedCategory] = useState("");

    return (
        <div className="container-left">
            <Country/>

            <CocktailList category={selectedCategeory} setCocktailUrl={setSelectedCocktailUrl} />
        </div>
    );
}