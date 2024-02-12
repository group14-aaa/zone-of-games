import React, { useState, useEffect } from "react";

// API
import rawgApi from "../services/rawgApi";

// Components
import GameBanner from "../components/GameBanner";
import RawgGenreList from "../components/RawgGenreList";
import RawgTopRatedGames from "../components/RawgTopRatedGames";
import RawgGamesByGenreId from "../components/GamesByGenre";
import AllGamesByPlatform from "../components/GamesByPlatform";
import RawgPlatformList from "../components/RawgPlatformList";


const Home = () => {
   // State for top games list from RAWG Api
   const [allGamesList, setAllGamesList] = useState([]);
   // State for top games list from RAWG Api
   const [allGamesByGenreId, setAllGamesByGenreId] = useState([]);
   //state for genres at side
   const [showGenres, setShowGenres] = useState(false);
   const [error, setError] = useState(null);

   //state for platform at side
   const [showPlatforms, setShowPlatforms] = useState(false);
   // State for games by platform
   const [platformList, setPlatformList] = useState([]);


   useEffect(() => {
      // Fetch top games list when component mounts
      fetchRawgAllGamesList();
      fetchRawgGamesByGenreId(4);
      fetchRawgGamesByPlatform()
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

   const fetchRawgGamesByPlatform = async () => {
      try {
         const response = await rawgApi.getPlatformList();

         setPlatformList(response.data.results);
      } catch (error) {
         console.log('An error occurred while trying to get games by platform', error);
      }
   }

   const handlePlatformSelect = async (platformId) => {
      try {
         const response = await rawgApi.getGamesByPlatform(platformId);
         // Update the state with the fetched games
         setAllGamesList(response.data.results);
      } catch (error) {
         console.error("Error fetching games by platform:", error);
      }
   };


   //toggle for genres
   const toggleGenres = () => {
      setShowGenres(!showGenres);
   };


   //toggle for platform
   const togglePlatforms = () => {
      setShowPlatforms(!showPlatforms);
   };

   return (
      <div className="grid grid-cols-4">
         <div className="col-span-1 bg-primary text-text flex flex-col">

  {/* genreButton */}
            <button
               onClick={toggleGenres}
               className="text-3xl font-bold text-text px-5 pt-2">
               Genre
            </button>

            {/* Platform Button */}
            <button
               onClick={togglePlatforms} // Need to add onClick handler for platform button
               className="text-3xl font-bold text-text px-5 pt-2 mt-2"> {/* Add mt-2 for margin-top */}
               Platform
            </button>


            {showGenres && (
               <div className="bg-primary text-text hidden md:block">
                  <RawgGenreList onGenreSelect={(onGenreSelect) => fetchRawgGamesByGenreId(onGenreSelect)} />
               </div>
            )}

            {showPlatforms && (
               <div className="bg-primary text-text hidden md:block">
                  <RawgPlatformList platformList={platformList} onPlatformSelect={handlePlatformSelect} />

                  {/* <AllGamesByPlatform onPlatformSelect={handlePlatformSelect} /> */}
                  {/* <AllGamesByPlatform onPlatformSelect={(allGamesByPlatform) => fetchRawgGamesByPlatform(handlePlatformSelect)} /> */}
               </div>
            )}

         </div>
         {allGamesList?.length > 0 && allGamesByGenreId.length > 0 && (
            <div className="col-span-3 bg-primary text-text">
               <GameBanner game={allGamesList[Math.floor(Math.random() * allGamesList.length)]} />
               <RawgTopRatedGames gamesList={allGamesList} />
               <RawgGamesByGenreId gamesByGenreList={allGamesByGenreId} />
               <AllGamesByPlatform />
            </div>
         )}
      </div>
   );
};

export default Home;
