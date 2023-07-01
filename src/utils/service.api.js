import axios from "./backend.config.js";

export const getCountries = async () => {
  try {
     const response = await axios.get("/countries")
     return response.data.Countries;
    
  } catch (error) {
    throw new Error("Error al obtener los datos");
  }
};



export default getCountries;