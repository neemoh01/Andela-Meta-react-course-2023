
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
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
