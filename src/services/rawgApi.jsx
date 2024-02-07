import axios from 'axios';

const RAWG_API_BASE_URL = 'https://api.rawg.io/api/';
const RAWG_API_KEY = '9932deaed8d54313ab121a703e996f36';

//array for genre
export const gameGenres = [
  'action',
  'rpg',
  'strategy', 
  'casual',
  'simulation',
  'arcade',
  'sports',
  'racing',
  'fighting',
  'family', 
  'educational',
  'puzzle',
];

//array for 
export const platform = [
  'pc',
  'playstation',
  'xbox', 
  'ios',
  'linux',
  'nintendo',
];

//fiter by genre

export const GetGamesByGenre = async (genre) => {
  try {
    const response = await axios.get(`${RAWG_API_BASE_URL}games?key=${RAWG_API_KEY}&genres=${genre}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching games from Rawg API:', error);
    throw error;
  }
};

// Select a genre from the array
const selectedGenreIndex = 0; // Choose the index of the genre you want to select
const genre = gameGenres[selectedGenreIndex];

// Call the function to get games by the selected genre
GetGamesByGenre(genre)
  .then(games => {
    console.log('Games filtered by genre:', games);
  })
  .catch(error => {
    console.error('Error:', error);
  });
