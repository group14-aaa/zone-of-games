import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

const GameBanner = ({ randomGames }) => {
   return (
      <Swiper
         effect={"cube"}
         grabCursor={true}
         loop={true}
         cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 50,
            shadowScale: 0.9,
         }}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
            dynamicBullets: true,
         }}
         modules={[EffectCube, Pagination, Autoplay]}
         className="w-5/6"
      >
         {randomGames.map((game, index) => (
            <SwiperSlide key={game.id} className="flex items-center justify-center my-[40px]">
               <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
                  <h2 className="text-white text-pretty text-5xl font-black text-center">{game.name}</h2>
               </div>
               <Link to={`/games/${game.id}`}>
                  <img loading="lazy" width={300} height={400} className="w-full h-[400px] object-cover" src={game.background_image} alt={`Game ${index + 1}`} />
               </Link>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default GameBanner;
