import { useState, useEffect } from "react";

const UseHouses = () => {
    const [allHouses, setAllHouses] = useState([]);

    useEffect(() => {
        const FetchHouses = async () => {
            const resp = await fetch("/house.json");
            const houses = await resp.json();
            setAllHouses(houses);
        };
        FetchHouses();
    }


        , [])
    return allHouses
}

export default UseHouses;