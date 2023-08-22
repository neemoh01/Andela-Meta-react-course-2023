import UseHouses from "../hooks/UseHouses"


import { useState } from "react";



const HouseList = () => {


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
        setAddress("123 Main St");

        setCountry("USA");
        setPrice(1000000);
        setType("Ranch");
        setDescription("A nice house in the suburbs");
        // console.log(house);
        const newHouse = [...allHouses, house];
        console.log(newHouse);


    }






    return (
        <div>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses Currently on the Market
                </h5>
            </div>
            <table className="table table-hover">

                <thead>
                    <tr>
                        <th scope="col">Address</th>
                        <th scope="col">Country</th>
                        <th scope="col">Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {allHouses.map((house) => {
                        return (
                            <tr key={house.id}>
                                <td>{house.address}</td>
                                <td>{house.country}</td>
                                <td>{house.price}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse} >Add</button>

        </div>
    )
}

export default HouseList