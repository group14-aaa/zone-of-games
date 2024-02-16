import React, { lazy } from 'react';
import { Link } from 'react-router-dom';

// Components
const TwitchTopGames = lazy(() => import('../../components/TwitchTopGames'));

const TopGamesStreaming = () => {
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
                <TwitchTopGames />
            </div>
        </div>
    )
}

export default TopGamesStreaming;
