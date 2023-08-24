import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './search.css'
import CurrencyFormatter from './helpers/CurrencyFormatter'

const SearchRultsRow = ({ house }) => {
    const history = useHistory();

    const setActive = () => {
        history.push(`/house/${house.id}`);
    }


    return (
        <>
            <tr className="search-results-row" onClick={setActive}>
                <td>{house.address}</td>
                <td>{CurrencyFormatter.format(house.price)}</td>
                {/* 
    available for sale or rent */}
                <td>For {house.type}</td>

                {/* <td>{house.description}</td> */}
            </tr>
        </>
    );
}

export default SearchRultsRow;