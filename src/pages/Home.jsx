import React, { useState, useEffect } from "react";

// API
import rawgApi from "../services/rawgApi";

// Components
import GameBanner from "../components/GameBanner";
import RawgGenreList from "../components/RawgGenreList";
import RawgTopRatedGames from "../components/RawgTopRatedGames";
import RawgGamesByGenreId from "../components/GamesByGenre";

const Home = () => {
   // State for top games list from RAWG Api
   const [allGamesList, setAllGamesList] = useState([]);
   // State for top games list from RAWG Api
   const [allGamesByGenreId, setAllGamesByGenreId] = useState([]);
   //state for genres at side
   const [showGenres, setShowGenres] = useState(false);
   const [error, setError] = useState(null);


   useEffect(() => {
      // Fetch top games list when component mounts
      fetchRawgAllGamesList();
      fetchRawgGamesByGenreId(4);
   }, []);

   const fetchRawgAllGamesList = async () => {
      try {
         const response = await rawgApi.getGamesList;
         // display data to the console
         // console.log(response.data.results);

         setAllGamesList(response.data.results);
      } catch (error) {
         setError("Error fetching top rated games");
         console.error("Error fetching top rated games:", error);
      }
   };

   const fetchRawgGamesByGenreId = async (id) => {
      try {
         const response = await rawgApi.getGamesByGenreId(id);
         // display data to the console
         // console.log(response.data.results);

         setAllGamesByGenreId(response.data.results);
      } catch (error) {
         setError("Error fetching games by genre");
         console.log('An error occurred while trying to get games by genre', error);
      }
   }

   if (error) {
      return (
         <div className="p-5 text-text">
            <p className="text-xl">Error: {error}</p>
         </div>
      );
   }

   //toggle for genres
   const toggleGenres = () => {
      setShowGenres(!showGenres);
   };

   return (
      <div className="grid grid-cols-4">
         <div className="col-span-1 bg-primary text-text">

            <button
               onClick={toggleGenres}
               className="text-3xl font-bold text-text px-5">
               Genre
            </button>

            {showGenres && (
               <div className="bg-primary text-text hidden md:block">
                  <RawgGenreList onGenreSelect={(onGenreSelect) => fetchRawgGamesByGenreId(onGenreSelect)} />
               </div>
            )}
         </div>
         {allGamesList?.length > 0 && allGamesByGenreId.length > 0 && (
            <div className="col-span-3 bg-primary text-text">
               <GameBanner game={allGamesList[Math.floor(Math.random() * allGamesList.length)]} />
               <RawgTopRatedGames gamesList={allGamesList} />
               <RawgGamesByGenreId gamesByGenreList={allGamesByGenreId} />
            </div>
         )}
      </div>
   );
};

export default Home;
