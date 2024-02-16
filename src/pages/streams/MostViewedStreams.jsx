import React, { lazy } from 'react';
import TwitchTopStreams from '../../components/TwitchTopStreams';

// Components

const Streams = () => {
    return (
        <div className="grid grid-cols-4">
            {/* <div className="bg-primary text-text h-full hidden md:block">
                Streams Sidebar
            </div> */}
            <div className="col-span-4 bg-primary text-text">
                <TwitchTopStreams />
            </div>
        </div>
    )
}
export default Streams;
