import React, { useEffect } from 'react'



const GameBanner = ({ game }) => {
    useEffect(() => {
        // display game data
        // console.log(game);
    })
    return (
        <div className="flex flex-wrap justify-center mt-6 mx-3" >
            <div className="w-[1000px] mb-4">
                <div className="relative border-4 border-accent rounded-xl overflow-hidden shadow-lg ">
                    <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
                        <h2 className='text-[32px] text-text text-bold'>
                            {game.name}
                        </h2>
                        <button className='bg-accent text-text px-2 p-1 rounded-xl'>
                            View game
                        </button>
                    </div>
                    {/* Game image */}
                    <img
                        className="w-full h-[400px] object-cover rounded-xl"
                        src={game.background_image}
                        alt={game.name}
                    />
                    {/* Background overlay main image */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-text text-[40px] font-bold bg-accent opacity-10">
                    </div>
                </div>
            </div>
        </div>
    );
}


export default GameBanner;
