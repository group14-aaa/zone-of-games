import React, { useEffect, useState } from 'react'

// API
import rawgApi from '../services/rawgApi'



const RawgGenreList = ({ onGenreSelect }) => {

    // State for genre list from RAWG Api
    const [genreList, setGenreList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Fetch genre list when component mounts
        fetchRawgGenreList();
    }, [])

    // Get genre list from RAWG Api
    const fetchRawgGenreList = async () => {
        try {
            const response = await rawgApi.getGenreList;
            // display data to the console
            // console.log(response.data.results);

            setGenreList(response.data.results);
        } catch (error) {
            console.error('Error fetching genre list:', error);
        }
    }

    return (
        <>
            {genreList.map((item, index) => (
                // Each genre item
                <div
                    key={index}
                    onClick={() => { setActiveIndex(index); onGenreSelect(item.id) }}
                    className={`flex gap-2 items-center mb-2 ml-5 px-2 py-2 cursor-pointer hover:bg-secondary group rounded-lg ${activeIndex === index ? "bg-secondary" : ""}`}>

                    {/* Genre image */}
                    <img
                        src={item.image_background}
                        alt={`Genre ${item.name} background`}
                        className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex === index ? "scale-105" : ""}`}
                    />

                    {/* Genre name */}
                    <h3 className={`text-text text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex === index ? "font-bold" : ""}`}>
                        {item.name}
                    </h3>
                </div>
            ))}
        </>
    );
}

export default RawgGenreList;
