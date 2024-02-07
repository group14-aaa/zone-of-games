import axios from 'axios';

const RAWG_API_BASE_URL = 'https://api.rawg.io/api/';
const RAWG_API_KEY = '';

export const getGamesByGenre = async (genre) => {
  try {
    const response = await axios.get(`${RAWG_API_BASE_URL}games?key=${RAWG_API_BASE_URL}&genres=${genre}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching games from Rawg API:', error);
    throw error;
  }
};
