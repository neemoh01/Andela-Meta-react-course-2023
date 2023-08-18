import { useEffect, useState, useMemo } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style.css';
import Header from './components/Header'
import FeaturedHouse from './components/FeaturedHouse'
import HouseFilter from './components/HouseFilter'
import SearchResult from './components/SearchResult'
import HouseFromQuery from "./components/HouseFromQuery";

function App() {

  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const FetchHouses = async () => {
      const resp = await fetch("/house.json");
      const houses = await resp.json();
      setAllHouses(houses);
    };
    FetchHouses();
  }
    , [])

  const featuredhouses = useMemo(() => {
    console.log("useMemo called");
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses])




  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing Houses All Over The World" />
        <HouseFilter allHouses={allHouses} />

        <Switch>

          <Route path="/searchresults/:country">
            <SearchResult allHouses={allHouses} />
          </Route>

          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses} />
          </Route>

          <Route exact path="/">
            <FeaturedHouse house={featuredhouses} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
