import './search.css'

const SearchRultsRow = ({ house }) => {

    const setActive = () => { }


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