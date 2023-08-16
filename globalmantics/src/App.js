import { useEffect, useState, useMemo } from "react"
import './style.css';
import Header from './components/Header'

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

  const FeaturedHouse = useMemo(() => {
    console.log("useMemo called");
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses])




  return (
    <div className="container">
      <Header subtitle="Providing Houses All Over The World" />
    </div>
  );
}

export default App;
