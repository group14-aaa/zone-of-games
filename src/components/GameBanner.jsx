import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "../assets/styles/swiperstyle.css";

const GameBanner = ({ randomGames }) => {
   return (
      <Swiper
         effect={"cube"}
         grabCursor={true}
         loop={true}
         cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 25,
            shadowScale: 0.75,
         }}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
         }}
         modules={[EffectCube, Pagination, Autoplay, Navigation]}
         className="mySwiper"
      >
         {randomGames.map((game, index) => (
            <SwiperSlide key={game.id}>
               <Link to={`/games/${game.id}`}>
                  <img src={game.background_image} alt={`Game ${index + 1}`} />
                  <div className="game-info">
                     <h4 className="text-center">{game.name}</h4>
                  </div>
               </Link>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default GameBanner;
