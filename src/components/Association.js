import CocktailCountry from "./association/CocktailCountry";
import Country from "./Country";

export default function Association({data, setData}) {
    return (
        <>
             <Country data={data} setData={setData}/>
             <CocktailCountry data={data}/>
       </>
    );
}