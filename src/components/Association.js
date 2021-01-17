import React, {useState} from "react";
import CocktailCountry from "./association/CocktailCountry";
import Country from "./Country";
import CountryDisplay from "./country/CountryDisplay";



export default function Association({data, setData}) {
    let [country, setCountry] = useState("");
    const submit = (e) => {
        e.preventDefault();
        let country = e.target.country.value;
        setCountry(country);
    }

    return (
        <>
             <Country data={data} setData={setData}/>
             <CocktailCountry data={data}/>
       </>
    );
}