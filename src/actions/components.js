import Axios from "axios";

export const types = {
  SET_CURRENT_LOCATION: "SET_CURRENT_LOCATION",
  RECIEVE_PRODUCTS: "RECIEVE_PRODUCTS",
};

export const API = Axios.create({
  baseURL: "https://asos2.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "asos2.p.rapidapi.com",
    "x-rapidapi-key": "a1dd44e2ffmsh3aef00f95706593p14a95bjsnefeb4c14f217",
  }
});
