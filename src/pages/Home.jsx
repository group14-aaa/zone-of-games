import React, { useState, useEffect } from 'react';

// Components
import Sidebar from '../components/Sidebar';
import RawgTopRatedGames from '../components/RawgTopRatedGames';
import TwitchTopGames from '../components/TwitchTopGames';
import GameBanner from '../components/GameBanner';
import rawgApi from '../services/rawgApi';
// import TwitchTopStreams from '../components/TwitchTopStreams';


const Home = () => {

    // State for top games list from RAWG Api
    const [allGamesList, setAllGamesList] = useState([]);

    useEffect(() => {
        // Fetch top games list when component mounts
        fetchRawgAllGamesList();
    }, []);

    const fetchRawgAllGamesList = async () => {
        try {
            const response = await rawgApi.getGamesList;
            // display data to the console
            // console.log(response.data.results);

            setAllGamesList(response.data.results);
        } catch (error) {
            console.error('Error fetching top rated games:', error);
        }
    };

    return (
        <div className='grid grid-cols-4'>
            <div className='bg-primary text-text h-full hidden md:block'>
                <Sidebar />
            </div>
            <div className='col-span-4 md:col-span-3 bg-primary text-text'>
                {allGamesList?.length > 0 ? (
                    <GameBanner game={allGamesList[Math.floor(Math.random() * allGamesList.length)]} />
                ) : null}
                <RawgTopRatedGames />
                <TwitchTopGames />
                {/* <TwitchTopStreams /> */}
            </div>
        </div>
    );

}

export default Home;
