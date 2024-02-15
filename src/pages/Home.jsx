import React, { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

// Components
const GameBanner = lazy(() => import("../components/GameBanner"));
const RawgGenreList = lazy(() => import("../components/RawgGenreList"));
const RawgGamesByGenreId = lazy(() => import("../components/GamesByGenre"));
const AllGamesByPlatform = lazy(() => import("../components/GamesByPlatform"));
const RawgPlatformList = lazy(() => import("../components/RawgPlatformList"));

// API
import rawgApi from "../services/rawgApi";

const selectRandomGames = (games, count) => {
   const shuffled = games.sort(() => 0.5 - Math.random());
   return shuffled.slice(0, count);
};

const Home = () => {
   const [allGamesByGenreId, setAllGamesByGenreId] = useState([]);
   const [randomGames, setRandomGames] = useState({});
   const [error, setError] = useState(null);
   const [selectedPlatformId, setSelectedPlatformId] = useState(null);
   const [platformList, setPlatformList] = useState([]);
   const [selectedGenreName, setSelectedGenreName] = useState("Action");
   const [currentPage, setCurrentPage] = useState(1);

   useEffect(() => {
      // Set a random game when allGamesByGenreId changes
      if (allGamesByGenreId.length > 0) {
         setRandomGames(selectRandomGames(allGamesByGenreId, 10));
      }
   }, [allGamesByGenreId]);

   useEffect(() => {
      if (selectedPlatformId) {
         fetchRawgGamesByPlatform(selectedPlatformId, currentPage);
      } else {
         fetchRawgGamesByGenreId(4, currentPage);
      }
   }, [selectedPlatformId, currentPage]);

   const fetchRawgGamesByGenreId = async (id, page) => {
      try {
         const response = await rawgApi.getGamesByGenreId(id, page);
         setAllGamesByGenreId(response?.data?.results || []);
      } catch (error) {
         handleApiError(error, "Error fetching games by genre");
      }
   };

   const fetchRawgGamesByPlatform = async () => {
      try {
         const response = await rawgApi.getPlatformList();
         setPlatformList(response?.data?.results || []);
      } catch (error) {
         handleApiError(error, "Error fetching games by platform");
      }
   };

   const handleGenreSelect = (name) => {
      // You might want to do something with the genre ID as well
      setSelectedGenreName(name);
   };

   const handleApiError = (error, errorMessage) => {
      setError(errorMessage);
      console.error(`Error: ${errorMessage}`, error);
   };

   const handlePlatformSelect = (platformId) => {
      setSelectedPlatformId(platformId);
      // You can implement fetching games by platform here if needed.  // pass this id so this is passed to games by genre,
      console.log("Platform ID selected:", platformId);
   };

   const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
   };

   if (error) {
      return (
         <div className="p-5 text-text">
            <p className="text-xl text-error">Error: {error}</p>
         </div>
      );
   }

   return (
      <div className="grid grid-cols-4">
         <div className="bg-secondary text-text hidden md:block">
            <Link to="/streams/">
               <div className="p-5 hover:bg-accent hover:text-white ">
                  <h2 className="text-2xl font-bold">Top Streaming</h2>
               </div>
            </Link>

            <Link to="/games/top">
               <div className="p-5 hover:bg-accent hover:text-white">
                  <h2 className="text-2xl font-bold ">Top Rated</h2>
               </div>
            </Link>

            {/** Render a list of game genres */}
            <RawgGenreList onGenreSelect={(onGenreSelect) => fetchRawgGamesByGenreId(onGenreSelect, 1)} onGenreName={handleGenreSelect} />

            {/** Render a list of game platforms */}
            <RawgPlatformList platformList={platformList} onPlatformSelect={handlePlatformSelect} onGenreName={handleGenreSelect} />
         </div>

         {/** Game banner and a list of games by genre or platform */}
         {allGamesByGenreId.length > 0 && (
            <div className="col-span-4 md:col-span-3 bg-primary text-text">
               {randomGames.length > 0 ? <GameBanner randomGames={randomGames} /> : <Loading />}

               <RawgGamesByGenreId
                  gamesByGenreList={allGamesByGenreId}
                  genereName={selectedGenreName}
                  platformId={selectedPlatformId}
               />

               {/* Pagination Controls */}
               <div className="text-text flex justify-center items-center gap-5 my-20">
                  <button
                     className="bg-secondary  hover:text-white hover:bg-accent px-4 py-2 rounded-lg mr-2"
                     onClick={() => handlePageChange(currentPage - 1)}
                     disabled={currentPage === 1}
                  >
                     Previous Page
                  </button>
                  <button
                     className="bg-secondary hover:text-white hover:bg-accent px-4 py-2 rounded-lg"
                     onClick={() => handlePageChange(currentPage + 1)}
                  >
                     Next Page
                  </button>
               </div>
               {/* Other components */}
            </div>
         )}
      </div>
   );
};

export default Home;
