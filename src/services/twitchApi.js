import axios from 'axios';

const TWITCH_API_BASE_URL = 'https://api.twitch.tv/helix/';
const TWITCH_API_KEY = '';

export const getStreamsByGame = async (gameName) => {
  try {
    const response = await axios.get(`${TWITCH_API_BASE_URL}streams?game_name=${gameName}`, {
      headers: {
        'Client-ID': `${TWITCH_API_KEY}`,
        // other headers here
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Twitch streams:', error);
    throw error;
  }
};
