
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './style.css';
import Header from './components/Header'
import FeaturedHouse from './components/FeaturedHouse'
import HouseFilter from './components/HouseFilter'
import SearchResult from './components/SearchResult'
import HouseFromQuery from "./components/HouseFromQuery";
import UseHouses from "./hooks/UseHouses";
import UseFeaturedHouses from "./hooks/UseFeaturedHouses";
import HousesContext from './context/HouseContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HouseList from './components/HouseList'


function App() {

  const allHouses = UseHouses();

  const featuredhouses = UseFeaturedHouses(allHouses);


  return (
    <Router>
      <HousesContext.Provider value={{ allHouses }}>
        <div className="container">
          <Header subtitle="Providing Houses All Over The World" />
          <NavBar />

          <Switch>
            <Route path="/filter">
              <HouseFilter />
            </Route>

            <Route path="/houses">
              <HouseList />
            </Route>

            <Route path="/searchresults/:country">
              <SearchResult />
            </Route>



            <Route path="/house/:id">
              <HouseFromQuery />
            </Route>

            <Route exact path="/">
              <FeaturedHouse house={featuredhouses} />
            </Route>


          </Switch>

          <Footer />
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
