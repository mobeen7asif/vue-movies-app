import axios from "axios";

export const key = "1879535308e73a5cf51d5f9e451fd44e";
export const API = axios.create({
  baseURL: `https://api.themoviedb.org/3/`
});
