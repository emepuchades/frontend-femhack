import { useEffect, useState } from "react";
import "./App.css";
import {
  getInternetUsers,
  getInternetUsersAndYear,
  topCountries,
  mapCountriesPerYear,
} from "./utils/service.api.js";
import InternetUsersChart from "./components/InternetUsersChart";
import HeatmapChart from "./components/HeatmapChart";
import ChoroplethMap from "./components/ChoroplethMap";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [loading, setLoading] = useState(false);
  const [internetUsers, setInternetUsers] = useState([]);
  const [usersCountriesYear, setUsersCountriesYear] = useState([]);
  const [topCountriesData, setTopCountriesData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    getInternetUsers().then((data) => {
      setInternetUsers(data);
    });
    getInternetUsersAndYear().then((data) => {
      setUsersCountriesYear(data);
    });
    topCountries().then((data) => {
      setTopCountriesData(data);
    });
    mapCountriesPerYear().then((data) => {
      setMapCountries(data);
    });

    const timeoutId = setTimeout(() => {
        setLoading(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
   <Navbar />
    {loading ? 
      internetUsers.length != 0 &&
      usersCountriesYear.length != 0 &&
      topCountriesData.length != 0 &&
      mapCountries !== undefined ? (
        <>
          <InternetUsersChart data={internetUsers} />
          <HeatmapChart data={usersCountriesYear} />
          <ChoroplethMap data={mapCountries} />
        </>
      ) : null
       : 
      <h1>Loading</h1>
      }
    </>
  );
}

export default App;
