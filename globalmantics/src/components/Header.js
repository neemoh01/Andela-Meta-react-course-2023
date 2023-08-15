import React from 'react'
import './main.css'
const Header = ({ subtitle }) => {
    return (
        <header className="row">
            <div className='col-md-5'>
                <img src='#' className="logo" alt="logo" />
            </div>
            <div className='col-md-7 mt-5 subtitle'>
                {subtitle}
            </div>
        </header>
    )
}

export default Header