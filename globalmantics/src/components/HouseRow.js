import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import HousesContext from "../context/HouseContext";
import SelectedHouse from "./SelectedHouse";

const HouseRow = ({ selectHouse }) => {

    const { allHouses } = useContext(HousesContext);

    const id = useParams().id;
    const house = allHouses.find(h => h.id === parseInt(id));
    if (!house) return <div>House not found</div>
    return (
        <>
            <SelectedHouse house={selectHouse} />
        </>
    );
}

export default HouseRow;
