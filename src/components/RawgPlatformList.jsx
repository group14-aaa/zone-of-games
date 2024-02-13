import React, { useEffect, useState } from 'react';
import rawgApi from '../services/rawgApi';
import CollapsibleSection from './CollapsibleSection';



const RawgPlatformList = ({ onPlatformSelect }) => {
    const [platformList, setPlatformList] = useState([]);
    const [displayedPlatforms, setDisplayedPlatforms] = useState(5);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetchRawgPlatformList();
    }, []);

    const fetchRawgPlatformList = async () => {
        try {
            const response = await rawgApi.getPlatformList();
            setPlatformList(response.data.results);
        } catch (error) {
            console.error('Error fetching platform list:', error);
        }
    };

    const handleShowMore = () => {
        setDisplayedPlatforms(displayedPlatforms + 5);
    };

    const handleShowLess = () => {
        setDisplayedPlatforms(Math.max(displayedPlatforms - 5, 5));
    };

    return (
        <div className="bg-secondary p-5 rounded-md shadow-md">

            {/* Collapsible Platforms Section */}
            <CollapsibleSection title="Platforms">
                {platformList.slice(0, displayedPlatforms).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setActiveIndex(index);
                            onPlatformSelect(item.id);
                        }}
                        className={`flex gap-2 items-center mb-2 mt-3 px-2 py-2 cursor-pointer hover:bg-accent hover:text-white group rounded-lg ${activeIndex === index ? "bg-accent" : ""}`}
                    >
                        <img
                            src={item.image_background}
                            alt={`Platform ${item.name} background`}
                            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex === index ? "scale-105" : ""}`}
                        />
                        <h3 className={`text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex === index ? "font-bold text-white" : ""}`}>
                            {item.name}
                        </h3>
                    </div>
                ))}

                <div className="flex justify-between mt-4">
                    <button
                        onClick={handleShowMore}
                        className="bg-primary text-text px-4 py-2 rounded-md hover:bg-success hover:opacity-90 transition duration-150 ease-in-out"
                    >
                        Show More
                    </button>
                    {displayedPlatforms > 5 && (
                        <button
                            onClick={handleShowLess}
                            className="bg-primary text-text px-4 py-2 rounded-md hover:bg-error hover:opacity-90 transition duration-150 ease-in-out"
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </CollapsibleSection>
        </div>
    );
};

export default RawgPlatformList;
