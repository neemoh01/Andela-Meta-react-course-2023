import { useState } from 'react';
import './house.css'
import emailIcon from './Email.png'
import FormInquiry from './FormInquiry';
import PropTypes from 'prop-types'
import CurrencyFormatter from './helpers/CurrencyFormatter'


const House = ({ house }) => {

    const [inquiryShown, setInquiryShown] = useState(false);
    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    }


    return (
        <div>
            <div className='row mt-2'>
                <h5 className='col-md12'>
                    {house.country}
                </h5>
            </div>
            <div className='row'>
                <h6 className='col-md-12'>
                    {house.address}
                </h6>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <img src={`/images/${house.photo}.jpeg`} alt='House' />
                </div>
                <div className='col-md-5'>
                    <p className='price'>
                        {CurrencyFormatter.format(house.price)}
                    </p>
                    <p>{house.description}</p>
                    <img src={emailIcon} height='50' alt='inquiry' onClick={inquiryClick} />
                    {inquiryShown && <FormInquiry house={house} />}
                </div>
            </div>
        </div>

    );
}

//  propTypes is a static property of a component that is an object whose keys are 
// the names of the properties that the component expects to receive, and whose 
// values are the data types of those properties.
House.propTypes = {
    house: PropTypes.object.isRequired
}

export default House;