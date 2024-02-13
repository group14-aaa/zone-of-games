import React, { lazy } from 'react';

// Components
const TwitchTopGames = lazy(() => import('../../components/TwitchTopGames'));



const Streams = () => {
    return (
        <div className="grid grid-cols-4">
            {/* <div className="bg-primary text-text h-full hidden md:block">
                Streams Sidebar
            </div> */}
            <div className="col-span-4 bg-primary text-text">
                <TwitchTopGames />
            </div>
        </div>
    )
}
export default Streams;
