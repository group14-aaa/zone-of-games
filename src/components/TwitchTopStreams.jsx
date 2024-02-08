import React, { useEffect, useState } from 'react';
import twitchApi from '../services/twitchApi';

function TwitchTopStreams() {
    // State for top streams from Twitch Api
    const [twitchTopStreams, setTwitchTopStreams] = useState([]);

    useEffect(() => {
        // Fetch top streams when component mounts
        fetchTwitchTopStreams('21779', 3); // Replace '21779' with the actual game ID
    }, []);

    // Get top streams from Twitch Api
    const fetchTwitchTopStreams = async (gameId, limit = 3) => {
        try {
            const response = await twitchApi.getTwitchStreams({
                params: {
                    game_id: gameId,
                    first: limit,
                    sort: 'viewers', // Sort by viewership
                },
            });
            // display data to the console
            // console.log(response.data.data);

            setTwitchTopStreams(response.data.data);
        } catch (error) {
            console.error('Error fetching twitch streams:', error);
        }
    };

    const loadTwitchPlayer = (channelName) => {
        return new Twitch.Embed(`twitch-embed-${channelName}`, {
            width: '100%',
            height: '180',
            channel: channelName,
            layout: 'video', // Display video only
            autoplay: false, // Do not auto-play
        });
    };

    useEffect(() => {
        // Destroy Twitch player instances before re-rendering
        twitchTopStreams.forEach((stream) => {
            const player = loadTwitchPlayer(stream.user_name);
            return () => player.destroy();
        });
    }, [twitchTopStreams]);

    return (
        <div>
            <h2>Top Twitch Streams</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {twitchTopStreams.map((stream) => (
                    <div key={stream.id} style={{ margin: '10px' }}>
                        <div id={`twitch-embed-${stream.user_name}`}></div>
                        <p>{stream.title}</p>
                        <p>Viewers: {stream.viewer_count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TwitchTopStreams;
