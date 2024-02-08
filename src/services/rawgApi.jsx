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

//array for platform 
export const platform = [
  'pc',
  'playstation',
  'xbox', 
  'ios',
  'linux',
  'nintendo',
];

export const getGamesByGenre = async (genre) => {
  try {
      const response = await axios.get(`${RAWG_API_BASE_URL}games?key=${RAWG_API_KEY}&genres=${genre}`);
      const games = response.data.results;

      // Display the response in the console
      console.log(`Games with genre in rawgAPI.jsx'${genre}':`, games);

      return games;
  } catch (error) {
      console.error('Error fetching games from Rawg API:', error);
      throw error;
  }
};




// // Function to fetch games by genre
// export const GetGamesByGenre = async (genre) => {
//   try {
//     const response = await axios.get(`${RAWG_API_BASE_URL}games?key=${RAWG_API_KEY}&genres=${genre}`);
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching games from Rawg API:', error);
//     throw error;
//   }
// };

// // Function to fetch games by a specific genre and export the result
// export const fetchGamesAndExportResult = async () => {
//   try {
//     // Select a genre from the array
//     const selectedGenreIndex = 0; // Choose the index of the genre you want to select
//     const genre = gameGenres[selectedGenreIndex];

//     // Call the function to get games by the selected genre
//     const games = await GetGamesByGenre(genre);
//     return games; // Return the result
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };
