import axios from "axios";

const RAWG_API_KEY = "9932deaed8d54313ab121a703e996f36";

const axiosResponse = axios.create({
   baseURL: "https://api.rawg.io/api",
});

const getAllGames = axiosResponse.get("/games?key=" + RAWG_API_KEY);

export default {
   getAllGames,
};
