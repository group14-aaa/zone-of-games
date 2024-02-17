import React, { lazy } from "react";

const GameBanner = lazy(() => import("./GameBanner"));
const RawgGamesByGenreAndPlatformId = lazy(() => import("./RawgGamesByGenreAndPlatformId"));

import Loading from "./Loading";


const MainContent = ({
  allGamesByGenreIdAndPlatformId,
  randomGames,
  selectedGenreName,
  selectedPlatformName,
  currentPage,
  onPrevPage,
  onNextPage,
}) => (
  <div className="col-span-4 md:col-span-3 bg-primary text-text">
    {randomGames.length > 0 ? <GameBanner randomGames={randomGames} /> : <Loading />}

    <RawgGamesByGenreAndPlatformId
      gamesByGenreAndPlatformList={allGamesByGenreIdAndPlatformId}
      genreName={selectedGenreName}
      platformName={selectedPlatformName}
      pageNumber={currentPage}
    />

    {/* Pagination Controls */}
    <div className="text-text flex justify-center items-center gap-5 my-20">
      <button
        className="bg-secondary  hover:text-white hover:bg-accent px-4 py-2 rounded-lg mr-2"
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <button
        className="bg-secondary hover:text-white hover:bg-accent px-4 py-2 rounded-lg"
        onClick={onNextPage}
      >
        Next Page
      </button>
    </div>
    {/* Other components */}
  </div>
);

export default MainContent;
