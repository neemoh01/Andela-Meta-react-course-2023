import { useState, useEffect } from "react";
import LoadingStatus from "../components/helpers/LoadingStatus";

const UseHouses = () => {
    const [allHouses, setAllHouses] = useState([]);
    const [loadingState, setLoadingState] = useState(LoadingStatus.isLoading);


    const newHouse = (addHouse) => {
        setAllHouses([...allHouses, addHouse])
    }

    useEffect(() => {
        const FetchHouses = async () => {
            setLoadingState(LoadingStatus.isLoading);
            try {
                const resp = await fetch("/house.json");
                const houses = await resp.json();
                setAllHouses(houses);

                setLoadingState(LoadingStatus.loaded);
            } catch (e) {
                setLoadingState(LoadingStatus.hasErrored);
            }
        };
        FetchHouses();
    }


        , [])
    return { newHouse, allHouses, loadingState }
}

export default UseHouses;