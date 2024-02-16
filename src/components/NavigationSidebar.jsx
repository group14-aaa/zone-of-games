import React, { useEffect } from "react";
import CollapsibleSection from "./CollapsibleSection";
import { Link } from "react-router-dom";

const NavigationSidebar = ({
    genreList,
    displayedGenres,
    genreActiveIndex,
    onShowMore,
    onShowLess,
    onGenreSelect,
    platformList,
    displayedPlatforms,
    platformActiveIndex,
    onShowMorePlatforms,
    onShowLessPlatforms,
    onPlatformSelect,
}) => {
    return (
        <div className="bg-secondary text-text hidden md:block">
            <Link to="/streams/">
                <div className="p-5 hover:bg-accent hover:text-white ">
                    <h2 className="text-2xl font-bold">Top Games Streaming</h2>
                </div>
            </Link>

            <Link to="/streams/most-views">
                <div className="p-5 hover:bg-accent hover:text-white ">
                    <h2 className="text-2xl font-bold">Top 100 Streams</h2>
                </div>
            </Link>

            <Link to="/games/top">
                <div className="p-5 hover:bg-accent hover:text-white">
                    <h2 className="text-2xl font-bold ">Top Rated Games</h2>
                </div>
            </Link>

            <div className="bg-secondary p-5 rounded-md shadow-md">
                {/* Collapsible Genres Section */}
                <CollapsibleSection title="Genres">
                    {genreList.slice(0, displayedGenres).map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => { onGenreSelect(item.id) }}
                            className={
                                `flex gap-2 items-center mb-2 mt-3 px-2 py-2 cursor-pointer hover:bg-accent hover:text-white group rounded-lg ${genreActiveIndex === item.id ? "bg-accent" : ""}`
                            }
                        >
                            {/* Genre image */}
                            <img
                                src={item.image_background}
                                alt={`Genre ${item.name} background`}
                                className={
                                    `w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-300 ${genreActiveIndex === index ? "scale-110" : ""}`
                                }
                            />
                            {/* Genre name */}
                            <h3 className={
                                `text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${genreActiveIndex === index ? "font-bold text-white" : ""}`
                            }>
                                {item.name}
                            </h3>
                        </div>
                    ))}

                    {/* Show more/less buttons */}
                    <div className="flex justify-between mt-4">
                        <button onClick={onShowMore} className="bg-primary text-text px-4 py-2 rounded-md hover:bg-success hover:opacity-90 transition duration-150 ease-in-out">
                            Show More
                        </button>
                        {displayedGenres > 5 && (
                            <button onClick={onShowLess} className="bg-primary text-text px-4 py-2 rounded-md hover:bg-error hover:opacity-90 transition duration-150 ease-in-out">
                                Show Less
                            </button>
                        )}
                    </div>
                </CollapsibleSection>
            </div>

            {/* Collapsible Platforms Section */}
            <div className="bg-secondary p-5 rounded-md shadow-md">
                <CollapsibleSection title="Platforms">
                    {platformList.slice(0, displayedPlatforms).map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => { onPlatformSelect(item.id); }}
                            className={
                                `flex gap-2 items-center mb-2 mt-3 px-2 py-2 cursor-pointer hover:bg-accent hover:text-white group rounded-lg ${platformActiveIndex === item.id ? "bg-accent" : ""}`
                            }
                        >
                            <img
                                src={item.image_background}
                                alt={`Platform ${item.name} background`}
                                className={
                                    `w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-300 ${platformActiveIndex === index ? "scale-110" : ""}`
                                }
                            />
                            <h3 className={
                                `text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${platformActiveIndex === index ? "font-bold text-white" : ""}`
                            }>
                                {item.name}
                            </h3>
                        </div>
                    ))}

                    {/* Show more/less buttons */}
                    <div className="flex justify-between mt-4">
                        <button onClick={onShowMorePlatforms} className="bg-primary text-text px-4 py-2 rounded-md hover:bg-success hover:opacity-90 transition duration-150 ease-in-out">
                            Show More
                        </button>
                        {displayedPlatforms > 5 && (
                            <button onClick={onShowLessPlatforms} className="bg-primary text-text px-4 py-2 rounded-md hover:bg-error hover:opacity-90 transition duration-150 ease-in-out">
                                Show Less
                            </button>
                        )}
                    </div>
                </CollapsibleSection>
            </div>
        </div>
    );
};
export default NavigationSidebar;
