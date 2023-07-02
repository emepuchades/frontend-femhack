import axios from "./backend.config.js";

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
  const startYear = 1990;
  const internetUsersYear = [];
  const countries = await getCountries();

  try {
    for (let year = startYear; year < 2020; year++) {
      const response = await axios.get(`/year/${year}`);
      const yearData = {
        year: year,
        countries: [],
      };

      for (let i = 0; i < 213; i++) {
        const countryData = response.data.Data[countries[i]];
        const internetUsers = countryData?.internet_users_number || 0;
        yearData.countries.push({
          country: countries[i],
          internetUsers: internetUsers,
        });
      }

      internetUsersYear.push(yearData);
    }

    return internetUsersYear;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw new Error("Error al obtener los datos");
  }
};

export const topCountries = async () => {
  
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
