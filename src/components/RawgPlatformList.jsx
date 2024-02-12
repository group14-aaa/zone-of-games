import React, { useEffect, useState } from 'react';

// API
import rawgApi from '../services/rawgApi';

const RawgPlatformList = ({ onPlatformSelect }) => {
    // State for Platform list from RAWG Api
    const [platformList, setPlatformList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Fetch platform list when component mounts
        fetchRawgPlatformList();
    }, []);

    // Get platform list from RAWG Api
    const fetchRawgPlatformList = async () => {
        try {
            const response = await rawgApi.getPlatformList();
            setPlatformList(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching platform list:', error);
        }
    };

    return (
        <>
            {platformList.map((item, index) => (
                // Each platform item
                <div
                    key={index}
                    onClick={() => { setActiveIndex(index); onPlatformSelect(item.id) }}
                    className={`flex gap-2 items-center mb-2 ml-5 px-2 py-2 cursor-pointer hover:bg-secondary group rounded-lg ${activeIndex === index ? "bg-secondary" : ""}`}>

                    {/* Genre image */}
                    <img
                        src={item.image_background}
                        alt={`Platform ${item.name} background`}
                        className={`w-40 h-40 object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex === index ? "scale-105" : ""}`}
                    />

                    {/* Genre name */}
                    <h3 className={`text-text text-18px group-hover:font-bold transition-all ease-out duration-300 ${activeIndex === index ? "font-bold" : ""}`}>
                        {item.name}
                    </h3>
                </div>
            ))}
        </>
    );
}

export default RawgPlatformList;
