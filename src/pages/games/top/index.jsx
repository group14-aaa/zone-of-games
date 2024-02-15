import React, { useState, useEffect, lazy } from 'react';

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
            {/* <div className="bg-primary text-text h-full hidden md:block">
                Streams Sidebar
            </div> */}
            <div className="col-span-4 bg-primary text-text">
                {allGamesList?.length > 0 && (
                    <RawgTopRatedGames gamesList={allGamesList} />
                )}
            </div>
        </div>
    )
}

export default TopRatedGames;
