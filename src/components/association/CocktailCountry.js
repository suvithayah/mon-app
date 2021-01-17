import CocktailList from "../cocktail/CocktailList";
import React from "react";

function getCategory(region) {
    if (region == 'Europe')
        return <CocktailList category={'Cocktail'}/>
    else if  (region == 'Americas')
        return <CocktailList category={'Shot'}/>
    else if  (region == 'Asia')
        return <CocktailList category={'Beer'}/>
    else if  (region == 'Oceania')
        return <CocktailList category={'Soft Drink / Soda'}/>
    else if  (region == 'Africa')
        return <CocktailList category={'Ordinary Drink'}/>
}


export default function CocktailCountry({data}) {
      if (!data){
        return (<></>);
    }

    return (
        <>
            {getCategory(data.region)}
        </>
    );

}