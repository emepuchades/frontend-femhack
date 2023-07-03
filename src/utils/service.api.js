import axios from "./backend.config.js";
import abbreviations from "./abbreviations.json";

export const getInternetUsers = async () => {
  const startYear = 1990;
  const internetUsersYear = [];
  const countries = await getCountries();

  try {
    for (let year = startYear; year < 2021; year++) {
      const response = await axios.get(`/year/${year}`);
      let internetUsersTotal = 0;

      for (let i = 0; i < 213; i++) {
        const countryData = response.data.Data[countries[i]];
        const internetUsers = countryData?.internet_users_number || 0;
        internetUsersTotal += internetUsers;
      }

      internetUsersYear.push({
        year: year,
        total: internetUsersTotal,
      });
    }

    return internetUsersYear;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw new Error("Error al obtener los datos");
  }
};

export const getInternetUsersAndYear = async () => {
  const startYear = 2000;
  const endYear = 2020;
  const countries = await getCountries();
  const internetUsersYear = [];
  const chunkSize = 10;
  const smallArrays = [];

  try {
    for (let year = startYear; year <= endYear; year++) {
      const response = await axios.get(`/year/${year}`);
      const yearData = {
        id: year.toString(),
        data: [],
      };

      for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryData = response.data.Data[country];
        const internetUsers = countryData?.internet_users_number || 0;
        if (i === 10) {
          break;
        }
        if (internetUsers > 0) {
          yearData.data.push({
            x: country,
            y: internetUsers,
          });
        } else {
          yearData.data.push({
            x: country,
            y: 0,
          });
        }
      }

      if (yearData.data.length > 0) {
        internetUsersYear.push(yearData);
      }
    }

    for (let i = 0; i < internetUsersYear.length; i += chunkSize) {
      const chunk = internetUsersYear.slice(i, i + chunkSize);
      smallArrays.push(chunk);
    }

    return internetUsersYear;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw new Error("Error al obtener los datos");
  }
};

export const topCountries = async () => {
  const startYear = 1990;
  const endYear = 2020;
  const countries = await getCountries();
  const internetUsersYear = [];


  try {
    for (let year = startYear; year <= endYear; year++) {
      const response = await axios.get(`/year/${year}`);
      const yearData = {
        year: year,
        countries: [],
      };
      const responseData = response.data.Data;

      countries.forEach((country) => {

        const countryData = responseData[country];
        if (countryData && countryData.internet_users_number > 0) {
          yearData.countries.push({
            id: country,
            label: country,
            value: countryData.internet_users_number,
            color: "hsl(50, 70%, 50%)",
          });
        }
      });

      yearData.countries.sort(
        (a, b) => b.internet_users_number - a.internet_users_number
      );

      yearData.countries = yearData.countries.slice(0, 10);

      if (yearData.countries.length > 0) {
        internetUsersYear.push(yearData);
      }
    }

      console.log('internetUsersYear', internetUsersYear)
    return internetUsersYear;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw new Error("Error al obtener los datos");
  }
};

export const mapCountriesPerYear = async () => {
  const response = await axios.get("/year/2020");
  const data = response.data.Data;

  const formattedData = Object.keys(data).map((country) => {
    const countryCode = Object.keys(abbreviations).find(
      (key) => abbreviations[key] === country
    );

    const internetUsersNumber = data[country].internet_users_number;

    return {
      id: countryCode,
      value: internetUsersNumber,
    };
  });
  return formattedData;
};

export const getCountries = async () => {
  try {
    const response = await axios.get("/countries");
    return response.data.Countries;
  } catch (error) {
    throw new Error("Error al obtener los datos");
  }
};

export default getInternetUsers;
