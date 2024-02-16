import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { MdRateReview } from "react-icons/md";
import { FaGripfire } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const RawgGamesByGenreAndPlatformId = ({
   gamesByGenreAndPlatformList,
   genreName,
   platformName }) => {

   const [gamesList, setGamesList] = useState([]);

   useEffect(() => {
      setGamesList(gamesByGenreAndPlatformList);
   }, [gamesByGenreAndPlatformList]);

   return (
      <div className="p-5">
         <h2 className="text-3xl font-bold text-gray-400 my-6 cursor-pointer text-center">
            {platformName ? "" : "Genre - "} {platformName} - {genreName} Games
         </h2>

         <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap w-full justify-center">
               {gamesList.map((game) => (
                  <div
                     key={game.id}
                     className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-secondary rounded overflow-hidden shadow-lg m-4 group hover:scale-110 transition-all duration-300 ease cursor-pointer"
                  >
                     <Link to={`/games/${game.id}`}>
                        <img className="w-full h-40 object-cover" src={game.short_screenshots[0].image} alt={game.name} />
                     </Link>
                     <div className="absolute top-0 right-0 p-2 bg-gray-800 text-white rounded-bl">
                        <FcRating alt="MetaCritic Rating" /> {game.metacritic}
                     </div>
                     <div className="px-6 py-4">
                        <div className="font-bold text-base mb-2">{game.name}</div>
                        <div className="flex items-center gap-3 justify-center">
                           <p className="text-gray-400 text-sm flex items-center">
                              <FaStarHalfAlt alt="The number of ratings" /> {game.rating}
                           </p>
                           <p className="text-gray-400 text-sm flex items-center">
                              <MdRateReview alt="The number of reviews" /> {game.reviews_count}
                           </p>
                           <p className="text-gray-400 text-sm flex items-center">
                              <FaGripfire alt="Suggestions" /> {game.suggestions_count}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default RawgGamesByGenreAndPlatformId;
