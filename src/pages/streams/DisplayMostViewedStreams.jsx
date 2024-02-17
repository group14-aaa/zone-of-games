import React from "react";
import LinksSidebar from "../../components/LinksSidebar";
import TwitchTopStreams from "../../components/TwitchTopStreams";

const DisplayMostViewedStreams = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="bg-secondary text-text h-full hidden md:block">
                <LinksSidebar />
            </div>
            <div className="col-span-4 md:col-span-3 bg-primary text-text">
                <TwitchTopStreams />
            </div>
        </div>
    )
}
export default DisplayMostViewedStreams;
