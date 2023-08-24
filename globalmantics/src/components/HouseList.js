import UseHouses from "../hooks/UseHouses"
import CurrencyFormatter from "./helpers/CurrencyFormatter"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const HouseList = ({ selectHouse }) => {

    const { allHouses, newHouse } = UseHouses()

    const history = useHistory()

    const setActive = () => {
        selectHouse(allHouses)
        allHouses.map((house) => {
            history.push(`/select-house/${house.id}`)



        })



    }





    const handelNewHouse = () => {
        const addHouse = {
            id: 67,
            address: "123 Main St",
            country: "USA",
            price: 234500,
            features: ["fireplace", "pool", "finished basement"]
        }
        newHouse(addHouse)
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
                            <tr key={house.id} onClick={setActive} >
                                <td>{house.address}</td>
                                <td>{house.country}</td>
                                <td>{CurrencyFormatter.format(house.price)}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handelNewHouse} >Add</button>

        </div>
    )
}

export default HouseList