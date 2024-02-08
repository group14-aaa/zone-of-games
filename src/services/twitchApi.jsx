import axios from "axios";

const TWITCH_API_BASE_URL = "https://api.twitch.tv/helix";

const axiosCreateTwitchApi = axios.create({
   baseURL: TWITCH_API_BASE_URL,
   headers: {
      "Client-ID": import.meta.env.VITE_TWITCH_CLIENT_ID,
      Authorization: `Bearer ${import.meta.env.VITE_TWITCH_OAUTH_TOKEN}`,
   },
});

const getTwitchTopGames = axiosCreateTwitchApi.get("/games/top");
const getTwitchStreams = (params) => axiosCreateTwitchApi.get("/streams", params);

export default {
   getTwitchTopGames,
   getTwitchStreams,
};
