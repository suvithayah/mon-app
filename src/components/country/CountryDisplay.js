import React, {useEffect, useState} from "react";

export default function CountryDisplay({search, data, setData}) {

    //let [data, setCountryData] = useState("");


    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`https://restcountries.eu/rest/v2/name/${search}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setData(data[0]))
                .catch((e) => console.error(e));
        };

        fetchData();

        return () => {
            lastCalled = false;
        };
    }, [search]);

    //If search input is undefined
    if (search === "") {
        return (<></>);
    }

    //If there isn't a result
    if (data == null) {
        return (
            <div className=" container alert alert-dark" role="alert">
                <p>Please review the spelling of the country</p>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="card">
                <img src={data.flag} alt="" className="card-img-top"/>
                <div className="card-body">
                    <p className="fw-bold">Country : {data.name}</p>

                    <span className="fw-light">
                        Capital : {data.capital} <br/>
                        Region : {data.region } <br/>
                        Population : {data.population} <br/>
                    </span>
                </div>
            </div>
        </div>
    );
}


