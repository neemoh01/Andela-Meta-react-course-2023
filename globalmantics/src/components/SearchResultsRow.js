import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './search.css'

const SearchRultsRow = ({ house }) => {
    const history = useHistory();

    const setActive = () => {
        history.push(`/house/${house.id}`);
    }


    return (
        <>
            <tr className="search-results-row" onClick={setActive}>
                <td>{house.address}</td>
                <td>{house.price}</td>
                <td>{house.likes}</td>
            </tr>
        </>
    );
}

export default SearchRultsRow;