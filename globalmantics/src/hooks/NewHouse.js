import { useState } from "react";
import { useHistory } from "react-router-dom";

import UseHouses from "./UseHouses";


const NewHouse = () => {
    const history = useHistory();

    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const allHouses = UseHouses();

    const nextId = allHouses.length + 1;

    const house = {

        address: address,
        country: country,
        price: price,
        type: type,
        description: description,
        id: nextId
    }

    const addHouse = () => {
        allHouses.push(house);
        history.push(`/house/${nextId}`);
    }

    return addHouse;



}

export default NewHouse;