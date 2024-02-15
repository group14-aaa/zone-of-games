import axios from "axios";

const RAWG_BASE_URL = "https://api.rawg.io/api/";

const axiosCreateRawgApi = axios.create({
   baseURL: RAWG_BASE_URL,
});

const getGenreList = axiosCreateRawgApi.get("/genres?key=" + import.meta.env.VITE_RAWG_API_KEY);
const getGamesList = axiosCreateRawgApi.get("/games?key=" + import.meta.env.VITE_RAWG_API_KEY);
const getGamesByGenreId = (id, page) => axiosCreateRawgApi.get("/games?key=" + import.meta.env.VITE_RAWG_API_KEY + "&genres=" + id + "&page=" + page);
const getGameData = (gId) => axiosCreateRawgApi.get("/games/" + gId + "?key=" + import.meta.env.VITE_RAWG_API_KEY);
const getPlatformList = () =>  axiosCreateRawgApi.get("/platforms?key=" + import.meta.env.VITE_RAWG_API_KEY);
const getGamesByPlatform = (platformId) => axiosCreateRawgApi.get("/games?key=" + import.meta.env.VITE_RAWG_API_KEY + "&platforms=" + platformId);

export default {
   getGenreList,
   getGamesList,
   getGamesByGenreId,
   getGameData,
   getPlatformList,
   getGamesByPlatform,
};
