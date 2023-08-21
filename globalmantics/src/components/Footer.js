import './main.css'

const Footer = () => {

    return (
        <>

            <footer className="footer">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-4'>
                            <h3>Globalmantics</h3>
                            <ul>
                                <li><a href='/'>About Us</a></li>
                                <li><a href='/'>Support</a></li>
                                <li><a href='/'>Blog</a></li>


                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <h3>Available</h3>
                            <ul>
                                <li><a href='/'>Houses for Sale</a></li>
                                <li><a href='/'>Houses for Rent</a></li>
                            </ul>
                        </div>
                        <p>
                            &copy; 2023 Globalmantics
                        </p>
                    </div>
                </div>


            </footer>

        </>

    )
}

export default Footer
