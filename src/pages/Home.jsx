import React, { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

// Components
const GameBanner = lazy(() => import("../components/GameBanner"));
const RawgGenreList = lazy(() => import("../components/RawgGenreList"));
const RawgGamesByGenreId = lazy(() => import("../components/GamesByGenre"));
const RawgPlatformList = lazy(() => import("../components/RawgPlatformList"));

// API
import rawgApi from "../services/rawgApi";

const Home = () => {
   const [allGamesByGenreId, setAllGamesByGenreId] = useState([]);
   const [selectedPlatformId, setSelectedPlatformId] = useState(null);
   const [platformList, setPlatformList] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      // Fetch platform list when component mounts
      fetchRawgPlatformList();
   }, []);

   const handleApiError = (error, errorMessage) => {
      setError(errorMessage);
      console.error(`Error: ${errorMessage}`, error);
   };

   const fetchRawgPlatformList = async () => {
      try {
         const response = await rawgApi.getPlatformList();
         setPlatformList(response?.data?.results || []);
      } catch (error) {
         handleApiError(error, "Error fetching platform list");
      }
   };

   const fetchRawgGamesByGenreId = async (id) => {
      try {
         const response = await rawgApi.getGamesByGenreId(id);
         setAllGamesByGenreId(response?.data?.results || []);
      } catch (error) {
         handleApiError(error, "Error fetching games by genre");
      }
   };

   if (error) {
      return (
         <div className="p-5 text-text">
            <p className="text-xl">Error: {error}</p>
         </div>
      );
   }

   const handlePlatformSelect = async (platformId) => {
      setSelectedPlatformId(platformId);
      if (platformId) {
          // Fetch games by platform
          try {
              const response = await rawgApi.getGamesByPlatform(platformId);
              setAllGamesByGenreId(response?.data?.results || []);
          } catch (error) {
              handleApiError(error, "Error fetching games by platform");
          }
      }
  };

  const handleGenreSelect = (genreId) => {
   setSelectedPlatformId(null); // Reset selectedPlatformId when a genre is selected
   fetchRawgGamesByGenreId(genreId);
};

   return (
      <div className="grid grid-cols-4">
         <div className="bg-secondary text-text hidden md:block">
            <Link to="/streams/">
               <div className="p-5 hover:bg-accent hover:text-white">
                  <h2 className="text-3xl font-bold mr-2">
                     Top Streaming
                  </h2>
               </div>
            </Link>
            <Link to="/games/top">
               <div className="p-5 hover:bg-accent hover:text-white">
                  <h2 className="text-3xl font-bold mr-2">
                     Top Rated
                  </h2>
               </div>
            </Link>
            <RawgGenreList onGenreSelect={handleGenreSelect} />
            <RawgPlatformList platformList={platformList} onPlatformSelect={handlePlatformSelect} />
         </div>

         {allGamesByGenreId?.length > 0 && (
            <div className="col-span-4 md:col-span-3 bg-primary text-text">
               <RawgGamesByGenreId gamesByGenreList={allGamesByGenreId} platformId={selectedPlatformId} />
            </div>
         )}
      </div>
   );
};

export default Home;
