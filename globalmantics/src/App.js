
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style.css';
import Header from './components/Header'
import FeaturedHouse from './components/FeaturedHouse'
import HouseFilter from './components/HouseFilter'
import SearchResult from './components/SearchResult'
import HouseFromQuery from "./components/HouseFromQuery";
import UseHouses from "./hooks/UseHouses";
import UseFeaturedHouses from "./hooks/UseFeaturedHouses";

function App() {

  const allHouses = UseHouses();

  const featuredhouses = UseFeaturedHouses(allHouses);


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
