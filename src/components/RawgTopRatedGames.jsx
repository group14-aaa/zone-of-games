import { Link } from 'react-router-dom';

const RawgTopRatedGames = ({ gamesList }) => {

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-gray-400 mb-4 mt-6 text-center">
        Most Popular Games
      </h2>
      <div className="flex flex-wrap justify-center">

        {/* Container for the top games */}
        <div className="flex flex-wrap w-full justify-center">
          {gamesList.sort((a, b) => b.rating - a.rating).map((game, index) => index < 24 && (
            <div key={game.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-secondary rounded overflow-hidden shadow-lg m-4 group hover:scale-110 transition-all duration-300 ease cursor-pointer">

              {/* Game image */}
              <Link to={`/games/${game.id}`}>
                <img className="w-full h-40 object-cover" src={game.short_screenshots[0].image} alt={game.name} />
              </Link>

              {/* Game name and rating */}
              <div className="px-6 py-4">
                <div className="font-bold text-base mb-2">
                  {`${index + 1}. ${game.name}`}
                </div>
                <p className="text-gray-400 text-sm">
                  Rating: {game.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RawgTopRatedGames;
