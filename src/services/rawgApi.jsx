import axios from "axios";

const RAWG_BASE_URL = "https://api.rawg.io/api/";

const axiosCreateRawgApi = axios.create({
   baseURL: RAWG_BASE_URL,
});

const getGenreList = axiosCreateRawgApi.get("/genres?key=" + import.meta.env.VITE_RAWG_API_KEY);
const getGamesList = axiosCreateRawgApi.get("/games?key=" + import.meta.env.VITE_RAWG_API_KEY);
const getGamesByGenreId = (id) => axiosCreateRawgApi.get("/games?key=" + import.meta.env.VITE_RAWG_API_KEY + "&genres=" + id);


export default {
   getGenreList,
   getGamesList,
   getGamesByGenreId,
};
