import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light" >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/cocktail">Cocktails</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/country">Country</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/association">Which one ?</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;