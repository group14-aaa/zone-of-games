import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const GameBanner = ({ gameList }) => {
   const carouselSettings = {
      slidesPerView: 3, // Adjust based on desired width or number of items
      centeredSlides: true,
      loop: true,
      effect: "coverflow",
      coverflowEffect: {
         rotate: 50, // Adjust for desired 3D effect
         stretch: 0, // Control card stretching (0-100)
         depth: 100, // Set z-axis depth (higher = stronger effect)
         modifier: 2, // Adjust how slides slide past each other (1-5)
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         // Optional breakpoints for responsive adjustments
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 3,
         },
      },
   };

   return (
      <div className="swiper-container">
         <h1 className="heading">Top 10 Games</h1>
         <Swiper {...carouselSettings}>
            {gameList.slice(0, 10).map((game, index) => (
               <SwiperSlide key={game.id}>
                  <Link to={`/game/${game.id}`}>
                     <img src={game.background_image} alt={`Game ${index + 1}`} style={{ width: "100%", height: "auto" }} />
                     <div className="game-info">
                        <h4>{game.name}</h4>
                        <span>{game.genres.map((genre) => genre.name).join(", ")}</span>
                     </div>
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default GameBanner;
