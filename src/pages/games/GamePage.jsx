import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FcRating } from 'react-icons/fc';

import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaApple,
  FaLink,
  FaStarHalfAlt,
  FaAndroid,
  FaLinux,
} from 'react-icons/fa';
import { GiJoystick } from 'react-icons/gi';
import { SiNintendoswitch, SiNintendo } from "react-icons/si";
import { RiMacbookLine } from "react-icons/ri";


import rawgApi from '../../services/rawgApi';

const GamePage = () => {
  const { gId } = useParams();
  const [gameData, setGameData] = useState(null);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playerConfig = {
    youtube: {
      playerVars: {
        showinfo: 0,
        modestbranding: 1,
      },
    },
  };

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await rawgApi.getGameData(gId);

        if (response.data) {
          setGameData(response.data);
        } else {
          handleInvalidApiResponse(response);
        }
      } catch (error) {
        handleFetchError();
      }
    };

    fetchGameData();
  }, [gId]);

  const handleInvalidApiResponse = (response) => {
    setError('Invalid response structure from the API');
    console.error('Invalid response structure from the API', response);
  };

  const handleFetchError = () => {
    setError('Failed to fetch game data');
    console.error('Failed to fetch game data');
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderLink = (text, href) => (
    <p className="text-lg">
      <a className="text-info hover:underline mt-2 hover:text-accent" href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </p>
  );

  const formatReleaseDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  // Helper function to render platform icons
  const renderPlatformIcon = (platformName) => {
    switch (platformName) {

      case 'Apple Macintosh':
        return <RiMacbookLine />;
      case 'Xbox':
        return <FaXbox />;
      case 'Android':
        return <FaAndroid />;
      case 'Linux':
        return <FaLinux />;
      case 'PlayStation':
        return <FaPlaystation />;
      case 'PC':
        return <FaWindows />;
      case 'macOS':
        return <FaApple />;
      case 'Nintendo Switch':
        return <SiNintendoswitch />;
      case 'Nintendo':
        return <SiNintendo />;
      case 'Xbox Series X':
        return <GiJoystick />;
      case 'Xbox One':
        return <FaXbox />;
      default:
        // Fallback to text if no icon is available
        return <span>{platformName}</span>;
    }
  };

  if (error) {
    return (
      <div className="p-5 text-text">
        <p className="text-xl">Error: {error}</p>
      </div>
    );
  }

  if (!gameData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div role="status">
          <span className="text-text">Loading....</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative text-text p-5">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden shadow-lg">
        {/* Background overlay */}
        <div className='absolute bottom-0 p-5 h-full w-full'></div>
        {/* Game background image */}
        <img
          className="w-full object-cover rounded-md shadow-lg"
          style={{ maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0))' }}
          src={gameData.background_image}
          alt={gameData.name}
        />
      </div>

      <div className="relative flex flex-col items-center mt-20 mb-20">
        {/* Title, Release Date, and Rating */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-6">{gameData.name}</h1>
          <p className="text-lg">Released date: {formatReleaseDate(gameData.released)}</p>
          <p className="text-xl font-bold flex items-center justify-center gap-1 mt-2">
            <FaStarHalfAlt alt="The number of ratings" /> {gameData.rating} / {gameData.rating_top}
          </p>
        </div>

        {/* Trailer and Description */}
        <div className="flex flex-col md:flex-row w-full mt-20 mb-20">
          <div className="md:w-1/2 md:pr-8 mb-16">
            {/* Video Placeholder For Youtube Trailer */}
            <div className="border border-accent rounded-md overflow-hidden">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=c0i88t0Kacs?si=IrLmfJ2ZpGeE3ytx"
                width="100%"
                height="500px"
                controls
                onPlay={handleVideoPlay}
                config={playerConfig}
                style={{ opacity: isVideoPlaying ? 1 : 0.5, transition: 'opacity 0.5s' }}
              />
            </div>
          </div>

          <div className="md:w-1/2 md:pl-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Game Description</h2>
              <p className={`text-lg leading-relaxed ${showFullDescription ? 'whitespace-pre-line' : 'line-clamp-3'}`}>
                {gameData.description_raw}
              </p>
              <button className="text-blue-500 hover:underline mt-2" onClick={toggleDescription}>
                {showFullDescription ? 'Show Less' : 'Show More'}
              </button>
            </div>

            {/* Metacritic Score */}
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1 flex gap-2 items-center">
                  <FcRating alt="MetaCritic Rating" /> Metacritic Score: {gameData.metacritic}
                </h3>
                {renderLink('Metacritic URL', gameData.metacritic)}
              </div>
            </div>

            {/* Additional Links */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-1 flex gap-2 items-center "> <FaLink />Additional Links</h3>
              {renderLink('Game Website', gameData.website)}
              {renderLink('Reddit', gameData.reddit_url)}
            </div>

            {/* Developers */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Developers</h3>
              <div className="flex flex-wrap">
                {gameData.developers.map((dev) => (
                  <p key={dev.id} className="text-lg mr-4">
                    {dev.name}
                  </p>
                ))}
              </div>
            </div>

            {/* Genres */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Genres</h3>
              <div className="flex flex-wrap">
                {gameData.genres.map((genre) => (
                  <div key={genre.id} className="flex items-center mt-2 mr-4">
                    <img
                      src={genre.image_background}
                      alt={genre.name}
                      className="w-6 h-6 object-cover rounded-lg mr-2"
                    />
                    <p className="text-lg">{genre.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap">
                {gameData.tags.map((tag) => (
                  <p key={tag.id} className="text-lg mr-4">
                    {tag.name}
                  </p>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Platforms</h3>
              <div className="flex flex-wrap">
                {gameData.parent_platforms.map((platform, index) => (
                  <p key={index} className="text-lg mr-4">
                    {renderPlatformIcon(platform.platform.name)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
