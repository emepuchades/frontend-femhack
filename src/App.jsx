import { useEffect, useState } from "react";
import "./App.css";
import {
  getInternetUsers,
  //getInternetUsersAndYear,
} from "./utils/service.api.js";
import InternetUsersChart from "./components/InternetUsersChart2";
//import CountryUsersChart from "./components/CountryUsersChart";

//import data from "./utils/data.json"

function App() {
  const [internetUsers, setInternetUsers] = useState([]);
  //const [countries, setCountries] = useState([]);

  useEffect(() => {
    getInternetUsers().then((data) => {
      setInternetUsers(data);
    });
    //getInternetUsersAndYear().then((data) => {
      //setCountries(data);
    //});
  }, []);


  return (
    <>
    <h2>Historia de Internet</h2>
      {internetUsers.length === 0 ? null :
        <InternetUsersChart data={internetUsers} />

      }
    </>
  );
}

export default App;
