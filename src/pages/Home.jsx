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

const Home = () => {
  const [allGamesList, setAllGamesList] = useState([]);
  const [allGamesByGenreId, setAllGamesByGenreId] = useState([]);
  const [randomGame, setRandomGame] = useState({});
  const [error, setError] = useState(null);
  const [selectedPlatformId, setSelectedPlatformId] = useState(null);
  const [platformList, setPlatformList] = useState([]);

  useEffect(() => {
    // Set a random game when allGamesList or allGamesByGenreId changes
    if (allGamesList.length > 0 && allGamesByGenreId.length > 0) {
      setRandomGame(
        allGamesByGenreId[Math.floor(Math.random() * allGamesList.length)]
      );
    }
  }, [allGamesList, allGamesByGenreId]);

  useEffect(() => {
    // Fetch games list when component mounts
    fetchRawgAllGamesList();
    fetchRawgGamesByGenreId(4);
    fetchRawgGamesByPlatform();
  }, []);

  const handleApiError = (error, errorMessage) => {
    setError(errorMessage);
    console.error(`Error: ${errorMessage}`, error);
  };

  const fetchRawgAllGamesList = async () => {
    try {
      const response = await rawgApi.getGamesList;
      setAllGamesList(response?.data?.results || []);
    } catch (error) {
      handleApiError(error, "Error fetching top-rated games");
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

  const fetchRawgGamesByPlatform = async () => {
    try {
      const response = await rawgApi.getPlatformList();
      setPlatformList(response?.data?.results || []);
    } catch (error) {
      handleApiError(error, "Error fetching games by platform");
    }
  };

  if (error) {
    return (
      <div className="p-5 text-text">
        <p className="text-xl">Error: {error}</p>
      </div>
    );
  }

  const handlePlatformSelect = (platformId) => {
    setSelectedPlatformId(platformId);
    // You can implement fetching games by platform here if needed.  // pass this id so this is passed to games by genre,
    console.log("Platform ID selected:", platformId);
  };

  return (
    <div className="grid grid-cols-4">
      <div className="bg-secondary text-text hidden md:block">
        <Link to="/streams/">
          <div className="p-5 hover:bg-accent hover:text-white">
            <h2 className="text-3xl font-bold mr-2">Top Streaming</h2>
          </div>
        </Link>

        <Link to="/games/top">
          <div className="p-5 hover:bg-accent hover:text-white">
            <h2 className="text-3xl font-bold mr-2">Top Rated</h2>
          </div>
        </Link>

        <RawgGenreList
          onGenreSelect={(onGenreSelect) =>
            fetchRawgGamesByGenreId(onGenreSelect)
          }
        />

        <RawgPlatformList
          platformList={platformList}
          onPlatformSelect={handlePlatformSelect}
        />
        {/* <AllGamesByPlatform onPlatformSelect={(allGamesByPlatform) => fetchRawgGamesByPlatform(onPlatformSelect)} /> */}
      </div>

      {allGamesList?.length > 0 && allGamesByGenreId.length > 0 && (
        <div className="col-span-4 md:col-span-3 bg-primary text-text">
          {randomGame ? <GameBanner game={randomGame} /> : <Loading />}

          <RawgGamesByGenreId
            gamesByGenreList={allGamesByGenreId}
            platformId={selectedPlatformId}
          />

          {/* <RawgGamesByGenreId gamesByGenreList={allGamesByGenreId} /> */}
          {/* Other components */}
        </div>
      )}
    </div>
  );
};

export default Home;
