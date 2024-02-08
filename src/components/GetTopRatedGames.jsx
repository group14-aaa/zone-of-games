import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RAWG_API_BASE_URL = 'https://api.rawg.io/api/';
const RAWG_API_KEY = '9932deaed8d54313ab121a703e996f36';

const TopRatedGames = () => {
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    const fetchTopRatedGames = async () => {
      try {
        const response = await axios.get(`${RAWG_API_BASE_URL}games?key=${RAWG_API_KEY}`);
        const games = response.data.results;
        // Sort the games by rating in descending order
        const sortedGames = games.sort((a, b) => b.rating - a.rating);
        // Get the top 9 games
        const top9Games = sortedGames.slice(0, 9);
        setTopGames(top9Games);
      } catch (error) {
        console.error('Error fetching top rated games:', error);
      }
    };

    fetchTopRatedGames();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {topGames.map((game, index) => (
        <div key={game.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full h-64 object-cover" src={game.short_screenshots[0].image} alt={game.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{`${index + 1}. ${game.name}`}</div>
            <p className="text-gray-700 text-base">Rating: {game.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRatedGames;
