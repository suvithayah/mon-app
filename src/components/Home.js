import React from "react";

const Home = () => {
    return (
        <div className="home">
            <div className='home-inline'>
                <h1>Api 1 : Cocktails </h1>
                <span>
                    In this api you can sort cocktails using a search bar according to the categories of cocktails.
                </span>
            </div>

            <div className='home-inline'>
                <h1>Api 2 : Country</h1>
                <span>
                    Here you can search the information of a country.
                </span>
            </div>

            <div className='home-inline'>
                <h1>Cocktails and Country</h1>
                <span>
                   You can have a selection of cocktails depending the country your select.
                </span>
            </div>
        </div>
    );
};

export default Home;