import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// API
import rawgApi from "../services/rawgApi";

// Components
import GameBanner from "../components/GameBanner";
import RawgGenreList from "../components/RawgGenreList";
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
      // Fetch games list when component mounts
      fetchRawgAllGamesList();
      fetchRawgGamesByGenreId(4);
      fetchRawgGamesByPlatform()
   }, []);

   const fetchRawgAllGamesList = async () => {
      try {
         const response = await rawgApi.getGamesList;

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

   const fetchRawgGamesByPlatform = async () => {
      try {
         const response = await rawgApi.getPlatformList();

         setPlatformList(response.data.results);
      } catch (error) {
         setError("Error fetching games by platform");
         console.log('An error occurred while trying to get games by platform', error);
      }
   }

   if (error) {
      return (
         <div className="p-5 text-text">
            <p className="text-xl">Error: {error}</p>
         </div>
      );
   }

   const handlePlatformSelect = (platformId) => {
      // You can implement fetching games by platform here if needed
      console.log("Platform ID selected:", platformId);
   };

   if (!allGamesList) {
      return (
         <div className="flex items-center justify-center h-screen">
            <div role="status">
               <span className="text-text">Loading....</span>
            </div>
         </div>
      );
   }
   if (!allGamesByGenreId) {
      return (
         <div className="flex items-center justify-center h-screen">
            <div role="status">
               <span className="text-text">Loading....</span>
            </div>
         </div>
      );
   }

   return (
      <div className="grid grid-cols-4">
         <div className="bg-secondary text-text hidden md:block">

            <Link to='/streams/'>
               <div className="p-5 hover:bg-accent hover:text-white">
                  <h2 className="text-3xl font-bold mr-2">
                     Top Streaming
                  </h2>
               </div>
            </Link>

            <Link to='/games/top'>
               <div className="p-5 hover:bg-accent hover:text-white">
                  <h2 className="text-3xl font-bold mr-2">
                     Top Rated
                  </h2>
               </div>
            </Link>

            <RawgGenreList onGenreSelect={(onGenreSelect) => fetchRawgGamesByGenreId(onGenreSelect)} />

            <RawgPlatformList platformList={platformList} onPlatformSelect={handlePlatformSelect} />
            {/* <AllGamesByPlatform onPlatformSelect={(allGamesByPlatform) => fetchRawgGamesByPlatform(onPlatformSelect)} /> */}
         </div>

         {allGamesList?.length > 0 && allGamesByGenreId.length > 0 && (
            <div className="col-span-4 md:col-span-3 bg-primary text-text">
               <GameBanner game={allGamesByGenreId[Math.floor(Math.random() * allGamesList.length)]} />
               {/* <RawgTopRatedGames gamesList={allGamesList} /> */}
               <RawgGamesByGenreId gamesByGenreList={allGamesByGenreId} />
               {/* <AllGamesByPlatform /> */}
            </div>
         )}
      </div>
   );
};

export default Home;
