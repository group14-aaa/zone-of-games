import React, { useState, useEffect } from "react";
import rawgApi from "../services/rawgApi";

const RawgTopRatedGames = () => {
   // State for top games list from RAWG Api
   const [topGames, setTopGames] = useState([]);

   useEffect(() => {
      // Fetch top games list when component mounts
      fetchRawgTopRatedGames();
   }, []);

   const fetchRawgTopRatedGames = async () => {
      try {
         const response = await rawgApi.getGamesList;
         // display data to the console
         // console.log(response.data.results);

         // Sort the games by rating in descending order
         const games = response.data.results;
         const sortedGames = games.sort((a, b) => b.rating - a.rating);

         // Get the top 12 games
         const top9Games = sortedGames.slice(0, 12);

         setTopGames(top9Games);
      } catch (error) {
         console.error("Error fetching top rated games:", error);
      }
   };

   return (
      <div className="p-5">
         <h2 className="text-3xl font-bold text-gray-400 mb-4 mt-6 text-center">Top Rated Games</h2>
         <div className="flex flex-wrap justify-center">
            {/* Container for the rest of the games */}
            <div className="flex flex-wrap w-full justify-center">
               {topGames.slice(0).map((game, index) => (
                  <div key={game.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-secondary rounded overflow-hidden shadow-lg m-4">
                     {/* Game image */}
                     <img className="w-full h-40 object-cover" src={game.short_screenshots[0].image} alt={game.name} />
                     {/* Game name and rating */}
                     <div className="px-6 py-4">
                        <div className="font-bold text-base mb-2">{`${index + 1}. ${game.name}`}</div>
                        <p className="text-gray-400 text-sm">Rating: {game.rating}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default RawgTopRatedGames;
