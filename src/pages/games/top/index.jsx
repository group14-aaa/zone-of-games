import React, { useState, useEffect, lazy } from 'react';
import { Link } from 'react-router-dom';

// Components
const RawgTopRatedGames = lazy(() => import(
    '../../../components/RawgTopRatedGames'));

// API
import rawgApi from "../../../services/rawgApi";

const TopRatedGames = () => {
    // State for top games list from RAWG Api
    const [allGamesList, setAllGamesList] = useState([]);

    useEffect(() => {
        // Fetch top games list when component mounts
        fetchRawgAllGamesList();
    }, []);

    const fetchRawgAllGamesList = async () => {
        try {
            const response = await rawgApi.getGamesList;

            setAllGamesList(response.data.results);
        } catch (error) {
            console.error("Error fetching top rated games:", error);
        }
    };

    return (
        <div className="grid grid-cols-4">
            <div className="bg-secondary text-text h-full hidden md:block">
                <Link to="/streams/">
                    <div className="p-5 hover:bg-accent hover:text-white ">
                        <h2 className="text-2xl font-bold">Top Games Streaming</h2>
                    </div>
                </Link>

                <Link to="/streams/most-viewed">
                    <div className="p-5 hover:bg-accent hover:text-white ">
                        <h2 className="text-2xl font-bold">Top 100 Streams</h2>
                    </div>
                </Link>

                <Link to="/games/top">
                    <div className="p-5 hover:bg-accent hover:text-white">
                        <h2 className="text-2xl font-bold ">Top Rated Games</h2>
                    </div>
                </Link>
            </div>
            <div className="col-span-4 md:col-span-3 bg-primary text-text">
                {allGamesList?.length > 0 && (
                    <RawgTopRatedGames gamesList={allGamesList} />
                )}
            </div>
        </div>
    )
}

export default TopRatedGames;
