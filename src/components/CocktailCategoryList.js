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
            <form className="form-inline">
                <select className="custom-select my-1 mr-sm-2" value={selectedValue} onChange={handleSelection}>
                    {categories.map(({strCategory}) => (
                        <option value={strCategory}>
                            {strCategory}
                        </option>
                    ))}
                </select>
            </form>
            <CocktailList type={selectedValue} setCocktailUrl={setSelectedValue} />
        </>
    );
}


