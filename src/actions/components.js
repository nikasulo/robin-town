import Axios from "axios";

export const types = {
  SET_CURRENT_LOCATION: "SET_CURRENT_LOCATION",
  RECIEVE_PRODUCTS: "RECIEVE_PRODUCTS",
};

export const API = Axios.create({
  baseURL: "https://asos2.p.rapidapi.com",
  headers: {
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "30be4faf74msha9727ec83d063f3p150ba1jsn041a934fb2cf",
  }
});
