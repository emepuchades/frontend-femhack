import { useEffect, useState } from "react";
import "./App.css";
import {
  getInternetUsers,
  getCountries,
  getInternetUsersAndYear,
} from "./utils/service.api.js";
import InternetUsersChart from "./components/InternetUsersChart";
import CountryUsersChart from "./components/CountryUsersChart";

//import data from "./utils/data.json"

function App() {
  const [internetUsers, setInternetUsers] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
      getInternetUsers().then((data) => {
        setInternetUsers(data);
      }); 
      getInternetUsersAndYear().then((data) => {
        setCountries(data);
      }); 
  }, [ ]);


  return (
    <>
      <h1> FEMHACK 2</h1>
      {console.log("internetUsers", internetUsers)}
      {console.log("countries", countries)}

      <InternetUsersChart data={internetUsers} />
      <CountryUsersChart data={countries} />
    </>
  );
}

export default App;
