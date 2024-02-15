import React, { useState, useEffect } from "react";
import rawgApi from "../services/rawgApi";


import NavigationSidebar from "../components/NavigationSidebar";
import MainContent from "../components/MainContent";

const Home = () => {
   const [allGamesByGenreIdAndPlatformId, setAllGamesByGenreIdAndPlatformId] = useState([]);
   const [randomGames, setRandomGames] = useState({});
   const [error, setError] = useState(null);

   const [selectedGenreId, setSelectedGenreId] = useState(4);
   const [selectedPlatformId, setSelectedPlatformId] = useState(4);
   const [currentPage, setCurrentPage] = useState(1);

   const [genreList, setGenreList] = useState([]);
   const [displayedGenres, setDisplayedGenres] = useState(10);
   const [genreActiveIndex, setGenreActiveIndex] = useState(4);

   const [platformList, setPlatformList] = useState([]);
   const [displayedPlatforms, setDisplayedPlatforms] = useState(10);
   const [platformActiveIndex, setPlatformActiveIndex] = useState(4);

   const [selectedGenreName, setSelectedGenreName] = useState("");
   const [selectedPlatformName, setSelectedPlatformName] = useState("");

   useEffect(() => {
      if (allGamesByGenreIdAndPlatformId.length > 0) {
         setRandomGames(selectRandomGames(allGamesByGenreIdAndPlatformId, 10));
      }
   }, [allGamesByGenreIdAndPlatformId]);

   useEffect(() => {
      fetchGamesAndLists();
   }, [selectedGenreId, selectedPlatformId, currentPage]);

   const fetchGamesAndLists = async () => {
      try {
         const [gamesResponse, genreListResponse, platformListResponse] = await Promise.all([
            rawgApi.getGamesByGenreIdAndPlatformId(selectedGenreId, selectedPlatformId, currentPage),
            rawgApi.getGenreList,
            rawgApi.getPlatformList,
         ]);

         setAllGamesByGenreIdAndPlatformId(gamesResponse.data.results);
         setGenreList(genreListResponse.data.results);
         setPlatformList(platformListResponse.data.results);

         // Get selected genre and platform names
         const selectedGenre = genreListResponse.data.results.find((genre) => genre.id === selectedGenreId);
         const selectedPlatform = platformListResponse.data.results.find((platform) => platform.id === selectedPlatformId);

         setSelectedGenreName(selectedGenre ? selectedGenre.name : "");
         setSelectedPlatformName(selectedPlatform ? selectedPlatform.name : "");
      } catch (error) {
         handleApiError(error, "Error fetching data");
      }
   };

   const handleApiError = (error, errorMessage) => {
      setError(errorMessage);
      console.error(`Error: ${errorMessage}`, error);
   };

   const selectRandomGames = (games, count) => {
      const shuffled = games.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
   };

   const handleShowMore = (setDisplayed, currentCount) => {
      setDisplayed(currentCount + 5);
   };

   const handleShowLess = (setDisplayed, currentCount) => {
      setDisplayed(Math.max(currentCount - 5, 5));
   };

   const handleSelect = (setId, setIndex, id) => {
      setId(id);
      setIndex(id);
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
         {/* Navigation Sidebar */}
         <NavigationSidebar
            genreList={genreList}
            displayedGenres={displayedGenres}
            genreActiveIndex={genreActiveIndex}
            onShowMore={() => handleShowMore(setDisplayedGenres, displayedGenres)}
            onShowLess={() => handleShowLess(setDisplayedGenres, displayedGenres)}
            onGenreSelect={(genreId) => handleSelect(setSelectedGenreId, setGenreActiveIndex, genreId)}
            platformList={platformList}
            displayedPlatforms={displayedPlatforms}
            platformActiveIndex={platformActiveIndex}
            onShowMorePlatforms={() => handleShowMore(setDisplayedPlatforms, displayedPlatforms)}
            onShowLessPlatforms={() => handleShowLess(setDisplayedPlatforms, displayedPlatforms)}
            onPlatformSelect={(platformId) => handleSelect(setSelectedPlatformId, setPlatformActiveIndex, platformId)}
         />

         {/* Main Content */}
         <MainContent
            allGamesByGenreIdAndPlatformId={allGamesByGenreIdAndPlatformId}
            randomGames={randomGames}
            selectedGenreName={selectedGenreName}
            selectedPlatformName={selectedPlatformName}
            currentPage={currentPage}
            onPrevPage={() => handlePageChange(currentPage - 1)}
            onNextPage={() => handlePageChange(currentPage + 1)}
         />
      </div>
   );
};

export default Home;
