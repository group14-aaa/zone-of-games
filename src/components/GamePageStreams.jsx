import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

// Style
import "../assets/styles/twitch.css";

// Api
import twitchApi from "../services/twitchApi";



const ViewStreams = ({ gameName }) => {
    const [twitchGameId, setTwitchGameId] = useState([]);
    const [streamsByGameId, setStreamsByGameId] = useState([]);
    const [selectedStream, setSelectedStream] = useState(null);

    useEffect(() => {
        console.log(gameName);
        fetchTwitchGameId(gameName);
    }, [gameName]);

    useEffect(() => {

        if (twitchGameId) {
            fetchTwitchStreamsByGameId(twitchGameId);
        }
    }, [twitchGameId]);

    // Get top streams from Twitch Api
    const fetchTwitchGameId = async (gameName) => {
        try {
            const response = await twitchApi.getTwitchGameId(gameName);
            console.log(response.data.data[0].id);
            // console.log(response.data.data);
            setTwitchGameId(response.data.data[0].id);
        } catch (error) {
            console.error('Error fetching twitch streams:', error);
        }
    };

    // Get top streams from Twitch Api
    const fetchTwitchStreamsByGameId = async (twitchGameId) => {
        try {
            const response = await twitchApi.getTwitchStreamsByGameId(twitchGameId);
            console.log(response.data.data);
            setStreamsByGameId(response.data.data);
        } catch (error) {
            console.error('Error fetching twitch streams:', error);
        }
    };

    // Function to handle thumbnail click and start playing the stream
    const handleThumbnailClick = (stream) => {
        setSelectedStream(stream);
    };

    return (

        <div className="text-text">
            <h2 className="text-3xl font-bold text-gray-400 mb-4 mt-6 text-center">
                Most viewed Live Streams on Twitch - {gameName}
            </h2>
            <div className="flex flex-wrap justify-center">
                {streamsByGameId.map((stream) => (
                    <div
                        key={stream.id}
                        className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-secondary rounded overflow-hidden shadow-lg m-5 group hover:scale-105 transition-all duration-300 ease cursor-pointer"
                    >
                        {selectedStream && selectedStream.id === stream.id ? (
                            <div className='player-wrapper'>
                                <ReactPlayer
                                    className='react-player'
                                    url={`https://www.twitch.tv/${stream.user_name}`}
                                    width="100%"
                                    height="100%"
                                    controls
                                    playing
                                />
                            </div>
                        ) : (
                            <div className="thumbnail-container relative w-full h-40 cursor-pointer">
                                {stream.thumbnail_url ? (
                                    <img
                                        src={stream.thumbnail_url.replace('{width}', '640').replace('{height}', '360')}
                                        alt={`Thumbnail for ${stream.user_name}`}
                                        width="100%"
                                        height="100%"
                                        onClick={() => handleThumbnailClick(stream)}
                                        className="w-full h-full object-cover rounded-md mb-2 scale-95"
                                    />
                                ) : (
                                    <div className="placeholder w-full h-full bg-gray-300 m-3 flex items-center justify-center">
                                        <span className="text-gray-500">
                                            No Thumbnail
                                        </span>
                                    </div>
                                )}
                                <div className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={() => handleThumbnailClick(stream)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="48"
                                        height="48"
                                        fill="#fff"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        )}
                        <div className="px-6 py-4">
                            <div className="font-bold text-base mb-2">
                                <h3 className="text-text text-lg font-semibold">
                                    {stream.user_name}</h3>
                            </div>
                            <p className='text-text'>Viewers: {stream.viewer_count}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewStreams;
