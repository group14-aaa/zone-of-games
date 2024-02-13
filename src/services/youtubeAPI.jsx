import axios from "axios";

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";

const axiosCreateYoutubeApi = axios.create({
   baseURL: YOUTUBE_BASE_URL,
});

const getGameTrailer = async (gameName) => {
   try {
      const response = await axiosCreateYoutubeApi.get("/search", {
         params: {
            part: "snippet",
            q: gameName + " trailer",
            key: import.meta.env.VITE_YOUTUBE_API_KEY,
            type: "video",
         },
      });
      if (response.data.items.length > 0) {
         return "https://www.youtube.com/watch?v=" + response.data.items[0].id.videoId;
      } else {
         throw new Error("No trailer found for the game");
      }
   } catch (error) {
      throw new Error("Failed to fetch game trailer: " + error.message);
   }
};

export default {
   getGameTrailer,
};
