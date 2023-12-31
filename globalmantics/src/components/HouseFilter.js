import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import HousesContext from "../context/HouseContext";


const HouseFilter = () => {
    const { allHouses } = useContext(HousesContext);

    const history = useHistory();

    const countries = allHouses
        ? Array.from(new Set(allHouses.map(h => h.country)))
        : [];
    countries.unshift(null);

    const onSearchChange = (e) => {
        const country = e.target.value;
        history.push(`/searchresults/${country}`);
    };

    return (
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for your dream house in country:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" aria-label="Default select example"
                    onChange={onSearchChange}>
                    <option value="" selected>Country</option>
                    {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default HouseFilter;