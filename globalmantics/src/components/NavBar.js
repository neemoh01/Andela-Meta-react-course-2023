import './main.css'

const NavBar = () => {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Buy/Rent Now</a>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/filter">Search</a>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default NavBar