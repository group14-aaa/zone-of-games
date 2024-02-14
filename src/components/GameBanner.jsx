import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "../assets/styles/swiperstyle.css";

const GameBanner = ({ randomGames }) => {
   return (
      <Swiper
         effect={"coverflow"}
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={"auto"}
         coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
         }}
         autoplay={{
            delay: 2000,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
         }}
         modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
         className="mySwiper"
      >
         {randomGames.map((game, index) => (
            <SwiperSlide key={game.id}>
               <Link to={`/game/${game.id}`}>
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
