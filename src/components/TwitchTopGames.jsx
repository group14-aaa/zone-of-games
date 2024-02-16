import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import twitchApi from "../services/twitchApi";

function TwitchTopGames() {
   const [twitchTopGames, setTwitchTopGames] = useState([]);

   useEffect(() => {
      // Fetch top games list when component mounts
      getTwitchTopGames();
   }, []);

   // Get top games list from Twitch Api
   const getTwitchTopGames = async () => {
      try {
         const response = await twitchApi.getTwitchTopGames;

         setTwitchTopGames(response.data.data);
      } catch (error) {
         console.error("Error fetching top games list from Twitch:", error);
      }
   };
   return (
      <div className="p-5">
         <h2 className="text-3xl font-bold text-gray-400 mb-4 mt-6 text-center">
            Top Games Streaming on Twitch
         </h2>
         <div className="flex flex-wrap -mx-4">

            {twitchTopGames.map((game) => (
               <div key={game.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4">
                  <div className="bg-secondary p-4 rounded-md h-full">

                     {/* Stream game name */}
                     <h3 className="text-xl font-bold text-gray-400 mb-2 overflow-ellipsis h-16">
                        {game.name}
                     </h3>

                     {/* Stream game image */}
                     <Link to={`/streams/${game.id}`}>
                        <img src={game.box_art_url.replace("{width}", "300").replace("{height}", "400")} alt={game.name} className="w-full h-48 object-cover rounded-md mb-2" />
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default TwitchTopGames;
