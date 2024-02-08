import React from "react";
import TopRatedGames from "../components/GetTopRatedGames";
function Home() {
   return (
      <div className="grid grid-cols-4">
         <div className="hidden md:block">Sidebar</div>
         <div className="col-span-4 md:col-span-3">
            <TopRatedGames />
         </div>
      </div>
   );
}

export default Home;
