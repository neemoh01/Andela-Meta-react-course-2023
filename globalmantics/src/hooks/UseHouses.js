import { useState, useEffect } from "react";

const UseHouses = () => {
    const [allHouses, setAllHouses] = useState([]);

    const newHouse = (addHouse) => {
        setAllHouses([...allHouses, addHouse])
    }

    useEffect(() => {
        const FetchHouses = async () => {
            const resp = await fetch("/house.json");
            const houses = await resp.json();
            setAllHouses(houses);
        };
        FetchHouses();
    }


        , [])
    return { newHouse, allHouses }
}

export default UseHouses;