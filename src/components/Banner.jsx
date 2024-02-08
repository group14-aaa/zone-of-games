import React, { useEffect, useRef, useState } from "react";
import rawgApi from "../services/rawgApi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Banner() {
   const [gameBannerList, setGameBannerList] = useState([]);

   useEffect(() => {
      // Fetch top games list when component mounts
      getGameBannerList();
   }, []);
   const getGameBannerList = async () => {
      try {
         const response = await rawgApi.getGamesList;
         // display data to the console
         // console.log(response.data.results);

         // Sort the games by rating in descending order
         const gamesList = response.data.results;

         const games = gamesList.slice(0, 9);

         setGameBannerList(games);
      } catch (error) {
         console.error("Error fetching top rated games:", error);
      }
   };
   return (
      <>
         <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} modules={[Navigation, Pagination, Mousewheel, Keyboard]} className="mySwiper">
            {gameBannerList.map((game) => (
               <SwiperSlide key={game.id}>
                  <img src={game.background_image} alt={game.name} style={{ width: "100%" }} />
                  <p style={{ textAlign: "center" }}>{game.name}</p>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
}

export default Banner;
