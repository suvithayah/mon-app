import React from "react";
import { useState } from "react";
import CountryDisplay from "./country/CountryDisplay";

export default function Country( {data, setData}  ) {

    let [country, setCountry] = useState("");

    const submit = (e) => {
        e.preventDefault();
        let country = e.target.country.value;
        setCountry(country);
    }

    return (
        <>
            <div className="container">
                <span>Please enter a country </span>
            </div>
            <div className="container">
                <form className="form-inline" onSubmit={submit}>
                    <input type="text" className="input" name="country" placeholder="Country"/>
                    <input className="btn-submit submit" type="submit" value="Find"/>
                </form>
                <CountryDisplay search={country} data={data} setData={setData}/>
            </div>
        </>
    );
}
