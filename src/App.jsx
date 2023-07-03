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
import TopCountries from "./components/TopCountries";
import imageLoading from "./assets/web_ evolutio_logo.png"
import Footer from "./components/Footer/Footer";

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
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {loading ? (
        internetUsers.length != 0 &&
        usersCountriesYear.length != 0 &&
        topCountriesData.length != 0 &&
        mapCountries !== undefined ? (
          <>
            <Navbar />
            <InternetUsersChart data={internetUsers} />
            <HeatmapChart data={usersCountriesYear} />
            <TopCountries data={topCountriesData} />
            <ChoroplethMap data={mapCountries} />
            <Footer />
          </>
        ) : null
      ) : (
        <div className="loading-container">
          <img
            src={imageLoading}
            alt="imagen-loading"
            className="image-loading"
          />
          <h1>Loading</h1>
        </div>
      )}
    </>
  );
}

export default App;
