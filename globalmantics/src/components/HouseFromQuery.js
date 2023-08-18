import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import House from "./House";
import { useContext } from "react";
import HousesContext from "../context/HouseContext";

const HouseFromQuery = () => {

    const { allHouses } = useContext(HousesContext);

    const id = useParams().id;
    const house = allHouses.find(h => h.id === parseInt(id));
    if (!house) return <div>House not found</div>
    return (
        <>
            <House house={house} />
        </>
    );
}

export default HouseFromQuery;