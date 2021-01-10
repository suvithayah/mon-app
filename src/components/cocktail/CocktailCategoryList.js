import { useEffect, useState } from "react";
import CocktailList from "./CocktailList";

export default function CocktailCategoryList({ setCategory }) {
    let [categories, setCategories] = useState([]);
    let [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        let lastCalled = true;
        const fetchTypes = () => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
                .then((response) => response.json())
                .then((data) => lastCalled && setCategories(data["drinks"]));
        };
        fetchTypes();
        return () => {
            lastCalled = false;
        };
    }, []);


    const handleSelection = (event) => {
        setCategory(event.target.value);
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <div className="container">
                <span>Please select a category of cocktails to see our collection </span>
            </div>

            <div className="container">
                <form className="form-inline">
                    <select className="custom-select my-1 mr-sm-2" value={selectedValue} onChange={handleSelection}>
                        <option>
                            -
                        </option>
                        {categories.map(({strCategory}) => (
                            <option value={strCategory}>
                                {strCategory}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
            <CocktailList type={selectedValue} setCocktailUrl={setSelectedValue} />
        </>
    );
}


