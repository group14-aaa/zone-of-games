// Components
import Sidebar from "../components/Sidebar";
import RawgTopRatedGames from "../components/RawgTopRatedGames";
import TwitchTopGames from "../components/TwitchTopGames";
// import TwitchTopStreams from '../components/TwitchTopStreams';

const Home = () => {
   return (
      <div className="grid grid-cols-4">
         <div className="bg-primary text-text h-full hidden md:block">
            <Sidebar />
         </div>
         <div className="col-span-4 md:col-span-3 bg-primary text-text">
            <RawgTopRatedGames />
            <TwitchTopGames />
            {/* <TwitchTopStreams /> */}
         </div>
      </div>
   );
};

export default Home;
