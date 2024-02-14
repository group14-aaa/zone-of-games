import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "../assets/styles/swiperstyle.css";

const GameBanner = ({ gameList }) => {
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
         pagination={true}
         modules={[EffectCoverflow, Pagination]}
         className="mySwiper"
      >
         {gameList.slice(0, 10).map((game, index) => (
            <SwiperSlide key={game.id}>
               <Link to={`/game/${game.id}`}>
                  <img src={game.background_image} className="w-100 h-50 object-cover" alt={`Game ${index + 1}`} />
                  <div className="game-info">
                     <h4>{game.name}</h4>
                     <span>{game.genres.map((genre) => genre.name).join(", ")}</span>
                  </div>
               </Link>
            </SwiperSlide>
         ))}
         <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
               <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
               <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
         </div>
      </Swiper>
   );
};

export default GameBanner;
