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
    <div>
      <h2>Top 9 Rated Games:</h2>
      <ul>
        {topGames.map((game, index) => (
          <li key={game.id}>{`${index + 1}. ${game.name} - Rating: ${game.rating}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopRatedGames;
