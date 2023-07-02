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
//import TopCountries from "./components/TopCountries";
import ChoroplethMap from "./components/ChoroplethMap";

//import data from "./utils/data.json"

function App() {
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
      {
        console.log("fucntion maps", data);
      }

      setMapCountries(data);
    });
  }, []);

  return (
    <>
      {console.log("mapCountries", mapCountries)}
      <h2>Historia de Internet</h2>
      {internetUsers.length != 0 &&
      usersCountriesYear.length != 0 &&
      topCountriesData.length != 0 &&
      mapCountries !== undefined ? (
        <>
          <InternetUsersChart data={internetUsers} />
          <HeatmapChart data={usersCountriesYear} />
          <ChoroplethMap data={mapCountries} />
        </>
      ) : null}
    </>
  );
}

export default App;
