import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const GameBanner = ({ randomGames }) => {
   return (
      <Swiper
         effect={"cube"}
         grabCursor={true}
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
         className="w-3/4 mt-4"
      >
         {randomGames.map((game, index) => (
            <SwiperSlide key={game.id}>
               <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
                  <h2 className="text-[32px] text-white text-bold">{game.name}</h2>
               </div>
               <Link to={`/games/${game.id}`}>
                  <img className="w-full h-[400px] object-cover rounded-xl" src={game.background_image} alt={`Game ${index + 1}`} />
               </Link>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default GameBanner;
