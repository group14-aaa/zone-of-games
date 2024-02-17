import React, { useState, useEffect } from "react";
import rawgApi from "../../../services/rawgApi";
import LinksSidebar from "../../../components/LinksSidebar";
import RawgTopRatedGames from "../../../components/RawgTopRatedGames";

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
                <LinksSidebar />
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
