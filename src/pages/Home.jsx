import React, { useState, useEffect } from "react";

// API
import rawgApi from "../services/rawgApi";

// Components
import GameBanner from "../components/GameBanner";
import RawgGenreList from "../components/RawgGenreList";
import RawgTopRatedGames from "../components/RawgTopRatedGames";
import RawgGamesByGenreId from "../components/GamesByGenre";
import AllGamesByPlatform from "../components/GamesByPlatform";


const Home = () => {
   // State for top games list from RAWG Api
   const [allGamesList, setAllGamesList] = useState([]);
   // State for top games list from RAWG Api
   const [allGamesByGenreId, setAllGamesByGenreId] = useState([]);
   //state for genres at side
   const [showGenres, setShowGenres] = useState(false);
    //state for platform at side
    const [showPlatforms, setShowPlatforms] = useState(false);
      // State for games by platform
   const [allGamesByPlatform, setAllGamesByPlatform] = useState([]); 
   

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
         console.error("Error fetching top rated games:", error);
      }
   };

   const fetchRawgGamesByGenreId = async (id) => {
      try {
         const response = await rawgApi.getGamesByGenreId(id);
      

         setAllGamesByGenreId(response.data.results);
      } catch (error) {
         console.log('An error occurred while trying to get games by genre', error);
      }
   }

   const fetchRawgGamesByPlatform = async () => {
      try {
         const response = await rawgApi.getPlatformList();
   
         setAllGamesByPlatform(response.data.results);
      } catch (error) {
         console.log('An error occurred while trying to get games by platform', error);
      }
   }

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
                  <AllGamesByPlatform onPlatformSelect={(allGamesByPlatform) => fetchRawgGamesByPlatform(onPlatformSelect)} />
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
