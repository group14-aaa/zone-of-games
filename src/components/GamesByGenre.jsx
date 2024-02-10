import React, { useState, useEffect } from 'react';
import RawgTopRatedGames from './RawgTopRatedGames';
import rawgApi from '../services/rawgApi';

const GamesByGenre = ({ selectedGenre }) => {
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await rawgApi.getGamesByGenreId({
                    params: {
                        genres: selectedGenre,
                        ordering: '-rating',
                        page_size: 20
                    }
                });
                setGamesList(response.data.results);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, [selectedGenre]); // Fetch games whenever selectedGenre changes

    return <RawgTopRatedGames gamesList={gamesList} genre={selectedGenre} />;
};

export default GamesByGenre;
