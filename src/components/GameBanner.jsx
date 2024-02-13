import React from 'react'
import { Link } from 'react-router-dom';



const GameBanner = ({ game }) => {
    return (
        <div className="flex flex-wrap justify-center mt-6 mx-3" >
            <div className="w-[1000px] mb-4">
                <div className="relative border-4 border-accent rounded-xl overflow-hidden shadow-lg ">
                    <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
                        <h2 className='text-[32px] text-white text-bold'>
                            {game.name}
                        </h2>
                        <Link to={`/games/${game.id}`}>
                            <button className='bg-accent text-white px-2 p-1 rounded-xl'>
                                View game
                            </button>
                        </Link>
                    </div>
                    {/* Game image */}
                    <Link to={`/games/${game.id}`}>
                        <img
                            className="w-full h-[400px] object-cover rounded-xl"
                            src={game.background_image}
                            alt={game.name}
                        />
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default GameBanner;
